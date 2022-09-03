import React from "react";
import { View, Text, Button } from "react-native";

function Timeline() {
  console.log("The timeline is rendering");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the timeline</Text>
      <Button title="Press me!" />
    </View>
  );
}

export default Timeline;
