import Axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data } = await Axios.get("http://192.168.50.163:3001/api/posts");
    console.log("Posts received from db", data);
    return data.rows;
  } catch (err) {
    console.log("Error getting all posts: ", err);
  }
};

export const getPost = async (id) => {
  try {
    const { data } = await Axios.get(
      `http://192.168.50.163:3001/api/posts/${id}`
    );
    return data;
  } catch (err) {
    console.log("Error getting post with id: ", id);
    console.log(err);
  }
};

export const updatePost = async (post) => {
  try {
    const id = post._id;
    const { data } = await Axios.put(
      `http://192.168.50.163:3001/api/posts/${id}`,
      post
    );
    return data.doc;
  } catch (err) {
    console.log("Error updating post: ", err);
  }
};
