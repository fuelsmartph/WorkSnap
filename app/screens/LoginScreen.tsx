import { FC } from "react"
import {
  Image,
  View,
  type ImageStyle,
  type TextStyle,
  type ViewStyle,
} from "react-native"
import { GoogleSocialButton } from "react-native-social-buttons"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import type { ThemedStyle } from "@/theme/types"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = () => {
  const { themed } = useAppTheme()

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={[themed($screen)]}
    >
        <View style={themed($brandRow)}>
            <Image source={require("@assets/images/logo.png")} style={themed($brandLogo)} />
            <Text size="md" weight="bold" style={themed($brandText)}>WorkSnap</Text>
            <Text size="sm" weight="light" style={themed($brandSubtitle)}>Find help at your fingertips</Text>
        </View>
        <View style={themed($heroBlock)}>
          <Image source={require("@assets/images/login_asset.png")} style={themed($heroImage)} />
        </View>

        <GoogleSocialButton
            buttonText="Continue with Google"
            onPress={() => undefined}
            buttonViewStyle={themed($socialButton)}
            textStyle={themed($socialText)}
            logoStyle={themed($googleBadge)}
        />
    </Screen>
  )
}

const $screen: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: "center",
  alignItems: "center",
})

const $heroBlock: ThemedStyle<ViewStyle> = ({ colors }) => ({
  position: "relative",
  width: "100%",
  maxHeight: 300,
  overflow: "hidden",
  marginTop: 6,
})

const $heroImage: ThemedStyle<ImageStyle> = () => ({
  width: "100%",
  height: "100%",
})

const $brandRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  position: "absolute",
  top: 20,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: spacing.xs,
  paddingHorizontal: spacing.sm,
  backgroundColor: "transparent",
})

const $brandLogo: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  width: 64,
  height: 64,
  resizeMode: "contain",
  marginBottom: spacing.sm,
})

const $brandText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 40,
  lineHeight: 44,
  fontWeight: "700",
  letterSpacing: -0.6,
})

const $brandSubtitle: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  width: "100%",
  textAlign: "center",
  color: colors.textDim,
})

const $socialButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  width: "90%",
  maxWidth: 600,
  minHeight: 62,
  borderRadius: 14,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.palette.neutral100,
  marginTop: 12,
  marginBottom: 12,
})

const $googleBadge: ThemedStyle<ImageStyle> = () => ({
  width: 38,
  height: 38,
  marginLeft: 18,
  marginRight: 10,
})

const $socialText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 22,
  fontWeight: "600",
  marginLeft: 10,
  marginRight: 18,
})
