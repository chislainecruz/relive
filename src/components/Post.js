import React from "react";
import { View, Text, Image } from "react-native";
import Tags from "./Tags";

const Post = (props) => {
  const doc = props.doc;

  return (
    <View>
      <Text>{doc.date}</Text>
      <Text>{doc.time}</Text>
      <Text>{doc.prompt}</Text>
      <Text>{doc.text}</Text>
      <Tags tags={doc.tags} />
      {doc.image.hasImage && (
        <Image
          source={{ uri: doc.image.uri }}
          style={{ width: 350, height: 200 }}
        />
      )}
    </View>
  );
};

export default Post;
