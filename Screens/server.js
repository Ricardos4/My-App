const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./firebaseAdmin");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Agregar producto al carrito
app.post("/cart", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cartRef = db.collection("cart").doc(userId);
    const cartDoc = await cartRef.get();

    if (cartDoc.exists) {
      // Si el carrito ya existe, actualiza los productos
      const cartData = cartDoc.data();
      const itemIndex = cartData.items.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex > -1) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        cartData.items[itemIndex].quantity += quantity;
      } else {
        // Si no está, agrégalo
        cartData.items.push({ productId, quantity });
      }

      await cartRef.set(cartData);
    } else {
      // Si no existe, crea un nuevo carrito
      await cartRef.set({
        userId,
        items: [{ productId, quantity }],
      });
    }

    res.status(200).send({ message: "Producto agregado al carrito" });
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    res.status(500).send({ error: "Error al agregar al carrito" });
  }
});

// Eliminar producto del carrito
app.delete("/cart", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cartRef = db.collection("cart").doc(userId);
    const cartDoc = await cartRef.get();

    if (cartDoc.exists) {
      const cartData = cartDoc.data();
      cartData.items = cartData.items.filter(
        (item) => item.productId !== productId
      );
      await cartRef.set(cartData);
      res.status(200).send({ message: "Producto eliminado del carrito" });
    } else {
      res.status(404).send({ error: "Carrito no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar del carrito:", error);
    res.status(500).send({ error: "Error al eliminar del carrito" });
  }
});

// Obtener el carrito de un usuario
app.get("/cart/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const cartRef = db.collection("cart").doc(userId);
    const cartDoc = await cartRef.get();

    if (cartDoc.exists) {
      res.status(200).send(cartDoc.data());
    } else {
      res.status(404).send({ error: "Carrito no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    res.status(500).send({ error: "Error al obtener el carrito" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
