import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 15,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  profileAndFollower: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  profileImage: {
    position: "relative",
  },
  addIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "#0895e1",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 3,
  },
  followerBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  followerTextGroup: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  followerText: {
    fontSize: 16,
  },
  followerCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fullName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bioBar: {
    paddingHorizontal: 15,
  },
});

export default styles;
