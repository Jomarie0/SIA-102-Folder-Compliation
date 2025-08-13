import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function Index() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");

  const handleSubmit = () => {
    Alert.alert("Form Submitted", `Field 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Field 1</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Field 1"
        value={field1}
        onChangeText={setField1}
      />

      <Text style={styles.label}>Field 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Field 2"
        value={field2}
        onChangeText={setField2}
      />

      <Text style={styles.label}>Field 3</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Field 3"
        value={field3}
        onChangeText={setField3}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
