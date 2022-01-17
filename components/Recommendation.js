/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  View,
  Button,
} from 'react-native';

const Recommendation = (): Node => {
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const photos = [
    'https://exp.cdn-hotels.com/hotels/10000000/9240000/9236500/9236409/af86011f_z.jpg',
    'https://exp.cdn-hotels.com/hotels/10000000/9240000/9236500/9236409/af86011f_z.jpg',
    'https://exp.cdn-hotels.com/hotels/10000000/9240000/9236500/9236409/af86011f_z.jpg',
    'https://exp.cdn-hotels.com/hotels/10000000/9240000/9236500/9236409/af86011f_z.jpg',
  ];
  const name = ['London', 'London', 'London', 'London'];
  const ids = [1696059, 1696059, 1696059, 1696059];
  const handleClickDestination = id => {
    Alert.alert('Alert Title', 'ID : ' + id, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Top Destination</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.squareParent}>
            {ids.map((id, index) => (
              <TouchableOpacity
                key={index}
                style={styles.square}
                onPress={() => handleClickDestination(id)}>
                <ImageBackground
                  source={{uri: photos[index]}}
                  resizeMode="cover"
                  style={styles.image}
                  imageStyle={{borderRadius: 20}}>
                  <View style={styles.image}>
                    <Text style={styles.text}>{name[index]}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View>
          <Text style={styles.title}>Popular Destination</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.squareParent}>
            {ids.map((id, index) => (
              <TouchableOpacity
                key={index}
                style={styles.square}
                onPress={() => handleClickDestination(id)}>
                <ImageBackground
                  source={{uri: photos[index]}}
                  resizeMode="cover"
                  style={styles.image}
                  imageStyle={{borderRadius: 20}}>
                  <View style={styles.image}>
                    <Text style={styles.text}>{name[index]}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    textAlign: 'bottom',
  },
  text: {
    position: 'absolute',
    color: 'white',
    bottom: 12,
    left: 10,
    fontWeight: 'bold',
  },
  square: {
    backgroundColor: 'grey',
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  squareParent: {
    flexDirection: 'row',
    height: 150,
    width: 500,
    justifyContent: 'space-evenly',
  },
});
export default Recommendation;
