import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />

          <ThemedText type="title" style={styles.title}>
            Welcome to&nbsp;Expo
          </ThemedText>

          <ThemedText style={styles.studentInfo}>
            <ThemedText style={styles.boldText}>Name: Abdul Basit</ThemedText>
          </ThemedText>

          <ThemedText style={styles.studentInfo}>
            <ThemedText style={styles.boldText}>Roll No: 23i-3018</ThemedText>
          </ThemedText>

          <Image
            source={require("@/assets/images/cat.jpg")}
            contentFit="cover"
            style={styles.catImage}
          />
        </ThemedView>

        {Platform.OS === "web" && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },

  studentInfo: {
    textAlign: "center",
  },

  boldText: {
    fontWeight: "bold",
  },
  catImage: {
    width: 180,
    height: 240,
    borderRadius: Spacing.three,
  },
});
