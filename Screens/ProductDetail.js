import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useTranslation } from "react-i18next";
import { styleDetail } from "../styles/detailStyle";
import { useNavigation } from "@react-navigation/native";
import { addToCart } from "./api"; // Asegúrate de importar la función para agregar al carrito

export default function ProductDetail({ route, navigation }) {
  const { detail } = route.params;
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddToCart = async () => {
    try {
      // Aquí debes obtener el ID del usuario autenticado
      const userId = "ID_DEL_USUARIO"; // Cambia esto por el ID del usuario real
      await addToCart(userId, detail.id, quantity); // Agrega el producto al carrito
      Alert.alert(t("success"), `${t("added_to_cart")} ${t(detail.etiqueta)}`);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      Alert.alert(t("error_adding_to_cart"));
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1); // Incrementa la cantidad
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrementa la cantidad solo si es mayor que 1
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar />
      <View style={styleDetail.buttonContainer}>
        <Button title={t("back")} onPress={handleGoBack} />
      </View>
      <Image source={{ uri: detail.imagen }} style={styleDetail.styleImage} />
      <View style={styleDetail.cardContainer}>
        <Text style={styleDetail.titleStyle}>{t(detail.nombre)}</Text>
        <View style={styleDetail.containerPrice}>
          <View style={styleDetail.containerAmount}>
            <TouchableOpacity onPress={handleDecrease}>
              <Text style={styleDetail.textAmount}>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrease}>
              <Text style={styleDetail.textAmount}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styleDetail.textPrice}>{detail.precio}$</Text>
          </View>
        </View>
        <Text style={styleDetail.textTag}>{t(detail.etiqueta)}</Text>
        <Text style={styleDetail.textDescription}>{t(detail.descripcion)}</Text>
        <View style={styleDetail.containerButton}>
          <TouchableOpacity
            style={styleDetail.cartButton}
            onPress={handleAddToCart} // Conectar el botón de agregar al carrito
          >
            <Text style={styleDetail.textButton}>{t("add_to_cart")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
