import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => (
  <View style={styles.containerItem}>
    <View style={styles.coinName}>
    <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.symbol.replace("USDT","")}</Text>
        <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.textPrice}>
        ${parseFloat(coin.lastPrice).toFixed(2)}
      </Text>
      <Text
        style={[
          styles.pricePercentage,
          typeof coin.priceChangePercent === "string" &&
          parseFloat(coin.priceChangePercent) > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {typeof coin.priceChangePercent === "string"
          ? parseFloat(coin.priceChangePercent).toFixed(2) + "%"
          : "N/A"}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default CoinItem;