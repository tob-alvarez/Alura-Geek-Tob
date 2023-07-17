const regExpProductName = /^[a-zA-Z0-9\s]+$/;
const regExpPrecio = /^[0-9]+$/; // Corrección: Eliminé el símbolo $ al final de la expresión regular.
const regExpUrl = /^https:\/\/[^ "]+$/;
const allowedCategories = ["Star Wars", "Consolas", "Varios"];

export const validateProductName = (field) => {
    return regExpProductName.test(field) && field.trim() !== ""; // Corrección: Corregí la condición de la validación.
};

export const validatePrecio = (field) => {
    return (
        regExpPrecio.test(field) &&
        field.trim() !== "" &&
        Number(field.trim()) > 0 && // Corrección: Parseé el valor del campo a número para comparar correctamente.
        Number(field.trim()) < 5000
    );
};

export const validateUrl = (field) => {
    return regExpUrl.test(field) && field.trim() !== "";
};

export const validateDescripcion = (field) => {
    return (
        field.trim() !== "" &&
        field.trim().length <= 200
    );
};

export const validateCategorias = (field) => {
    return allowedCategories.includes(field);
};
