import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SettingMain from "./src/settings/SettingMain";

export default function App() {
  return (
    <View style={styles.container}>
      <SettingMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
