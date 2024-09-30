import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Pressable,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import appFirebase from "../Screens/credenciales";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { productStyle } from "../styles/productStyle";

const auth = getAuth(appFirebase);

export default function App(props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert(t("logging_in"));
      props.navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert(t("User_or_password_is_incorrect"));
    }
  };

  const handleRegister = () => {
    props.navigation.navigate("Register");
  };

  return (
    <View style={productStyle.padre}>
      <StatusBar />
      <Image
        source={require("../assets/Profile.jpeg")}
        style={productStyle.perfil}
      />
      <Text style={productStyle.Subtitle}>{t("sing_in")}</Text>
      <View style={productStyle.tarjeta}>
        <View style={productStyle.cajatexto}>
          <TextInput
            placeholder={t("your_email")}
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={productStyle.cajatexto}>
          <TextInput
            placeholder={t("enter_your_password")}
            secureTextEntry={true}
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={productStyle.padreboton}>
          <TouchableOpacity
            style={productStyle.cajaboton}
            onPress={handleLogin}
          >
            <Text style={productStyle.textoboton}>{t("login")}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={productStyle.forgotPassword}>
        <Pressable onPress={handleRegister}>
          <Text style={productStyle.forgotPassword}>
            {t("i_no_have_an_account")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
