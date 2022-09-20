import Axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data } = await Axios.get("http://192.168.50.163:3001/api/posts");
    return data.rows;
  } catch (err) {
    console.log("Error getting all posts: ", err);
  }
};
