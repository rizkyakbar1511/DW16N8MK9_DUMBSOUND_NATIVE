import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";

const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#ffff",
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 7,
        }}
      >
        Create an Account
      </Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={"darkgray"}
        placeholder={"Name"}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor={"darkgray"}
        placeholder={"Email"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={"darkgray"}
        placeholder={"Password"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={setGender}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholderTextColor={"darkgray"}
        placeholder={"Phone"}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={"darkgray"}
        placeholder={"Address"}
        value={address}
        onChangeText={setAddress}
      />
      <TouchableOpacity
        style={styles.containerBtnLogin}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.textBtnLogin}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerRegister}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      >
        <Text style={styles.textLogin}>Already member ? Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 75,
    alignItems: "center",
    backgroundColor: "#141414",
  },
  input: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    borderRadius: 8,
    color: "black",
    marginVertical: 8,
  },

  containerBtnLogin: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 9,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#EE4622",
  },
  textLogin: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 14,
    color: "#fff",
  },
  textBtnLogin: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default Register;
