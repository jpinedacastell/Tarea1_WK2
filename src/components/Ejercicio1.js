import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio1 = () => {
  const [usuario, setUsuario] = useState({ nombre: '', edad: '' });
  const [errorEdad, setErrorEdad] = useState('');

  const handleNombreChange = (nombre) => {
    setUsuario(prevState => ({ ...prevState, nombre: nombre }));
  };

  const handleEdadChange = (edad) => {
    if (edad === '' || /^[0-9]+$/.test(edad)) {
      setUsuario(prevState => ({ ...prevState, edad: edad }));
      setErrorEdad(''); 
    } else {
      setErrorEdad('La edad debe ser un valor numérico.');
    }
  };


  const edadValida = usuario.edad !== '' && /^[0-9]+$/.test(usuario.edad);

  return (
    <View>
      
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={usuario.nombre}
        onChangeText={handleNombreChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={usuario.edad}
        onChangeText={handleEdadChange}
        keyboardType="numeric" 
      />

      {errorEdad ? <Text style={styles.error}>{errorEdad}</Text> : null}

     
      {usuario.nombre && edadValida ? (
        <Text style={styles.saludo}>
          Hola, {usuario.nombre}. Tienes {usuario.edad} años. 
        </Text>
      ) : (
        <Text>Por favor, completa tu nombre y una edad válida.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  saludo: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Ejercicio1;