import React, {Component, useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DateRangePicker from 'react-native-daterange-picker';
import {getRequest} from '../consts/Function';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import 'moment/locale/id';

export default function Home({navigation, route}) {
  const [kota, setKota] = useState([]);
  const [open, setOpen] = useState(false);
  const [destinationId, setDestinationId] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [guest, setGuest] = useState('');
  const [showDate, setShowDate] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);

  async function getCity() {
    let k = await AsyncStorage.getItem('kota');
    if (!k) {
      let params = {query: 'Indonesia', locale: 'in_ID', currency: 'IDR'};
      let res = await getRequest('locations/v2/search', params);
      if (res) {
        // console.log('masuk')
        await AsyncStorage.setItem(
          'kota',
          JSON.stringify(res.data.suggestions[0].entities),
        );
        setKota(res.data.suggestions[0].entities);
      }
    } else {
      // console.log('sini',)
      setKota(JSON.parse(k));
    }
  }

  async function clickSearch(
    id = destinationId,
    start = new Date(),
    end = new Date().setDate(new Date().getDate() + 1),
    adult = guest || 1,
    page = pageNumber,
  ) {
    if (start && end && adult && id && page) {
      let params = {
        destinationId: id,
        pageNumber: page,
        pageSize: '25',
        checkIn: moment(start).format('YYYY-MM-DD'),
        checkOut: moment(end).format('YYYY-MM-DD'),
        adults1: adult,
        sortOrder: 'PRICE',
        locale: 'en_US',
        currency: 'IDR',
      };
      navigation.navigate('Detail', {parameter: params});
    }
  }

  useEffect(() => {
    getCity();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

      <View style={[{flex: 1, backgroundColor: 'white', padding: 20}, {}]}>
        <Text
          style={[
            {
              fontSize: 14,
              color: 'blue',
            },
            {fontSize: 20, fontWeight: 'bold', marginBottom: 30},
          ]}>
          Home Search
        </Text>
        <View style={[{paddingVertical: 5}]}>
          <DropDownPicker
            style={{borderWidth: 0, borderRadius: 5}}
            placeholder="Where do you want to go?"
            placeholderStyle={{color: 'blue'}}
            schema={{
              label: 'name', // required
              value: 'destinationId', // required
              testID: 'destinationId',
            }}
            open={open}
            value={destinationId}
            items={kota}
            searchable={true}
            setOpen={setOpen}
            setValue={v => setDestinationId(v)}
            // setItems={setItems}
          />
        </View>

        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            {marginBottom: 5},
          ]}>
          <View
            style={[
              {
                padding: 10,
                borderRadius: 5,
                marginVertical: 5,
                backgroundColor: 'white',
              },
              {
                flexDirection: 'row',
                alignItems: 'center',
              },
              {paddingHorizontal: 15, width: '48%', paddingVertical: 13},
            ]}>
            <Icon name="event" color={'blue'} size={20} />
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
              style={{marginLeft: 10}}
              onPress={() => setShowDate(true)}>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: 'blue',
                  },
                  {},
                ]}>
                Date
              </Text>
              <Text
                style={[
                  {
                    fontSize: 9,
                    color: 'blue',
                  },
                  {fontWeight: '500'},
                ]}>
                {dateStart ? moment(dateStart).format('DD MMM') : 'Check-In'} -{' '}
                {dateEnd ? moment(dateEnd).format('DD MMM') : 'Check-Out'}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              {
                padding: 10,
                borderRadius: 5,
                marginVertical: 5,
                backgroundColor: 'white',
              },
              {
                flexDirection: 'row',
                alignItems: 'center',
              },
              {paddingHorizontal: 15, width: '48%'},
            ]}>
            <Icon name="account-circle" color={'blue'} size={20} />

            <TextInput
              style={[
                {
                  fontSize: 12,
                  color: 'blue',
                },
                {
                  fontSize: 12,
                  marginLeft: 10,
                  height: 40,
                  flex: 1,
                  justifyContent: 'center',
                },
              ]}
              placeholder="Guest"
              min={0}
              value={guest}
              onChangeText={v => setGuest(v)}
              keyboardType="number-pad"
              placeholderTextColor={'blue'}
            />

            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
              onPress={() => setGuest(prev => String(parseInt(prev || 0) + 1))}
              style={[
                {
                  padding: 10,
                  borderRadius: 5,
                  marginVertical: 5,
                  backgroundColor: 'white',
                },
                {alignItems: 'center', justifyContent: 'center', padding: 5},
              ]}>
              <Icon name="arrow-drop-up" color={'blue'} size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
              onPress={() => {
                let g = guest || '0';
                let c = parseInt(g) - 1;

                if (c >= 0) {
                  setGuest(String(c));
                }
              }}
              style={[
                {
                  padding: 10,
                  borderRadius: 5,
                  marginVertical: 5,
                  backgroundColor: 'white',
                },
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                  marginLeft: 2,
                },
              ]}>
              <Icon name="arrow-drop-down" color={'blue'} size={16} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={() => clickSearch(dateStart, dateEnd)}>
          <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 16}}>
            Search
          </Text>
        </TouchableOpacity>

        <View>
          <Text
            style={[
              {
                fontSize: 14,
                color: 'blue',
              },
              {fontSize: 18, fontWeight: 'bold', marginTop: 20},
            ]}>
            Pilih Kota
          </Text>
          <TouchableOpacity>
            <FlatList
              data={kota}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{marginTop: 10, minHeight: 10}}
              renderItem={({item, index}) => (
                <RenderCity item={item} index={index} />
              )}
            />
          </TouchableOpacity>
        </View>
      </View>

      <DateRangePicker
        open={showDate}
        onChange={v => {
          console.log('sda', v);
          if (v.endDate) {
            setDateEnd(v.endDate);
            setShowDate(false);
          }
          if (v.startDate) {
            setDateStart(v.startDate);
          }
        }}
        presetButtons
        dayHeaders
        endDate={dateEnd}
        startDate={dateStart}
        minDate={moment()}
        displayedDate={moment()}
        range
        backdropStyle={{height: '100%'}}></DateRangePicker>
    </SafeAreaView>
  );

  function RenderCity({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => {
          clickSearch(item.destinationId);
        }}
        style={[
          {
            padding: 15,
            borderRadius: 5,
            marginVertical: 5,
            backgroundColor: 'blue',
          },
          {marginRight: 10},
        ]}>
        <Text
          style={[
            {
              fontSize: 14,
              color: 'white',
            },
            {},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
