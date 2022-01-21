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
} from 'react-native';
import SearchBox from './SearchBox'
const SearchSection = (): Node => {
  React.useEffect(() => {}, []);
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <SearchBox/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  date: {
    width: 200,
    height: 50,
  },
});
export default SearchSection;
