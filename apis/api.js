import axios from "axios";

// Cambia esta URL a la dirección de tu servidor
const API_URL = "http://localhost:5000"; // o la URL de tu servidor en producción

export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, {
      userId,
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    throw error;
  }
};

export const removeFromCart = async (userId, productId) => {
  try {
    const response = await axios.delete(`${API_URL}/cart`, {
      data: { userId, productId },
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar del carrito:", error);
    throw error;
  }
};

export const getCart = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/cart/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    throw error;
  }
};
export const createInvoice = async (userId, items) => {
  try {
    const response = await axios.post(`${API_URL}/invoices`, {
      userId,
      items,
      total: items.reduce((acc, item) => acc + item.price * item.quantity, 0), // Calcular total
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear factura:", error);
    throw error;
  }
};
