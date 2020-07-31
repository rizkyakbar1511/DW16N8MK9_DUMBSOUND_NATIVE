import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/dumbsound.png")}
        style={{ marginBottom: 5, width: 120, resizeMode: "stretch" }}
      />
      <Text
        style={{
          fontSize: 14,
          marginTop: 8,
          marginBottom: 8,
          color: "#ffff",
          textAlign: "center",
        }}
      >
        A better place for listening premium song with premium quality
      </Text>
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
      <TouchableOpacity
        style={styles.containerBtnLogin}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.textBtnLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerRegister}
        onPress={() => {
          props.navigation.navigate("Register");
        }}
      >
        <Text style={[styles.textRegister]}>Not a member yet ? Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 200,
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
    fontSize: 16,
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
  textBtnLogin: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  containerRegister: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textRegister: {
    fontWeight: "500",
    fontSize: 14,
    color: "#fff",
  },
});

export default Login;
