import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { watermelon100} from "../colors";

class Button extends React.Component {
  render() {
    const { label, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: watermelon100,
    marginVertical: 16,
    paddingVertical: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: watermelon100
  },
  text: {
    color: 'white',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Button;