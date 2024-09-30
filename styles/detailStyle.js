import { StyleSheet } from "react-native";

export const styleDetail = StyleSheet.create({
  styleImage: {
    top: 40,
    height: 250,
    width: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  cardContainer: {
    position: "absolute", // Para que se superponga sobre la imagen
    top: 310, // Ajusta esta propiedad para controlar la distancia desde la parte superior de la imagen
    left: 20, // Ajusta esta propiedad para controlar la distancia desde el borde izquierdo
    right: 20, // Ajusta esta propiedad para controlar la distancia desde el borde derecho
    backgroundColor: "white",
    padding: 30,
    shadowOpacity: 0.5,
    borderRadius: 10,
    elevation: 2, // Nivel de elevación para la sombra
  },
  titleStyle: {
    color: "#FD8E3E",
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 30,
  },
  containerPrice: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerAmount: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textAmount: {
    backgroundColor: "#EEEEEE",
    padding: 8,
    borderRadius: 50,
    marginHorizontal: 15,
    fontSize: 10,
  },
  textPrice: {
    color: "#FD8E3E",
    fontSize: 16,
    fontWeight: "500",
  },
  textTag: {
    marginTop: 40,
    marginBottom: 20,
    color: "#FD8E3E",
    fontSize: 14,
  },
  textDescription: {
    fontSize: 16,
    fontWeight: "400",
  },
  containerButton: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  cartButton: {
    backgroundColor: "#FD8E3E",
    borderRadius: 15,
    paddingVertical: 20,
    width: 150,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5, // ajusta este valor para controlar la sombra en la dirección Y
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
  buttonContainer: {
    padding: 10,
    position: "absolute",
    left: 5,
    top: 30,
  },
  topButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  tagDetail: {
    position: "absolute", // Para que se superponga sobre la imagen
    top: 100, // Ajusta esta propiedad para controlar la distancia desde la parte superior de la imagen
    left: 20, // Ajusta esta propiedad para controlar la distancia desde el borde izquierdo
    right: 20, // Ajusta esta propiedad para controlar la distancia desde el borde derecho
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",

    shadowOpacity: 0.5,
    borderRadius: 10,
    elevation: 2,
  },
});
