import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import PostCell from "../components/PostCell";
import { getAllPosts } from "../hooks/apiRequest/PostsHooks";
import { useGlobalState } from "../state/state";

const Timeline = ({ navigation }) => {
  console.log("The timeline is rendering");
  const state = useGlobalState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("TIMELINE USE EFFECT");
    getAllPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  console.log("posts in global state ", state.getPosts());

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("PostView", { postId: item.id })}
      >
        <PostCell post={item} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {!!posts?.length && <FlatList data={posts} renderItem={renderItem} />}
    </View>
  );
};

export default Timeline;
