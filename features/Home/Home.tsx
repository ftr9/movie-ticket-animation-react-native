import { StyleSheet } from 'react-native';
import React from 'react';
import Txt from '../shared/Txt';
import MovieCategoriesRenderer from './components/MovieCategoriesRenderer';
import Footer from '../shared/Footer';
import Search from './components/Search';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Txt extraStyle={styles.chooseMovieTxt}>Choose Movie</Txt>
      <Search />
      <MovieCategoriesRenderer />
      <Footer />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E1371',
  },
  chooseMovieTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});
