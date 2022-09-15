import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from './styles';
import {theme} from '../../assets/colors';

import {Ionicons} from '@expo/vector-icons';

export default function Map() {
  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <MapView
         initialRegion={{
          latitude: -23.4476497,
          longitude: -46.5305099,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
         }} 
         style={styles.map} />
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.containerLocation}>
          <Text>Cidade: Guarulhos</Text>
          <Text style={{fontSize: 18, marginTop: 4}}>Rua Terezinha</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.containerInformations}>
          <Ionicons name="location-outline" size={30} color={theme.colors.grey[700]} />
          <View style={styles.containerProfissional}>
            <Text style={styles.name}>Alberto Silva</Text>
            <Text style={styles.location}>2km de você</Text>
          </View>
        </View>
        <View style={styles.containerInformations}>
          <Ionicons name="location-outline" size={30} color={theme.colors.grey[700]} />
          <View style={styles.containerProfissional}>
            <Text style={styles.name}>Giovana Costa</Text>
            <Text style={styles.location}>1km de você</Text>
          </View>
        </View>
      </View>
    </View>
  );
}