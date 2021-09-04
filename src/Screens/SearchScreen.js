import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResult from "../Hooks/useResult";
import ResultList from "../Components/ResultList";

const SearchScreen = () => {
  const [term, setNewTerm] = useState("");
  const [searchApi, result, errorMessage] = useResult();

  if (!result) {
    return null;
  }

  const filterPriceTag = (price) => {
    //it will segrigate the price amount price = $ || $$ ||$$$
    return result.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        Term={term}
        onTermChange={setNewTerm}
        onTermSubmit={() => searchApi(term)}
      />

      <ScrollView>
        <ResultList result={filterPriceTag("$")} title="Cost Effective" />
        <ResultList result={filterPriceTag("$$")} title="Bit Pricier" />
        <ResultList result={filterPriceTag("$$$")} title="Bit Spender" />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
