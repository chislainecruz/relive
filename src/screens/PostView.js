import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Post from "../components/Post";
import { getPost } from "../hooks/apiRequest/PostsHooks";

const PostView = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(postId).then((post) => {
      setPost(post);
    });
  }, []);

  return <View>{post._id && <Post doc={post} />}</View>;
};

export default PostView;
