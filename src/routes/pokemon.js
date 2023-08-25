const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { normalizeDataApi, normalizeDataDb } = require("./utils");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/pokemons", async (req, res) => {
  const { name, page } = req.query;
  const limit = 20; // Número de pokemones por página
  const offset = (page - 1) * limit; // Calcular el offset en función de la página actual

  try {
    if (name) {
      // Consulta por nombre
      const nameLower = name.trim().toLowerCase();
      const pokemonDbByName = await Pokemon.findOne({
        where: { name: nameLower },
        include: Type,
      });

      if (pokemonDbByName !== null) {
        return res.json(normalizeDataDb(pokemonDbByName));
      } else {
        const dataApiResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${nameLower}`
        );
        const dataApiByName = normalizeDataApi(dataApiResponse);

        return res.json(dataApiByName);
      }
    } else {
      // Consulta de paginación
      const dataApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      );
      const dataArr = dataApi.data.results;

      const pokemonsDataApiPromises = dataArr.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return { ...normalizeDataApi(response) };
      });

      const pokemonsApi = await Promise.all(pokemonsDataApiPromises);

      const dataDB = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });

      const dataDBNormalized = dataDB.map((pokemon) => {
        return normalizeDataDb(pokemon);
      });

      const totalPokemons = pokemonsApi.concat(dataDBNormalized);
      return res.json(totalPokemons);
    }
  } catch (error) {
    res.status(404).json({ msg: "Pokemons not found. " + error });
  }
});

//{type, urlimg, id, height, weitght, stats:{hp, attack...}}
router.get("/pokemon/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  try {
    const pokemonDB = await Pokemon.findByPk(idPokemon, { include: Type });
    if (pokemonDB === null)
      return res.status(404).json("Error, id not found: " + error);
    return res.json(normalizeDataDb(pokemonDB));
  } catch {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      );
      const dataApiResponse = normalizeDataApi(response);
      return res.json(dataApiResponse);
    } catch (error) {
      res.status(404).json("Error, no encuentra el id: " + error);
    }
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    let { name, types, urlImg, height, weight, hp, attack, defense, speed } =
      req.body;

    if (!name) return res.status(404).send("Necessary parameters not found");
    if (name) {
      if (!hp) hp = 1;
      if (!attack) attack = 1;
      if (!defense) defense = 1;
      if (!speed) speed = 1;
      if (!height) height = 1;
      if (!weight) weight = 1;
      if (!types.length) types = ["unknown"];

      const nameLower = name.trim().toLowerCase(); //Lo almaceno con minuscula en Db, así estan en la API
      const typesLower = types?.map((type) => type.toLowerCase());
      const pokemonCreated = await Pokemon.create({
        name: nameLower,
        urlImg,
        height,
        weight,
        hp,
        attack,
        defense,
        speed,
      });

      const typeDbArr = await Type.findAll({
        where: { name: typesLower },
      });

      const typeDbId = typeDbArr?.map((p) => p.dataValues.id);

      await pokemonCreated.addType(typeDbId);

      const newPokemon = await Pokemon.findOne({
        where: { name: nameLower },
        include: Type,
      });
      const newPokemonNormalized = normalizeDataDb(newPokemon);
      return res.json(newPokemonNormalized);
    }
  } catch (e) {
    return res.status(404).json("Error ---> " + e);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);
    if (pokemon !== null) {
      await pokemon.destroy();
      res.json("Pokemon deleted correctly");
    }
  } catch (e) {
    return res.status(404).json("Error ---> " + e);
  }
});

module.exports = router;