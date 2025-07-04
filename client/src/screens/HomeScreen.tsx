import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>홈 화면입니다!</Text>
      <TextInput
        style={{ height: 40, padding: 5, backgroundColor: "#fff" }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}
