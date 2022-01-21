import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getRequest(path, params) {
  try {
    const response = await axios.get(`https://hotels4.p.rapidapi.com/` + path, {
      params,
      headers: {
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        'x-rapidapi-key': 'e5a0fd5369msh28971ed033b9ea0p164c58jsncb26f5f17ba9',
      },
    });
    if (response) {
      return response;
    }
  } catch (error) {
    let message = 'Terjadi Kesalahan';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      message = error.response.data.message;
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      message = error.message;
    }
    console.log(error.config);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
    return null;
  }
}

export async function postRequest(path, data) {
  try {
    const response = await axios.post(
      'https://hotels4.p.rapidapi.com/' + path,
      data,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    var message = 'Terjadi Kesalahan';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      message = error.response.data.message;
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      message = error.message;
    }
    console.log(error.config);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
    return null;
  }
}

export async function handleWishlish(
  getdata = () => {},
  username,
  item,
  parameter,
  wishList,
  v,
) {
  let checkToken = await AsyncStorage.getItem('token');
  if (checkToken) {
    let checkWishlist =
      JSON.parse(await AsyncStorage.getItem('wishlist_' + username)) || [];

    if (wishList) {
      let idx = checkWishlist.findIndex(v => v.id == item.id);
      checkWishlist.splice(idx, 1);
      Toast.show({
        type: 'error',
        text1: 'You have removed from favorites',
        text2: item.name,
      });
    } else {
      item.params = parameter;
      checkWishlist.push(item);
      Toast.show({
        type: 'success',
        text1: 'You have added to favorites',
        text2: item.name,
      });
    }
    await AsyncStorage.setItem(
      'wishlist_' + username,
      JSON.stringify(checkWishlist),
    );
    await getdata(v);
  } else {
    Toast.show({
      type: 'error',
      text1: "You're not logged in",
      text2: 'Please login first',
    });
  }
}
