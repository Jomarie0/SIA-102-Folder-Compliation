import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Index() {
  return (
    // main container to or frame
    <View style={styles.container}>
      {/* division naman frame to for each label and textbox */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Label 1</Text>
        <TextInput placeholder="textbox 1" style={styles.textbox} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Label 2</Text>
        <TextInput placeholder="textbox 2" style={styles.textbox} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Label 3</Text>
        <TextInput placeholder="textbox 3" style={styles.textbox} />
      </View>
      {/* button part dine */}
      <View style={styles.buttonGroup}>
        <Button title="Button 1" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#444",
    padding: 10,
    borderRadius: 5,
  },
  buttonGroup: {
    marginTop: 50,
  },
});
