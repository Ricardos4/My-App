import React from "react";
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

export default function ProductDetail({ route, navigation }) {
  const { detail } = route.params;
  const { t } = useTranslation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const alerta = () => {
    Alert.alert(t("success"), `${t("added_to_cart")} ${t(detail.etiqueta)}`);
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
            <TouchableOpacity>
              <Text style={styleDetail.textAmount}>-</Text>
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
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
            onPress={() => alerta()}
          >
            <Text style={styleDetail.textButton}>{t("add_to_cart")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
