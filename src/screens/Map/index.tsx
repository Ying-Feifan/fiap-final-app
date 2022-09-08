import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from './styles';

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Map</Text>

      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </View>
  );
}