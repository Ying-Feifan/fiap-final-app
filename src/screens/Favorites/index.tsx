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
    descricao: 'Psicóloga há 7 anos com\nespecialização em psicologia\ndo sono'
  },
  {
    key: String(Math.random()),
    image: require('../../assets/images/man1.jpeg'),
    name: 'Gustavo Alves',
    descricao: 'Psicólogo há 8 anos com\nespecialização em psicologia\norganizacional'
  },
  {
    key: String(Math.random()),
    image: require('../../assets/images/woman2.jpeg'),
    name: 'Isabele Morais',
    descricao: 'Psicóloga há 3 anos com\nespecialização em psicologia\nescolar/educacional'
  },
  {
    key: String(Math.random()),
    image: require('../../assets/images/man2.jpeg'),
    name: 'Marcio Pereira',
    descricao: 'Psicólogo há 8 anos com\nespecialização em psicologia\njurídica'
  },
]

export default function Favorites() {
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState(true);

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

        <ScrollView>
          {dataFavorites.map((items) =>
          
          <View style={styles.containerInfos} key={items.key}>
            <Image style={styles.image} source={items.image} />
            <TouchableOpacity style={styles.containerBio}>
              <Text style={styles.name}>{items.name}</Text>
              <Text style={styles.desc}>{items.descricao}</Text>
              <View style={styles.containerContact}>
              <FontAwesome5 name="whatsapp-square" size={20} color={theme.colors.black} />
              <Text style={styles.contact}>Entre em contato</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerHeart} onPress={() => setLiked(!liked)}>
              {liked 
              ? 
              <AntDesign name="heart" size={30} color={theme.colors.red} />
              :
              <AntDesign name="hearto" size={30} color={theme.colors.red} />
            }
            </TouchableOpacity>
          </View>
          )}
        </ScrollView>
    </View>
  );
}