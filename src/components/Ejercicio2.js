import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Ejercicio2 = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`); 
  }, [contador]); 

 
  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <View>
      <Text style={styles.contadorTexto}>Contador: {contador}</Text>
      <Button
        title="Incrementar +1"
        onPress={incrementarContador}
      />

 
      {contador > 0 && contador % 5 === 0 ? (
        <Text style={styles.multiplo}>
          Ha alcanzado un múltiplo de 5 
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  contadorTexto: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  multiplo: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Ejercicio2;