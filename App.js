/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const Item = ({title, edad, edadcal}) => (
    <View>
      <Text style={{fontSize: 25, fontWeight: '700'}}> {title} </Text>
      <Text>
        Edad: {edad} actual, calculada{edadcal}
      </Text>
    </View>
  );

  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [edadcal, setedadcal] = useState(0);
  const [contador, setcontador] = useState(0);
  const renderItem = ({item}) => (
    <Item title={item.nombre} edad={item.edad} edadcal={item.edadcal} />
  );
  const agregarPersona = () => {
    setData([...data, {nombre: nombre, edad: edad, edadcal: edad}]);
  };
  const add = () => {
    setcontador(contador + 1);
    data.forEach(key => {
      data[key].edadcal++;
    });
  };
  const rest = () => {
    setcontador(contador - 1);
    data.forEach(key => {
      data[key].edadcal--;
    });
  };
  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
      <ScrollView>
        <Text style={styles.titulo}>Calcular edades</Text>
        <View style={styles.form}>
          <View style={styles.form_group}>
            <Text style={styles.form_text}>Nombre:</Text>
            <TextInput
              placeholder="nombre"
              style={styles.form_control}
              placeholderTextColor="#BDC3C7"
              value={nombre}
              onChangeText={setNombre}
            />
          </View>
          <View style={styles.form_group}>
            <Text style={styles.form_text}>Edad actual:</Text>
            <TextInput
              placeholder="edad"
              style={styles.form_control}
              placeholderTextColor="#BDC3C7"
              value={edad}
              onChangeText={setEdad}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={agregarPersona}>
            <Text style={{color: '#fff', textAlign: 'center'}}>Agregar</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={data} renderItem={renderItem} />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.suma} onPress={rest}>
          <Text style={{color: '#fff'}}>Restar</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
          {contador}
        </Text>
        <TouchableOpacity style={styles.resta}>
          <Text style={{color: '#fff', textAlign: 'center'}} onPress={add}>
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    color: 'green',
    fontSize: 30,
  },
  form: {
    width: '100%',
    height: 300,
    padding: 5,
    backgroundColor: 'gray',
  },
  form_text: {
    fontSize: 20,
  },
  form_group: {
    padding: 12,
  },
  form_control: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  suma: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  resta: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default App;
