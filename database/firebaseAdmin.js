const admin = require("firebase-admin");
const serviceAccount = require("./ruta/a/tu/archivo-de-clave.json"); // Descarga la clave de servicio desde Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tu-proyecto.firebaseio.com", // Reemplaza con tu URL
});

const db = admin.firestore();
module.exports = db;
