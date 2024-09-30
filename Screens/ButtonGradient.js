import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient() {
return(
  <TouchableOpacity>
    <LinearGradient
        colors={[ '#4c669f', '#3b5998']}
        style={styles.button}>
       <Text style={styles.text}>SIGN IN</Text>
    </LinearGradient>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    width: 200,
    marginTop: 20,
  },

  text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
  },

  button: {
      width: '80%',
      height: 50,
      borderRadius: 25,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },

});