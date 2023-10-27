import { Text, View } from "react-native";
import React, { Component } from "react";

export default class index extends Component {
  render(props) {
    return <View>{props.children}</View>;
  }
}
