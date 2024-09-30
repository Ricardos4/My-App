// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my application",
      login: "Login",
      password: "Password",
      register: "Register",
      sing_in: "Sing In to your account",
      logging_in: "Loggin In",
      home: "Home",
      reset_password: "Reset Password",
      register: "Register",
      send_email: "Send Email",
      user_register: "User Register",
      enter_your_email: "Enter Your Email",
      enter_your_password: "Enter Your PassWord",
      back: "Back",
      User_or_password_is_incorrect: " User or Password is Incorrect",
      your_email: "Your Email@Gmail.com",
      forgot_your_password: "Forgot Your Password",
      i_no_have_an_account: "I Don't Have An Account",
      check_your_email:
        "The reset email could not be sent. Please check your email",
      password_long:
        "The password must be at least 8 characters long and contain numbers.",
      email_send_exit: "A password reset email has been sent.",
      logout: "Log Out",
      main_screen: "Main Screen",
      product: "Product",
      productdetail: "Product Detail",
      all_label: "All",
      burger_label: "Burger",
      pizza_label: "Pizza",
      drinks_label: "Drinks",
      sushi_label: "Sushi",
      china_label: "China",
      mexican_food_label: "Mexican Food",
      hamburguesaProducto: "Angus Burger",
      salad_label: "Salad",
      spaghetti_label: "Spaghett",
      burrito_label: "Burrito",
      wrap_label: "Wrap",
      hotdog_label: "Hot Dog",
      sandwich_label: "Sandwich",
      ribs_label: "Ribs",
      quesadilla_label: "Quesadilla",
      fish_tacos_label: "Fish Tacos",
      steak_label: "Steak",
      pancakes_label: "Pancakes",
      smoothie_label: "Smoothie",
      brownie_label: "Brownie",
      hamburguesa_descripcion:
        "A delicious burger with juicy meat, melted cheese, crispy lettuce, fresh tomato and special sauce, all on a soft bun.",
      burger_label: "Burger",
      pizza_descripcion:
        "A freshly baked pizza with a base of tomato sauce, melted mozzarella and your favorite toppings, all on a crispy crust.",
      pizza_label: "Pizza",
      pollo_descripcion:
        "Seasoned and breaded chicken pieces, fried to perfection until golden brown and crispy on the outside and juicy and tender on the inside.",
      fried_chicken_label: "Fried Chicken",
      tacos_descripcion:
        "Corn tortillas filled with seasoned meat, chopped onion, fresh cilantro, and served with hot sauce, lime and fresh garnishes such as avocado and radishes.",
      tacos_label: "Tacos",
      plato_mixto_descripcion:
        "A hearty dish with a mix of delicious flavors, including grilled steak, grilled chicken, smoked pork ribs, french fries and roasted vegetables.",
      mixed_plate_label: "Mixed Plate",
      sushi_descripcion:
        "Slices of fresh fish, perfectly cooked sushi rice, nori seaweed and a variety of fresh and tasty ingredients, all rolled into an exquisite piece of sushi.",
      sushi_label: "Sushi",
      bebidas_descripcion:
        "Refreshing Italian drinks with red and yellow fruit flavors",
      drinks_label: "Drinks",
      ensalada_descripcion:
        "Fresh salad with a mix of lettuces, cherry tomatoes, cucumbers, and a light vinaigrette",
      spaghetti_descripcion:
        "Al dente spaghetti with homemade tomato sauce, meatballs, and Parmesan cheese.",
      burrito_descripcion:
        "Large burrito filled with meat, beans, rice, cheese, and guacamole, wrapped in a soft tortilla.",
      wrap_descripcion:
        "Wheat tortilla filled with chicken, vegetables, and a delicious creamy sauce. ",
      hotdog_descripcion:
        "Classic hotdog with grilled sausage, crispy onions, mustard, and ketchup.",
      sandwich_descripcion:
        " Whole grain sandwich with turkey, cheese, lettuce, and tomato, ideal for a quick meal. ",
      costillas_descripcio:
        "Tender and juicy pork ribs, marinated in barbecue sauce, served with fries.",
      quesadilla_descripcion:
        "Tortillas filled with melted cheese and chicken, grilled to perfection, served with guacamole and sour cream.",
      tacos_pescado_descripcion:
        "Light tacos with fresh breaded fish, shredded cabbage, and a cilantro sauce.",
      filete_descripcion:
        "Juicy and well-seasoned steak, cooked to perfection, served with mashed potatoes and asparagus. ",
      pancakes_descripcion:
        "Fluffy pancakes served with butter and honey, perfect for breakfast or brunch",
      smoothie_descripcion:
        "  Refreshing smoothie made with natural fruits, a healthy and delicious option for any time of the day.",
      brownie_descripcion:
        " Chocolate brownie, soft and fluffy, served with a scoop of vanilla ice cream.",
      success: "Success",
      added_to_cart: "You have added",
      add_to_cart: "Add To Cart",
      session_closed: "Session closed",
      error_logging_out: "Error logging out",
      registered_user: " User Registered",
      user_no_creted: "User No Created",
      user_already_creted: "Or User Already Created",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi aplicación",
      login: "Iniciar sesión",
      password: "Contrasena",
      REACT_NAVIGATION_DEVTOOLSegister: "Registrarse",
      sing_in: "Entra en tu cuenta",
      logging_in: "Iniciando Sesion",
      home: "Inicio",
      reset_password: "Restablecer Contrasena",
      register: "Registrar",
      send_email: "Enviar Correo",
      user_register: "Registrar Usuario",
      enter_your_email: "Ingrese su Correo",
      enter_your_password: "Ingrese Su Contrasena",
      back: "Volver",
      User_or_password_is_incorrect: " Usuario o Contrasena Incorrecta",
      your_email: "Tu Correo@Gmail.com",
      forgot_your_password: "Olvide Mi Contrasena",
      i_no_have_an_account: "No tengo Una Cuenta",
      check_your_email:
        "No se ha podido enviar el correo electrónico de restablecimiento. Por favor, comprueba tu correo electrónico.",
      password_long:
        "La contraseña debe tener al menos 8 caracteres y contener número",
      email_send_exit:
        "Se ha enviado un correo para restablecer la contraseña.",
      logout: "Cerrar Sesion",
      main_screen: "Pantalla Principal",
      product: "Producto",
      productdetail: "Detalle Del Producto",
      all_label: "Todo",
      burger_label: "Hamburguesa",
      pizza_label: "Pizza",
      drinks_label: "Bebidas",
      sushi_label: "Sushi",
      china_label: "China",
      mexican_food_label: "Mexicana",
      hamburguesaProducto: "Hamburguesa Angus",
      salad_label: "Ensalada",
      spaghetti_label: "Espagueti",
      burrito_label: "Burrito",
      wrap_label: "Wrap",
      hotdog_label: "Perro Caliente",
      sandwich_label: "Sándwich",
      ribs_label: "Costillas",
      quesadilla_label: "Quesadilla",
      fish_tacos_label: "Tacos de Pescado",
      steak_label: "Filete",
      pancakes_label: "Panqueques",
      smoothie_label: "Batido",
      brownie_label: "Brownie",
      hamburguesa_descripcion:
        "Una deliciosa hamburguesa con carne jugosa, queso derretido, lechuga crujiente, tomate fresco y salsa especial, todo en un suave panecillo.",
      burger_label: "Hamburguesa",
      pizza_descripcion:
        "Una pizza recién horneada con una base de salsa de tomate, mozzarella derretida y tus ingredientes favoritos, todo sobre una masa crujiente.",
      pizza_label: "Pizza",
      pollo_descripcion:
        "Trozos de pollo sazonados y empanizados, fritos a la perfección hasta que estén dorados y crujientes por fuera, y jugosos y tiernos por dentro.",
      fried_chicken_label: "Pollo Frito",
      tacos_descripcion:
        "Tortillas de maíz rellenas de carne sazonada, cebolla picada, cilantro fresco, y acompañadas de salsa picante, limón y guarniciones frescas como aguacate y rábanos.",
      tacos_label: "Tacos",
      plato_mixto_descripcion:
        "Un plato abundante con una mezcla de sabores deliciosos, que incluye carne asada a la parrilla, pollo a la parrilla, costillas de cerdo ahumadas, papas fritas y verduras asadas.",
      mixed_plate_label: "Plato Mixto",
      sushi_descripcion:
        "Rodajas de pescado fresco, arroz de sushi perfectamente cocido, alga nori y una variedad de ingredientes frescos y sabrosos, todo enrollado en una exquisita pieza de sushi.",
      sushi_label: "Sushi",
      bebidas_descripcion:
        "Bebidas italianas refrescantes con sabores de frutas rojas y amarillas",
      drinks_label: "Bebidas",
      ensalada_descripcion:
        "Ensalada fresca con una mezcla de lechugas, tomates cherry, pepinos y una vinagreta ligera",
      spaghetti_descripcion:
        "Espagueti al dente con salsa de tomate casera, albóndigas y queso parmesano.",
      burrito_descripcion:
        "Burrito grande relleno de carne, frijoles, arroz, queso y guacamole, enrollado en una tortilla suave.",
      wrap_descripcion:
        "Tortilla de trigo rellena de pollo, vegetales y una deliciosa salsa cremosa.",
      hotdog_descripcion:
        "Hotdog clásico con salchicha a la parrilla, cebolla crujiente, mostaza y ketchup.",
      sandwich_descripcion:
        "Sándwich de pan integral con pavo, queso, lechuga y tomate, ideal para una comida rápida.",
      costillas_descripcion:
        "Costillas de cerdo tiernas y jugosas, marinadas en salsa barbacoa, servidas con papas fritas.",
      quesadilla_descripcion:
        "Tortillas rellenas de queso derretido y pollo, doradas a la perfección, servidas con guacamole y crema agria.",
      tacos_pescado_descripcion:
        "Tacos ligeros con pescado fresco empanizado, col rallada y una salsa de cilantro.",
      filete_descripcion:
        "Filete jugoso y bien sazonado, cocido a la perfección, acompañado de puré de papas y espárragos.",
      pancakes_descripcion:
        "Pancakes esponjosos servidos con mantequilla y miel, perfectos para el desayuno o brunch.",
      smoothie_descripcion:
        "Smoothie refrescante hecho con frutas naturales, una opción saludable y deliciosa para cualquier momento del día.",
      brownie_descripcion:
        "Brownie de chocolate, suave y esponjoso, servido con una bola de helado de vainilla.",
      success: "Éxito",
      added_to_cart: "Haz añadido",
      add_to_cart: "Añadir al carrito",
      session_closed: "Sesión cerrada",
      error_logging_out: "Error al cerrar sesión",
      registered_user: " Usuario Registrado",
      user_no_creted: "Usuario No Creado",
      user_already_creted: " El Usuario Ya Existe",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma por defecto
  fallbackLng: "es", // idioma de reserva
  interpolation: {
    escapeValue: true, // react ya se encarga de esto
  },
});

export default i18n;
