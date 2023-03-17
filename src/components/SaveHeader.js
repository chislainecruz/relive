import React from "react";
import { View, Text, Button } from "react-native";
import Logo from "./Logo";

const SaveHeader = (props) => {
  // if no post, we are creating one instead of editing
  const onSave = () => {};

  const onCancel = () => {};

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Logo
        style={{
          flexGrow: 2,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          flexGrow: 1,
          padding: 5,
        }}
      >
        <Button title="Save" onPress={props.onSave} />
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
};

export default SaveHeader;
