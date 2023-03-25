import React from "react";
import { Text, View } from "react-native";
import Tags from "./Tags";

const PostCell = (props) => {
  const doc = props.post.doc;
  return (
    <View>
      <Text>{doc.date}</Text>
      <Text>{doc.text}</Text>
      <Text>{doc.prompt}</Text>
      <Tags tags={doc.tags} />
    </View>
  );
};

export default PostCell;
