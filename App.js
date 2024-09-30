import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  registerCallableModule,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import appFirebase from "./Screens/credenciales";
import "react-native-gesture-handler";
import Login from "./navigation/Login";
import Home from "./navigation/Home";
import ProductDetail from "./Screens/ProductDetail";
import ResetPassword from "./navigation/ResetPassword";
import Register from "./navigation/Register";
import { I18nextProvider } from "react-i18next";
import i18n from "./Screens/i18n";
import { productStyle } from "./styles/productStyle";
const Stack = createStackNavigator();
const auth = getAuth(appFirebase);

export default function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  function MyStack() {
    return (
      <I18nextProvider i18n={i18n}>
        <View style={productStyle.idioma}>
          <Pressable onPress={() => changeLanguage("es")}>
            <Image
              style={productStyle.bandera}
              source={require("./assets/espanol.jpg")}
            ></Image>
          </Pressable>
          <Pressable onPress={() => changeLanguage("en")}>
            <Image
              style={productStyle.bandera}
              source={require("./assets/ingles.jpg")}
            ></Image>
          </Pressable>
        </View>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={i18n.t("login")}
            component={Login}
            options={{
              title: i18n.t("login"),
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#525FE1" },
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: i18n.t("home"),
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#525FE1" },
            }}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              title: i18n.t("productdetail"),
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              title: i18n.t("reset_password"),
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: i18n.t("register"),
            }}
          />
        </Stack.Navigator>
      </I18nextProvider>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
