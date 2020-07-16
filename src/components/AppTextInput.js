import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import {watermelon100, blueberry20} from "../colors";


class AppTextInput extends React.Component {
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor={watermelon100}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: blueberry20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default AppTextInput;