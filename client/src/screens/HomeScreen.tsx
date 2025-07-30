import CountUpText from "@/components/CountUpNumber";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#222",
        padding: 12,
        justifyContent: "flex-start",
        alignItems: "stretch",
        gap: 12,
        marginBottom: 50,
      }}
    >
      <ScrollView>
        <View>
          <View style={styles.container}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: 16,
                marginBottom: 12,
              }}
            >
              총 보유자산
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CountUpText
                to={3700250}
                duration={8000}
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: 32,
                }}
              />
              <Text style={{ color: "#fff", fontWeight: "700", fontSize: 28 }}>
                원
              </Text>
            </View>
            <Pressable>
              <Text
                style={{
                  position: "absolute",
                  right: 8,
                  bottom: 0,
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: 20,
                  textAlign: "center",
                  backgroundColor: "#0066ff",
                  width: 62,
                  height: 34,
                  lineHeight: 42,
                  borderRadius: 4,
                }}
              >
                입금
              </Text>
            </Pressable>
          </View>

          <View style={styles.container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 16,
                    marginRight: 8,
                  }}
                >
                  고정지출
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
                >
                  300,000원
                </Text>
              </View>
              <Button title="송금"></Button>
            </View>
          </View>

          <View style={styles.container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 16,
                    marginRight: 8,
                  }}
                >
                  식비
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
                >
                  280,000원
                </Text>
              </View>
              <Button title="송금"></Button>
            </View>
          </View>

          <View style={styles.container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 16,
                    marginRight: 8,
                  }}
                >
                  유흥비
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
                >
                  70,000원
                </Text>
              </View>
              <Button title="송금"></Button>
            </View>
          </View>

          <Pressable>
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: 20,
                textAlign: "center",
                backgroundColor: "#0066ff",
                height: 44,
                lineHeight: 52,
                borderRadius: 4,
              }}
            >
              소비내역 관리하기
            </Text>
          </Pressable>
        </View>

        <View>
          <View style={{ marginTop: 28 }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: 16,
                marginBottom: 12,
              }}
            >
              보유 포인트
            </Text>
          </View>

          <View style={styles.container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 16,
                    marginRight: 8,
                  }}
                >
                  무신사
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
                >
                  2,000P
                </Text>
              </View>
              <Button title="추가"></Button>
            </View>
          </View>

          <View style={styles.container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 16,
                    marginRight: 8,
                  }}
                >
                  네이버
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
                >
                  20P
                </Text>
              </View>
              <Button title="추가"></Button>
            </View>
          </View>

          <View style={styles.container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 16,
                    marginRight: 8,
                  }}
                >
                  쿠팡
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
                >
                  500P
                </Text>
              </View>
              <Button title="추가"></Button>
            </View>
          </View>

          <Pressable>
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: 20,
                textAlign: "center",
                backgroundColor: "#0066ff",
                height: 44,
                lineHeight: 52,
                borderRadius: 4,
              }}
            >
              포인트 관리하기
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2a2a",
    padding: 10,
    borderRadius: 4,
    marginBottom: 12,
  },
});
