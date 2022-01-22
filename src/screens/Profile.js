import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';

export default function Profile({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[{flex: 1, backgroundColor: '#f4f4f4', padding: 20}, {}]}>
        <Text
          style={[
            {
              color: 'blue',
            },
            {fontSize: 25, fontWeight: 'bold', marginTop: 20},
          ]}>
          Profile
        </Text>
        <View style={{marginHorizontal: 20, flex: 1}}>
          <Text
            style={[
              {
                color: 'blue',
                marginTop: 50,
              },
              {fontWeight: '500', fontSize: 18},
            ]}>
            Username
          </Text>
          <Text
            style={[
              {
                fontSize: 12,
                color: '#949494',
              },
              {},
            ]}>
            Email@mail.com
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
            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: '#1D1D1D',
                  },
                  {fontWeight: 'bold', fontSize: 18},
                ]}>
                20
              </Text>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: '#949494',
                  },
                  {},
                ]}>
                Booking
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: '#1D1D1D',
                  },
                  {fontWeight: '500', fontSize: 18},
                ]}>
                0
              </Text>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: '#949494',
                  },
                  {},
                ]}>
                Reviews
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: '#1D1D1D',
                  },
                  {fontWeight: '500', fontSize: 18},
                ]}>
                20
              </Text>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: '#949494',
                  },
                  {},
                ]}>
                Favorites
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
