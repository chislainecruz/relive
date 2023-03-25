import { StyleSheet } from "react-native";

const colors = {
  orange: "#f59c27",
  lavender: "#B39EB5",
  mint: "#A2D9CE",
  rose: "#F4C2C2",
  sky: "#c5e4f0",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sky,
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  postHeaderDate: {
    fontSize: 12,
    color: "#999999",
    marginRight: 10,
  },
  postHeaderPrompt: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.lavender,
  },
  postBody: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
  postTags: {
    flexDirection: "row",
    alignItems: "left",
    flexWrap: "wrap",
  },
  postTag: {
    backgroundColor: colors.orange,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  postTagText: {
    fontSize: 14,
    color: "#000000",
  },
});

export default styles;
