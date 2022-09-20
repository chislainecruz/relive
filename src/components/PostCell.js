import React from "react";
import { Text, View } from "react-native";

const Tags = (props) => {
  const tags = props.tags;
  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        position: "relative",
        padding: 5,
      }}
    >
      {tags.map((name, idx) => {
        return (
          <Text
            key={idx}
            style={{ color: "#458B74", backgroundColor: "#BCC2C0" }}
          >
            {name}
          </Text>
        );
      })}
    </View>
  );
};

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
