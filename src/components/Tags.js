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

export default Tags;
