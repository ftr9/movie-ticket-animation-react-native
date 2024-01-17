import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Txt from '../../shared/Txt';

import { MOVIE_CATEGORIES } from '../constants';

import MoviePosters from './MoviePosters';

const MovieCategoriesRenderer = () => {
  return (
    <ScrollView
      style={{
        marginTop: 20,
      }}
    >
      {MOVIE_CATEGORIES.map(movie => {
        return (
          <View
            style={{
              marginBottom: 25,
            }}
            key={movie.category}
          >
            <Txt extraStyle={styles.categoryTxtStyle}>{movie.category}</Txt>
            <MoviePosters posters={movie.movies} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MovieCategoriesRenderer;

const styles = StyleSheet.create({
  categoryTxtStyle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
});
