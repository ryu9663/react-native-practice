import { Alert, Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, the big Blue</Text>
      </View>
      <Button
        title="press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

export default App;
