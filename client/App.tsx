import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  // Picker,
  Platform,
} from "react-native";

const CARD_COMPANIES = [
  "신한카드",
  "삼성카드",
  "국민카드",
  "현대카드",
  "롯데카드",
];

export default function App() {
  const [cardCompany, setCardCompany] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const validateAndSubmit = () => {
    if (!cardCompany) {
      Alert.alert("오류", "카드사를 선택하세요.");
      return;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      Alert.alert("오류", "카드번호는 16자리 숫자여야 합니다.");
      return;
    }
    if (!cardHolder.trim()) {
      Alert.alert("오류", "카드 소유자 이름을 입력하세요.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      Alert.alert("오류", "유효기간은 MM/YY 형식이어야 합니다.");
      return;
    }
    if (!/^\d{3,4}$/.test(cvc)) {
      Alert.alert("오류", "CVC는 3~4자리 숫자여야 합니다.");
      return;
    }

    const cardData = {
      cardCompany,
      cardNumber,
      cardHolder,
      expiry,
      cvc,
      nickname,
    };

    console.log("등록할 카드 데이터:", cardData);
    Alert.alert("성공", "카드가 등록되었습니다.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>카드 등록</Text>

      {/* 카드사 선택 */}
      {/* {Platform.OS === "android" ? (
        // <View style={styles.pickerWrapper}>
        //   <Picker
        //     selectedValue={cardCompany}
        //     onValueChange={(itemValue) => setCardCompany(itemValue)}
        //   >
        //     <Picker.Item label="카드사를 선택하세요" value="" />
        //     {CARD_COMPANIES.map((company) => (
        //       <Picker.Item key={company} label={company} value={company} />
        //     ))}
        //   </Picker>
        // </View>
      ) : (
        // iOS는 기본 Picker가 다르게 동작할 수 있으니, 필요시 다른 UI 라이브러리 활용 권장
        // <Text>iOS 환경은 Picker UI 개선 필요</Text>
      )} */}

      {/* 카드번호 */}
      <TextInput
        style={styles.input}
        placeholder="카드번호 (16자리 숫자)"
        keyboardType="numeric"
        maxLength={16}
        secureTextEntry={true}
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text.replace(/\D/g, ""))}
      />

      {/* 카드 소유자 */}
      <TextInput
        style={styles.input}
        placeholder="카드 소유자"
        value={cardHolder}
        onChangeText={setCardHolder}
      />

      {/* 유효기간 MM/YY */}
      <TextInput
        style={styles.input}
        placeholder="유효기간 (MM/YY)"
        maxLength={5}
        value={expiry}
        onChangeText={(text) => setExpiry(text)}
      />

      {/* CVC */}
      <TextInput
        style={styles.input}
        placeholder="CVC (3~4자리)"
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry={true}
        value={cvc}
        onChangeText={(text) => setCvc(text.replace(/\D/g, ""))}
      />

      {/* 별명 (선택) */}
      <TextInput
        style={styles.input}
        placeholder="카드 별명 (선택)"
        value={nickname}
        onChangeText={setNickname}
      />

      <Button title="등록하기" onPress={validateAndSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});
