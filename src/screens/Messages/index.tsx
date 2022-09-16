import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './styles';
import {AntDesign, FontAwesome5} from '@expo/vector-icons';
import { theme } from '../../assets/colors';

const dataFavorites = [
  {
    key: String(Math.random()),
    image: require('../../assets/images/woman1.jpeg'),
    name: 'Susana Silva',
    message: 'Oi, tudo bem?'
  },
  {
    key: String(Math.random()),
    image: require('../../assets/images/man1.jpeg'),
    name: 'Gustavo Alves',
    message: 'Meu orçamento é de R$70,00 por consulta'
  },
  {
    key: String(Math.random()),
    image: require('../../assets/images/woman2.jpeg'),
    name: 'Isabele Morais',
    message: 'Obrigada 😄'
  },
  {
    key: String(Math.random()),
    image: require('../../assets/images/man2.jpeg'),
    name: 'Marcio Pereira',
    message: 'Podemos fazer uma sessão experimental'
  },
]

export default function Messages() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.containerSearch}>
          <TextInput 
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={styles.inputSearch}
            placeholder="Procure"
          />
          <AntDesign name="search1" color={theme.colors.dark} size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>All Messages</Text>

        <ScrollView style={{marginBottom: 20}}>
          
          {dataFavorites.map((items) =>
          
          <View style={styles.containerInfos} key={items.key}>
            <Image style={styles.image} source={items.image} />
            <TouchableOpacity style={styles.containerBio}>
              <Text style={styles.name}>{items.name}</Text>
              <Text style={styles.desc}>{items.message}</Text>
            </TouchableOpacity>
            
          </View>
          )}
        </ScrollView>
    </View>
  );
}