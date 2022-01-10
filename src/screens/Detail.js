import React, {Component} from 'react';
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
} from 'react-native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      isError: false,
    };
  }

  // Mount User Method
  componentDidMount() {
    this.getGithubUser();
  }

  //   Get Api Users
  getGithubUser = async () => {
    const options = {
      params: {hotel_id: '363464'},
      headers: {
        'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
        'x-rapidapi-key': 'e5a0fd5369msh28971ed033b9ea0p164c58jsncb26f5f17ba9',
      },
    };

    try {
      const response = await Axios.get(
        'https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos',
        options,
      );
      this.setState({isError: false, isLoading: false, data: response.data});
    } catch (error) {
      this.setState({isLoading: false, isError: true});
    }
  };

  render() {
    //  If load data
    if (this.state.isLoading) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    // If data not fetch
    else if (this.state.isError) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>Terjadi Error Saat Memuat Data</Text>
        </View>
      );
    }
    // If data finish load
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
          style={styles.ImageBg}
          source={{
            uri: `https://exp.cdn-hotels.com/hotels/4000000/3860000/3851700/3851675/66f33f75_z.jpg`,
          }}>
          <View style={styles.header}>
            <Icon
              name="arrow-back"
              size={28}
              color={'white'}
              //   onPress={navigation.goBack}
            />
            <Icon name="more-vert" size={28} color={'white'} />
          </View>
          <View style={styles.imageDetails}>
            <Text
              style={{
                width: '70%',
                fontSize: 30,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 20,
              }}>
              {/* {place.name} */}
              Nama Tempat
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={30} color={'#FFBF00'} />
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                5.0
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <View style={styles.iconContainer}>
            <Icon name="favorite" color={'#7267CB'} size={30} />
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Icon name="place" size={28} color={'#6E3CBC'} />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#6E3CBC',
              }}>
              {/* {place.location} */}
              Jakarta
            </Text>
          </View>
          <Text
            style={{
              color: '#6E3CBC',
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            About
          </Text>
          <Text style={{color: '#6E3CBC', marginTop: 20, lineHeight: 22}}>
            {/* {place.details} */}
            gJl. lorem t is a secondary color and the result of mixing red and
            yellow in equal portions. There are many variations of orange
            depending on the proportions of the two
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
              $100
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
          <View style={styles.bookNowBtn}>
            <Text style={{color: '#7267CB', fontSize: 16, fontWeight: 'bold'}}>
              Book Now
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
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
    backgroundColor: '#7267CB',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
