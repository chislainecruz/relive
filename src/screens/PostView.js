import { View } from "react-native";
import Post from "../components/Post";

const PostView = ({ route }) => {
  const { post } = route.params;

  return (
    <View>
      <Post doc={post.doc} />
    </View>
  );
};

export default PostView;
