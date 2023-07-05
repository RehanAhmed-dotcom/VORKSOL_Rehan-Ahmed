import React from 'react';
import {FlatList, Text, View} from 'react-native';

import styles from './style';
import Header from '../../component/Header';
import Data from '../../component/Data';
import RenderItems from '../../component/FocusItem';
const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <RenderItems item={item} navigation={navigation} />
  );
  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <Header />
        <Text style={styles.focus}>Choose your focus</Text>
      </View>
      <FlatList key={2} numColumns={2} data={Data} renderItem={renderItem} />
    </View>
  );
};

export default Home;
