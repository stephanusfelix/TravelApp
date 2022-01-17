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
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
const SearchBox = (): Node => {
  const [destination, onChangeDestionation] = React.useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [date2, setDate2] = useState(new Date());
  const [open2, setOpen2] = useState(false);
  const [guest, onChangeGuest] = React.useState(null);
  const searchDestionation = () => {
    destination ?
    fetch(
      `https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=${destination}&currency=USD&locale=en_US`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
          'x-rapidapi-key':
            'b3aa55d102msh22713dd03ca7fcfp12bdd3jsn5f81b3ac3ec7',
        },
      },
    )
      .then(response => {
        console.log(response);
        Alert.alert('Alert Title', 'Berhasil', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      })
      .catch(err => {
        console.error(err);
      })
      :
      Alert.alert('Alert Title', 'Cek kembai input anda', [
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
      <SafeAreaView style={styles.outerParent}>
        <View style={styles.searchBox}>
          <View style={styles.center}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeDestionation}
              value={destination}
              placeholder="Where do you want to go?"
            />
          </View>

          <View style={styles.center}>
            <View>
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.date}>
                <Text style={styles.text}>
                  {' '}
                  {date.getDate() +
                    '-' +
                    (date.getMonth() + 1) +
                    '-' +
                    date.getFullYear()}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setOpen2(true)}
                style={styles.date}>
                <Text style={styles.text}>
                  {' '}
                  {date2.getDate() +
                    '-' +
                    (date2.getMonth() + 1) +
                    '-' +
                    date2.getFullYear()}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.center}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeGuest}
              value={guest}
              placeholder="Guest"
              keyboardType="numeric"
            />
          </View>

          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <DatePicker
            modal
            open={open2}
            date={date2}
            mode="date"
            onConfirm={date2 => {
              setOpen2(false);
              setDate2(date2);
            }}
            onCancel={() => {
              setOpen2(false);
            }}
          />
          <View style={styles.center}>
            <TouchableOpacity style={styles.search} onPress={searchDestionation}>
              <Text style={styles.text2}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    margin: 10,
    width: 350,
    backgroundColor: '#FAFAFA',
    padding: 20,
    shadowColor: '#001',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 20,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  date: {
    width: 140,
    height: 40,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'black',
  },
  text2: {
    color: 'white',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  search: {
    width: 320,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#11998e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SearchBox;
