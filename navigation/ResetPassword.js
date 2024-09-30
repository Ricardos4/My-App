import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import appFirebase from "../Screens/credenciales"; // Asegúrate de que la ruta sea correcta
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useTranslation } from "react-i18next";

const auth = getAuth(appFirebase);

export default function ResetPasswordScreen({ navigation }) {
  // Cambia pstyle a { navigation }
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Éxito",
        "Se ha enviado un correo para restablecer la contraseña."
      );
      navigation.navigate("Login"); // Redirigir a la pantalla de inicio de sesión
    } catch (error) {
      console.error(error);
      Alert.alert(t("check_your_email"));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("reset_password")}</Text>
      <TextInput
        placeholder={t("your_email")}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <Pressable style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>{t("send_email")}</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{t("back")}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#525FE1",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: "#525FE1",
    fontSize: 16,
  },
});
