import {StatusBar, StatusBarProps, StatusBarPropsAndroid, StatusBarPropsIOS, Text, View} from "react-native";
import {FC} from "react";
import {useIsFocused} from "@react-navigation/native";
import * as React from "react";

interface FocusedStatusBarProps extends StatusBarProps {
  background?: string
}

const FocusedStatusBar: FC<FocusedStatusBarProps> = ({ ...rest }) => {
  const isFocused = useIsFocused()

  return isFocused ? (
    <StatusBar animated={true} {...rest} />
  ) : null
}

export default FocusedStatusBar