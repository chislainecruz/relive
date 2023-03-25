import React from "react";
import { Text, View } from "react-native";
import styles from "../stylesheets/styles";

const Tags = (props) => {
  const tags = props.tags;
  return (
    <View style={styles.postTag}>
      {tags.map((name, idx) => {
        return (
          <Text key={idx} style={styles.postTagText}>
            {name}
          </Text>
        );
      })}
    </View>
  );
};

export default Tags;
