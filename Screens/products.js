import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { etiquetas } from "../apis/etiquetas";
import { productStyle } from "../styles/productStyle";
import { productos } from "../apis/productos";
import { addToCart, removeFromCart, getCart } from "./api"; // Importa las funciones de API

export default function Product(props) {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);
  const userId = "ID_DEL_USUARIO"; // Debes obtener el ID del usuario autenticado

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getCart(userId);
        setCart(cartData.items || []);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      }
    };

    fetchCart();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(userId, productId, 1); // Agregar 1 unidad del producto
      Alert.alert(t("producto_agregado"));
      // Opcional: Actualizar el estado del carrito después de agregar
      const updatedCart = await getCart(userId);
      setCart(updatedCart.items || []);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      Alert.alert(t("error_agregar_producto"));
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await removeFromCart(userId, productId);
      Alert.alert(t("producto_eliminado"));
      // Opcional: Actualizar el estado del carrito después de eliminar
      const updatedCart = await getCart(userId);
      setCart(updatedCart.items || []);
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
      Alert.alert(t("error_eliminar_producto"));
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={productStyle.boxTag}
      onPress={() => handleAddToCart(item.id)}
    >
      <Text style={productStyle.textTag}>{t(item.title)}</Text>
      {/* Agregar un botón para eliminar del carrito */}
      <Button
        title={t("eliminar")}
        onPress={() => handleRemoveFromCart(item.id)}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={productStyle.ContainerTag}>
        <FlatList
          data={etiquetas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={productStyle.containerList}>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={t("ver_carrito")}
          onPress={() => props.navigation.navigate("Cart", { cart })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    position: "absolute",
    left: 5,
    top: 30,
  },
});
