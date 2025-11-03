// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';

// Importamos los 4 componentes de los ejercicios
import Ejercicio1 from './src/components/Ejercicio1';
import Ejercicio2 from './src/components/Ejercicio2';
import Ejercicio3 from './src/components/Ejercicio3.js';
import Ejercicio4 from './src/components/Ejercicio4';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.tituloPrincipal}>Tarea 1: Hooks useState y useEffect</Text>

       
        <View style={styles.ejercicioContainer}>
          <Text style={styles.ejercicioTitulo}>Ejercicio 1: Manejo de estado con useState </Text>
          <Ejercicio1 />
        </View>

        
        <View style={styles.ejercicioContainer}>
          <Text style={styles.ejercicioTitulo}>Ejercicio 2: Contador </Text>
          <Ejercicio2 />
        </View>

       
        <View style={styles.ejercicioContainer}>
          <Text style={styles.ejercicioTitulo}>Ejercicio 3: Reloj en tiempo real </Text>
          <Ejercicio3 />
        </View>

        <View style={styles.ejercicioContainer}>
          <Text style={styles.ejercicioTitulo}>Ejercicio 4: Simulación de carga </Text>
          <Ejercicio4 />
        </View>

        <Text style={styles.tituloPrincipal}>Jorge Pineda - 61921658</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  ejercicioContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  ejercicioTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default App;