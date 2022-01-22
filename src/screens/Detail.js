import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import {getRequest} from '../consts/Function';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetailHotel({navigation, route}) {
  const params = route.params.parameter;
  const image = route.params.image;
  const [detail, setDetail] = useState(null);
  const [transportation, setTransportation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getDetails() {
    setIsLoading(true);
    let res = await getRequest('properties/get-details', params);
    if (res) {
      setDetail(res.data.data.body);
      setTransportation(res.data.transportation);
      await AsyncStorage.setItem('detail', JSON.stringify(res.data));
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <ActivityIndicator size="large" color="red" />
        <Text style={{color: 'blue'}}>
          Sedang meload data..... Tunggu beberapa saat
        </Text>
      </View>
    );
  }
  // If data finish load
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar translucent backgroundColor="rgb(189, 195, 199) " />
      <ImageBackground
        style={styles.ImageBg}
        source={{
          uri: image,
        }}>
        <View style={styles.header}></View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: '100%',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
            }}>
            {/* {place.name} */}
            {detail?.propertyDescription.name}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" color={'blue'} size={30} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={20} color={'#FFBF00'} />
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 15,
              marginLeft: 5,
            }}>
            {detail?.propertyDescription.starRatingTitle}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={20} color={'red'} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 12,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            {detail?.propertyDescription.address.fullAddress}
          </Text>
        </View>
        <Text
          style={{
            color: 'blue',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          About
        </Text>
        <Text style={{color: 'blue', marginTop: 20, lineHeight: 22}}>
          {detail?.propertyDescription.tagline}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {detail?.propertyDescription.featuredPrice?.currentPrice.formatted}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'yellow',
              marginLeft: 2,
            }}>
            /PER DAY
          </Text>
        </View>
        {/* <View >
          <Text style={{color: 'blue', fontSize: 16, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View> */}
        <TouchableOpacity
          style={styles.bookNowBtn}
          onPress={() =>
            navigation.navigate('Booking', {
              parameter: params,
              detail,
              result: route.params.item,
            })
          }>
          <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 16}}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewList: {
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 40,
  },
  ImageBg: {
    flex: 0.7,
    width: '100%',

    borderRadius: 40,
  },
  textItemLogin: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16,
  },
  textItemUrl: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: 'blue',
  },
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
