import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import PostCell from "../components/PostCell";
import { getAllPosts } from "../hooks/apiRequest/Posts";

const Timeline = ({ navigation }) => {
  console.log("The timeline is rendering");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("PostView", { post: item })}
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
