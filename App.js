import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";
import CoinItemList from "./src/components/CoinItemList";

export default function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getMarketsByApi();
  }, []);

  const getMarketsByApi = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#141414"} />
      <Text style={styles.title}>CRYPTOS</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={"#FFF"}
      />
      <FlatList
        style={styles.flatList}
        data={coins}
        keyExtractor={(coin) => coin.id}
        renderItem={({ item }) => <CoinItemList coin={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  input: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    height: 50,
    width: 100,
    borderColor: "#fff",
    borderBottomWidth: 1,
  },
  flatList: {
    width: "100%",
    textAlign: "center",
  },
});
