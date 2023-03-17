import React from "react";
import { View, Text, Button } from "react-native";

const ActionHeader = ({ navigation, postId }) => {
  const onEdit = () => {
    navigation.navigate("EditPostView", { postId: postId });
  };
  const onShare = () => {};
  const onExit = () => {
    navigation.navigate("Timeline");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button title="Edit" onPress={onEdit} />
      <Button title="Share" onPress={onShare} />
      <Button title="Exit" onPress={onExit} />
    </View>
  );
};

export default ActionHeader;
