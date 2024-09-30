// Screens/Register.js
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { productStyle } from "../styles/productStyle";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../Screens/credenciales"; // Asegúrate de que la ruta sea correcta

const auth = getAuth(appFirebase);

export default function Register({ navigation }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    // Ejemplo de validación: al menos 8 caracteres, al menos un número
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    if (!validatePassword(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres y contener números."
      );
      return; // Salir si la contraseña no es válida
    } else {
      setError(""); // Limpiar el mensaje de error
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert(t("registered_user"));
      navigation.navigate("Home"); // Navega a la pantalla de inicio o donde desees
    } catch (error) {
      console.log(error);
      Alert.alert(t("user_no_creted"), t("user_already_creted")); // Muestra el mensaje de error de Firebase
    }
  };

  return (
    <View style={productStyle.padre}>
      <Text style={productStyle.Subtitle}>{t("user_register")}</Text>
      <View style={productStyle.tarjeta}>
        <View style={productStyle.cajatexto}>
          <TextInput
            placeholder={t("enter_your_email")}
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
      </View>
      {error ? <Text style={productStyle.error}>{error}</Text> : null}
      <View style={productStyle.padreboton}>
        <TouchableOpacity
          style={productStyle.cajaboton}
          onPress={handleRegister}
        >
          <Text style={productStyle.textoboton}>{t("register")}</Text>
        </TouchableOpacity>
      </View>
      <View style={productStyle.forgotPassword}>
        <Button title={t("back")} onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
