import React, {FC, HTMLAttributes} from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  Button,
  ButtonProps,
  ViewBase,
  TouchableOpacityBase,
  ImageSourcePropType
} from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton: FC<any> = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

interface IRectButton extends TouchableOpacity {
  minWidth: number
  fontSize: number
  handlePress: any
}

export const RectButton: FC<any> = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};