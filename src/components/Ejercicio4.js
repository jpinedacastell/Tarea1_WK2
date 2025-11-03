import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Ejercicio4 = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000); 

 
    return () => clearTimeout(timer);
  }, []); 

  return (
    <View style={styles.container}>
     
      {cargando ? (
        <>
         
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.texto}>Cargando... </Text>
        </>
      ) : (
        <>
        
          <Text style={styles.bienvenido}>
            Bienvenido a la aplicación 
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    minHeight: 100,
  },
  texto: {
    marginTop: 10,
    fontSize: 16,
  },
  bienvenido: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Ejercicio4;