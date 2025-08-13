import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function Index() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [section, setSection] = useState("Bsit4b"); 
  const [status, setStatus] = useState("");

  // const sendToServer = async (attendanceStatus: string) => {
  //   if (!firstName.trim() || !lastName.trim()) {
  //     Alert.alert("Error", "Please enter both first name and last name");
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:3000/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         firstName: firstName.trim(),
  //         lastName: lastName.trim(),
  //         section: section,
  //         status: attendanceStatus
  //       })
  //     });

  //     const data = await response.json();
      
  //     if (response.ok) {
  //       Alert.alert("Success", data.message);
  //       // Clear the form
  //       setFirstName("");
  //       setLastName("");
  //       setStatus("");
  //     } else {
  //       Alert.alert("Error", data.error || "Failed to update attendance");
  //     }
  //   } catch (error) {
  //     console.error('Error sending data:', error);
  //     Alert.alert("Error", "Failed to connect to server. Make sure your server is running.");
  //   }
  // };

  // const handlePresent = () => {
  //   sendToServer("present");
  // };

  // const handleAbsent = () => {
  //   sendToServer("absent");
  // };

  return (
    <View style={styles.container}>
      {/* First Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          placeholder="Enter first name"
          placeholderTextColor="#999"
          style={styles.textbox}
          // value={firstName}
          // onChangeText={setFirstName}
        />
      </View>

      {/* Last Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          placeholder="Enter last name"
          placeholderTextColor="#999"
          style={styles.textbox}
          // value={lastName}
          // onChangeText={setLastName}
        />
      </View>

      {/* Section */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Section:</Text>
        <TextInput
          placeholder="Enter section (e.g., Bsit4b)"
          placeholderTextColor="#999"
          style={styles.textbox}
          // value={section}
          // onChangeText={setSection}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonPresent}>Present</TouchableOpacity>
        <TouchableOpacity style={styles.buttonAbsent}>Absent</TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#c9d1d9", 
    // backgroundColor: "blue", 
    fontFamily: "Arial"

  },
  inputGroup: {
    marginBottom: 15,
    // backgroundColor: "red",
    
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#161b22", 
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#30363d", 
    backgroundColor: "#c9d1d9",
    color: "#161b22",
    padding: 10,
    borderRadius: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#c9d1d9"
  },
  buttonPresent: {
    padding: 10,
    width: 180,
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: "#238636", 
    borderRadius: 5,

  },
  buttonAbsent: {
    padding: 10,
    width: 180,
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: "#da3633", 
    borderRadius: 5,

  },

});
