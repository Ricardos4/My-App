import { StyleSheet } from "react-native";

export const productStyle = StyleSheet.create({
  ContainerTag: {
    marginTop: 30,
  },
  boxTag: {
    backgroundColor: "#FD8E3E",
    padding: 15,
    borderRadius: 20,
    width: 130,
    height: 50,
    marginHorizontal: 5,
  },
  imagen: {
    flex: 1,
    width: 150,
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: 10,
    marginLeft: 5,
  },
  textTag: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
  containerList: {
    borderLeftColor: "#EEEEEE",
    flex: 2,
    margin: 15,
    padding: 10,
  },
  tarjetaDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  contenido: {
    flex: 1,
    padding: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    marginBottom: 5,
  },
  precio: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FD8E3E",
  },
  padre: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  perfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "white",
  },
  Subtitle: {
    fontSize: 20,
    color: "gray",
  },
  tarjeta: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 20,
    boxShadowColor: "#000",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 0.25,
    boxShadowRadius: 4,
    elevation: 5,
  },
  cajatexto: {
    paddingVertical: 20,
    borderRadius: 30,
    backgroundColor: "#cccccc40",
    marginVertical: 10,
  },
  padreboton: {
    alignItems: "center",
  },
  cajaboton: {
    backgroundColor: "#525FE1",
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20,
  },
  textoboton: {
    textAlign: "center",
    color: "white",
  },
  forgotPassword: {
    marginTop: 10,
    color: "gray",
    fontSize: 16,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  idioma: {
    position: "absolute",
    top: 45,
    right: 5,
    borderRadius: 60,
    flexDirection: "row",
    zIndex: 1000,
  },
  bandera: {
    width: 42,
    height: 30,
    marginRight: 10,
  },
  error: {
    color: "red",
    marginVertical: 10,
  },
});
