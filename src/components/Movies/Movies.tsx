import React, {FC} from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Movie from "../Movie/Movie";
import { Result } from "../../types";

const Movies: FC<{movies: Result[]}> = ({ movies }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {movies.map((movie) => (
          <Movie key={movie.title} {...movie} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default Movies;
