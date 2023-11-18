import React from "react";
import config from "../../config/config";
import { Text, View, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import { useRoute } from "@react-navigation/native";

const MovieDetail = () => {
  const {
    params: { title, poster_path, overview, vote_average },
  } =
    useRoute<NativeStackScreenProps<RootStackParams, "MovieDetail">["route"]>();

  const imageUrl = `${config.BASE_URL_IMG}${poster_path}`;
  const average = vote_average.toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Image style={styles.icon} source={require("../../../assets/estrella.png")} />
        <Text style={styles.title}>{average}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.explanation}>{overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#191c19",
  },
  content: {
    backgroundColor: "#191c19",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: "70%",
    height: "50%",
    borderColor: "#fff",
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
    resizeMode: "cover",
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MovieDetail;
