import React from "react";
import { Text, StyleSheet } from "react-native";

export default props => {
  let _passedStyle = props.style || {};

  return (
    <Text {...props} style={props.isHeader ? [style.headerFont, _passedStyle]: [style.text, _passedStyle]}>
      {props.children}
    </Text>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: "brandon-grotesque-black"
  },
  headerFont: {
    fontFamily: "PlayfairDisplay-Bold"
  }
});