import React, { useEffect, useState } from "react";
import { View } from "react-native";
import PostForm from "../components/PostForm";
import { getPost } from "../hooks/apiRequest/PostsHooks";

const EditPostView = ({ route, navigation }) => {
  const { postId } = route.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(postId).then((post) => {
      setPost(post);
    });
  }, [postId]);

  return (
    <View>{post._id && <PostForm post={post} navigation={navigation} />}</View>
  );
};

export default EditPostView;
