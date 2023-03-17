import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Tags from "./Tags";
import SaveHeader from "../components/SaveHeader";
import { updatePost } from "../hooks/apiRequest/PostsHooks";

const PostForm = (props) => {
  const post = props.post;
  console.log("POST IS ", post);
  const [image, setImage] = useState(post.image.uri);
  const [hasImage, setHasImage] = useState(post.image.hasImage);
  const [text, setText] = useState(post.text);
  const [tags, setTags] = useState(post.tags);

  const options = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 1,
  };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.cancelled) {
      setHasImage(true);
      setImage(result.uri);
    }
  };

  const onSave = () => {
    const updatedDoc = {
      ...post,
      image: {
        hasImage: hasImage,
        uri: image,
      },
      text: text,
      tags: tags,
    };
    updatePost(updatedDoc);
    console.log("about to navigate to post view");
    props.navigation.navigate("PostView", { postId: updatedDoc._id });
  };

  const editTags = () => {
    console.log("editiing tags");
  };

  return (
    <View>
      <SaveHeader onSave={onSave} />
      <Text>{post.prompt}</Text>
      <TextInput
        multiline
        numberOfLines={5}
        onChangeText={setText}
        value={text}
      />
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          position: "relative",
          padding: 5,
        }}
      >
        <Button title="+" onPress={editTags}></Button>
        <Tags tags={tags} />
      </View>
      <Button title="Photo" onPress={pickImage} />
      {hasImage && (
        <Image source={{ uri: image }} style={{ width: 350, height: 200 }} />
      )}
    </View>
  );
};

export default PostForm;
