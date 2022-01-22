import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HotelCard({
  item,
  params,
  navigation,
  disabled = false,
}) {
  let parameter = {
    id: item.id,
    checkIn: params?.checkIn,
    checkOut: params?.checkOut,
    adults1: params?.adults1,
    currency: 'IDR',
    locale: 'en_US',
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        navigation.navigate('Detail', {
          parameter,
          image: item?.optimizedThumbUrls?.srpDesktop,
          item,
        });
      }}
      style={[
        {
          padding: 10,
          borderRadius: 5,
          marginVertical: 5,
          backgroundColor: 'white',
        },
        {padding: 0, marginTop: 15},
      ]}>
      <View>
        <Image
          style={{
            height: 150,
            width: '100%',
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
          source={{uri: item?.optimizedThumbUrls?.srpDesktop}}
          resizeMode="cover"
        />
        {!disabled && (
          <TouchableWithoutFeedback>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
              style={[
                {
                  padding: 10,
                  borderRadius: 5,
                  marginVertical: 5,
                  backgroundColor: 'white',
                },
                {position: 'absolute', right: 10, top: 5},
              ]}>
              <Icon name="favorite" color={'red'} size={30} />
            </TouchableOpacity>
          </TouchableWithoutFeedback>
        )}
      </View>
      <View style={{padding: 10}}>
        <Text
          style={[
            {
              fontSize: 20,
              color: 'blue',
            },
            {fontWeight: 'bold'},
          ]}
          numberOfLines={2}
          lineBreakMode="tail">
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Icon name="place" size={15} color={'red'} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            {item.address.locality}
          </Text>
        </View>

        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            {marginTop: 15},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="star" size={15} color={'#FFBF00'} />
            <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 15}}>
              {item.starRating * 2}
            </Text>
          </View>
          {item.fullPayment ? (
            <View>
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: '#1D1D1D',
                  },
                  {
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'blue',
                  },
                ]}>
                {item.fullPayment}
              </Text>
            </View>
          ) : (
            <View>
              {item.ratePlan.price.old && (
                <Text
                  style={[
                    {
                      fontSize: 12,
                      color: '#949494',
                    },
                    {textDecorationLine: 'line-through', marginBottom: 3},
                  ]}>
                  {item.ratePlan.price.old}
                </Text>
              )}
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: '#1D1D1D',
                  },
                  {
                    fontWeight: 'bold',
                    fontSize: 12,
                    color: 'blue',
                  },
                ]}>
                {item.ratePlan.price.current}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
