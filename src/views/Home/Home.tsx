import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Header from "../../components/Header";
import Movies from "../../components/Movies/Movies";
import { Result } from "../../types";
import fetchApi from "../../utils/fetch";

const Home = () => {
  const [movies, setMovies] = useState<Result[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Result[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesResponse: Result[] = await fetchApi();
        setMovies(moviesResponse);
      } catch (error) {
        console.error(error);
        setMovies([]);
      }
    };

    getMovies().catch(null);
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);

    const filtered: Result[] = movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredMovies(filtered);
  };

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        style={styles.search}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Buscar películas..."
      />

      {searchQuery !== "" ? (
        <Movies movies={filteredMovies} />
      ) : (
        <Movies movies={movies} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#191c19",
  },
  search: {
    backgroundColor: '#fff',
    color: '#000',
    marginHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20
  },
});

export default Home;
