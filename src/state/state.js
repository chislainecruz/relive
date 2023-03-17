import { hookstate, useHookstate } from "@hookstate/core";
import { getAllPosts } from "../hooks/apiRequest/PostsHooks";

const globalState = hookstate({
  posts: {},
});
const wrapState = (state) => ({
  get: () => state.value,
  getPosts: () => state.posts.value,
  fetchPosts: () => {
    getAllPosts().then((posts) => {
      state.posts.set(posts);
    });
  },
});

// If state needs to be used outside a component
export const accessGlobalState = () => wrapState(globalState);
// Inside a component
export const useGlobalState = () => wrapState(useHookstate(globalState));
