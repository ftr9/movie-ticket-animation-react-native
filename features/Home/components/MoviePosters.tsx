import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

interface IMoviePosters {
  posters: string[];
}

const MoviePosters = ({ posters }: IMoviePosters) => {
  return (
    <FlatList
      horizontal
      data={posters}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              width: 20,
            }}
          ></View>
        );
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              router.push('/Description');
            }}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: item,
              }}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(_, idx) => `${idx}`}
    />
  );
};

export default MoviePosters;

const styles = StyleSheet.create({
  imageStyle: {
    height: 180,
    width: 110,
    borderRadius: 15,
  },
});
