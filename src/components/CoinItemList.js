import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";

export default function CoinItemList(props) {
  const { coin } = props;
  return (
    <View style={styles.coinConteiner}>
      <View style={styles.imageAndName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <Text style={styles.name}>{coin.name}</Text>
        <Text style={styles.symbol}>{coin.symbol}</Text>
      </View>
      <View style={styles.viewPriece}>
        <Text style={styles.current_price}>{coin.current_price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coinConteiner: {
    backgroundColor: "#121212",
    paddingTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  current_price: {
    color: "#fff",
    fontSize: 25,
  },
  image: {
    height: 50,
    width: 50,
  },
  imageAndName: {
    flexDirection: "row",
  },
  viewPriece: {
    marginRight: 30,
  },
  symbol: {
    color: "#fff",
    textTransform: "uppercase",
  },
});
