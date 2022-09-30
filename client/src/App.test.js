import {
  filterPokemonByType,
  filterPokemonCreated,
  sortPokemonsAlphabetically,
  sortPokemonsByStrength,
} from "../src/actions/index";

describe("Reducer-Actions Tests:", () => {
  it("Debberia devolver una Action con Props Type FILTER_POKEMONS_BY_TYPE & payload, el valor es enviado con un argumento:", () => {
    expect(filterPokemonByType("flying")).toEqual({
      type: "FILTER_POKEMONS_BY_TYPE",
      payload: "flying",
    });
  });

  it('Debberia devolver una Action con Props Type "FILTER_POKEMONS_BY_TYPE" & payload, el valor es enviado con un argumento:', () => {
    expect(filterPokemonCreated("created")).toEqual({
      type: "FILTER_POKEMONS_CREATED",
      payload: "created",
    });
  });

  it('Debberia devolver una Action con Props Type "SORT_POKEMONS_BY_STRENGTH" & payload, the value is send as an argument:', () => {
    expect(sortPokemonsByStrength("asc")).toEqual({
      type: "SORT_POKEMONS_BY_STRENGTH",
      payload: "asc",
    });
  });

  it('Debberia devolver una Action con Props Type "SORT_POKEMONS_ALPHABETICALLY" & payload, the value is send as an argument:', () => {
    expect(sortPokemonsAlphabetically("asc")).toEqual({
      type: "SORT_POKEMONS_ALPHABETICALLY",
      payload: "asc",
    });
  });
});
