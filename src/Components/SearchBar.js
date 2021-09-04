import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ Term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backGroundStyle}>
      <Feather style={styles.searchIcon} name="search" color="black" />

      <TextInput
        style={styles.inputBox}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={Term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit} //onChangeText and onEndEditing fuction are doing same work.
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backGroundStyle: {
    marginTop: 10,
    backgroundColor: "#dadbd7",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 7,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputBox: {
    flex: 1,
    fontSize: 17,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
