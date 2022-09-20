import React from "react";
import { Text } from "react-native";

const Post = (props) => {
  const doc = props.doc;
  return <Text>This is the text: {doc.text}</Text>;
};

export default Post;
