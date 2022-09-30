//Función para validar formulario. Agrega msj de errores al objeto errors
export default function validateForm(dataForm) {
  let errors = {};
  if (!dataForm.name || dataForm.name.length > 10)
    errors.name = "Nombre es requerido, no más de 10 caracteres";
  if (dataForm.hp < 0 || dataForm.hp > 200)
    errors.hp = "¡Invalido! El Rango dene ser entre 0 y 200";
  if (dataForm.attack < 0 || dataForm.attack > 200)
    errors.attack = "¡Invalido! El Rango dene ser entre 0 y 200";
  if (dataForm.defense < 0 || dataForm.defense > 200)
    errors.defense = "¡Invalido! El Rango dene ser entre 0 y 200";
  if (dataForm.speed < 0 || dataForm.speed > 200)
    errors.speed = "¡Invalido! El Rango dene ser entre 0 y 200";
  if (dataForm.height < 0 || dataForm.height > 200)
    errors.height = "¡Invalido! El Rango dene ser entre 0 y 200";
  if (dataForm.weight < 0 || dataForm.weight > 200)
    errors.weight = "¡Invalido! El Rango dene ser entre 0 y 200";
  if (!urlValidation(dataForm.urlImg) && dataForm.urlImg !== "") {
    errors.urlImg = "Solo escriba la URL de la imagen";
  }
  return errors;
}

const urlValidation = (URL) => {
  const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|gif))/);
  return regex.test(URL);
};
