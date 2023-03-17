import React from "react";
import { Text, View } from "react-native";
import Tags from "./Tags";

const PostCell = (props) => {
  const doc = props.post.doc;
  return (
    <View style={{ borderColor: "#FF3D00", borderWidth: 2, padding: 10 }}>
      <Text>{doc.date}</Text>
      <Text style={{ fontSize: 24 }}>{doc.text}</Text>
      <Text>{doc.prompt}</Text>
      <Tags tags={doc.tags} />
    </View>
  );
};

export default PostCell;
