import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SearchSection from '../../components/SearchSection';
import Recommendation from '../../components/Recommendation';

export default function Search({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchSection />
      <Recommendation />
    </SafeAreaView>
  );
}
