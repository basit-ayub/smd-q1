import { Image } from "expo-image";
import { useState } from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  const [isCatVisible, setIsCatVisible] = useState(false);

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

          <Pressable
            style={({ pressed }) => [styles.buttonPressable, pressed && styles.pressed]}
            onPress={() => setIsCatVisible(true)}
          >
            <ThemedView type="backgroundElement" style={styles.surpriseButton}>
              <ThemedText>Press for a Surprise</ThemedText>
            </ThemedView>
          </Pressable>

          {isCatVisible && (
            <Image
              source={require("@/assets/images/cat.jpg")}
              contentFit="cover"
              style={styles.catImage}
            />
          )}
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
  buttonPressable: {
    width: "100%",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  surpriseButton: {
    borderRadius: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    alignItems: "center",
    justifyContent: "center",
  },
  catImage: {
    width: 180,
    height: 240,
    borderRadius: Spacing.three,
  },
});
