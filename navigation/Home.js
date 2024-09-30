import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  StyleSheet,
  style,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { productStyle } from "../styles/productStyle";
import { productosprincipal } from "../apis/productos";
import { signOut, getAuth, user, onAuthStateChanged } from "firebase/auth";
import { styleDetail } from "../styles/detailStyle";

export default function Product({ navigation }) {
  const { t } = useTranslation();

  const productList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetail", { detail: item })}
      >
        <View style={productStyle.tarjetaDetail}>
          <Image source={{ uri: item.imagen }} style={productStyle.imagen} />
          <View style={productStyle.contenido}>
            <Text style={productStyle.nombre}>{t(item.nombre)}</Text>
            <Text style={productStyle.precio}>$ {item.precio}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styleDetail.buttonContainer}>
        <Button title={t("logout")} onPress={() => navigation.goBack()} />
      </View>

      <View style={productStyle.containerList}>
        <FlatList
          data={productosprincipal}
          keyExtractor={(item) => item.id.toString()}
          renderItem={productList}
        />
      </View>
    </SafeAreaView>
  );
}
