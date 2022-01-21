/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native';

const Recommendation = (): Node => {
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const photos = ["https://exp.cdn-hotels.com/hotels/10000000/9240000/9236500/9236409/af86011f_z.jpg"]
  const name = ["London"]
  const ids = [1696059]
  React.useEffect(() => {
    fetch(
      'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=London&currency=USD&locale=en_US',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
          'x-rapidapi-key':
            'b3aa55d102msh22713dd03ca7fcfp12bdd3jsn5f81b3ac3ec7',
        },
      },
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Text>Top Destination</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.circleParent}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
      </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'grey',
    width: 100,
    height: 100,
  },
  circleParent: {
    flexDirection: 'row',
    height: 150,
    width: 500,
    justifyContent: 'space-evenly',
  },
});
export default Recommendation;
