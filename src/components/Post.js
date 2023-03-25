import React from "react";
import { View, Text, Image } from "react-native";
import Tags from "./Tags";
import styles from "../stylesheets/styles";

const Post = (props) => {
  const doc = props.doc;

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Text style={styles.postHeaderDate}>{doc.date}</Text>
        <Text style={styles.postHeaderPrompt}>{doc.prompt}</Text>
      </View>

      {/* <Text>{doc.time}</Text> */}
      <View style={styles.postBody}>
        <Text>{doc.text}</Text>
      </View>
      <View style={styles.postTag}>
        <Tags tags={doc.tags} />
      </View>

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
