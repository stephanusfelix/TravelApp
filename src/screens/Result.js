import moment from 'moment';
import React, {Component, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import HotelCard from '../../components/HotelCard';
import {getRequest} from '../consts/Function';

export default function Result({navigation, route}) {
  const params = route.params.parameter;
  const [result, setResult] = useState(null);

  async function getSearch() {
    let res = await getRequest('properties/list', params);
    if (res) {
      setResult(res.data.data.body);
    }
  }

  useEffect(() => {
    getSearch();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: 'white',
            padding: 20,
          },
          {},
        ]}>
        <Text
          style={[
            {
              color: 'blue',
            },
            {fontSize: 25, fontWeight: 'bold', marginLeft: 25, marginTop: 20},
          ]}>
          Search Result
        </Text>
        <View
          style={[
            {
              padding: 10,
              borderRadius: 5,
              marginVertical: 5,
              backgroundColor: 'white',
            },
            {marginBottom: 15},
          ]}>
          <Text
            style={[
              {
                fontSize: 12,
                color: '#949494',
              },
              {fontSize: 14},
            ]}>
            Location
          </Text>
          <Text
            style={[
              {
                fontSize: 14,
                color: '#1D1D1D',
              },
              {fontWeight: '500'},
            ]}>
            {result?.header}
          </Text>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              {marginTop: 20},
            ]}>
            <View style={{width: '48%'}}>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: '#949494',
                  },
                  {fontSize: 14},
                ]}>
                Date
              </Text>
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: '#1D1D1D',
                  },
                  {fontWeight: '500'},
                ]}>
                {moment(params.checkIn).format('DD MMM')} -{' '}
                {moment(params.checkOut).format('DD MMM')}
              </Text>
            </View>
            <View style={{width: '48%'}}>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: '#949494',
                  },
                  {fontSize: 14},
                ]}>
                Guest
              </Text>
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: '#1D1D1D',
                  },
                  {fontWeight: '500'},
                ]}>
                {params.adults1} Adult
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              {},
            ]}>
            <Text
              style={[
                {
                  fontSize: 14,
                  color: '#1D1D1D',
                },
                {fontWeight: '500'},
              ]}>
              {!result?.searchResults.totalCount ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    marginLeft: 100,
                  }}>
                  <ActivityIndicator size="large" color="red" />
                  <Text style={{color: 'blue'}}>
                    Sedang meload data..... Tunggu beberapa saat
                  </Text>
                </View>
              ) : (
                <> {result?.searchResults.totalCount} hotel ditemukan</>
              )}
            </Text>
          </View>

          <View>
            {result?.searchResults.results.map((item, index) => (
              <HotelCard
                key={String(index)}
                navigation={navigation}
                index={index}
                params={params}
                item={item}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
