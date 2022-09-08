import { View, Text, Image , ScrollView} from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <ScrollView>

      <View>
        <Text style={styles.tabTitle}>Feed</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.feedTitle}>Como saber se devo procurar um psicólogo?</Text>
        <Image
          source={require('../../assets/img/feed-img.png')}
          style={styles.feedImg} />
        <Text style={styles.feedContent}>
        <p>A ajuda psicológica deve ser procurada por qualquer pessoa que queira entender e lidar melhor com as suas emoções para melhorar a sua qualidade de vida.</p>
        <p>No entanto, alguns casos requerem urgência, devido à gravidade da situação.</p>
        <p>Se não forem devidamente tratados, os problemas de ordem emocional podem afetar a nossa saúde física. O estresse, por exemplo, pode provocar dores de cabeça, resfriados, doenças crônicas no estômago e perda do desejo sexual.</p>
        <p>Confira, a seguir, alguns dos sintomas que indicam a necessidade imediata de fazer terapia.</p>
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.feedTitle}>Como saber se devo procurar um psicólogo?</Text>
        <Image
          source={require('../../assets/img/feed-img.png')}
          style={styles.feedImg} />
        <Text style={styles.feedContent}>
        <p>A ajuda psicológica deve ser procurada por qualquer pessoa que queira entender e lidar melhor com as suas emoções para melhorar a sua qualidade de vida.</p>
        <p>No entanto, alguns casos requerem urgência, devido à gravidade da situação.</p>
        <p>Se não forem devidamente tratados, os problemas de ordem emocional podem afetar a nossa saúde física. O estresse, por exemplo, pode provocar dores de cabeça, resfriados, doenças crônicas no estômago e perda do desejo sexual.</p>
        <p>Confira, a seguir, alguns dos sintomas que indicam a necessidade imediata de fazer terapia.</p>
        </Text>
      </View>

    </ScrollView>
  );
}