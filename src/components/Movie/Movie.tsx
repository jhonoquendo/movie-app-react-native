import React, {FC} from "react";
import config from "../../config/config";
import { Text,Button, View, Image, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Result, RootStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";

type MoovieNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "MovieDetail"
>;

const Movie: FC<Result> = ({title,poster_path, overview, vote_average}) => {

  const { navigate } = useNavigation<MoovieNavigationProps>();

const imageUrl = `${config.BASE_URL_IMG}${poster_path}`


const handleViewPress = () => {
  navigate("MovieDetail", {title, poster_path, overview, vote_average});
};

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Button title="View" onPress={handleViewPress} color="#525252" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 270,
    backgroundColor: '#000',
    alignItems:'center',
    borderRadius: 20,
    margin: 12,
  },
  image: {
    width: 150,
    height: 170,
    marginTop: 10,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: '#fff',
    marginBottom: 5,
  },
});

export default Movie;
