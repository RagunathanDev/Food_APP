import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultDetails = ({ result }) => {
  if (result.image_url === "") {
    console.log("empty");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars | {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  rating: {
    fontSize: 12,
  },
});
