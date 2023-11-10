import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const CoinDetails = ({ route }) => {
  const { coin } = route.params; // Obtiene el objeto 'coin' de los parámetros de navegación

  const coinDetails = Object.entries(coin).map(([key, value]) => (
    <View style={styles.detailItem} key={key}>
      <Text style={styles.detailLabel}>{key}:</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coin Details</Text>
      {coinDetails}
      <Text
        style={[
          styles.pricePercentage,
          typeof coin.priceChangePercent === "string" &&
          parseFloat(coin.priceChangePercent) > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        Price Change Percent: {typeof coin.priceChangePercent === "string"
          ? parseFloat(coin.priceChangePercent).toFixed(2) + "%"
          : "N/A"}
      </Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: ["Open", "Close", "High", "Low"],
            datasets: [
              {
                data: [
                  parseFloat(coin.openPrice),
                  parseFloat(coin.lastPrice),
                  parseFloat(coin.highPrice),
                  parseFloat(coin.lowPrice),
                ],
              },
            ],
          }}
          width={350}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#1E2923",
            backgroundGradientTo: "#08130D",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          bezier
          withDots={false} // Oculta los puntos en el gráfico si lo deseas
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
  },
  detailLabel: {
    color: "#fff",
  },
  detailValue: {
    color: "#fff",
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
  chartContainer: {
    alignItems: "center",
    marginTop: 20, 
  },
});

export default CoinDetails;
