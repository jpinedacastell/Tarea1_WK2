import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ejercicio3 = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000); 

    return () => {
      clearInterval(intervalId);
      console.log('Reloj detenido. Componente desmontado.');
    };
  }, []); 


  const formatTime = (date) => {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <View>
      <Text style={styles.reloj}>
        {formatTime(hora)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reloj: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace', 
    backgroundColor: '#111',
    color: '#0f0',
    padding: 10,
    borderRadius: 5,
  },
});

export default Ejercicio3;