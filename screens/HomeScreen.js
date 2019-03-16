import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MapView } from "expo";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {};

  onUserLocationChange = coordinate => {
    this.setState({ coordinate });
  };

  onRegionChange = region => {
    this.setState({ region });
  };

  render() {
    const { coordinate } = this.state;
    return (
      <MapView
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        showsUserLocation
        followsUserLocation
        userLocationAnnotationTitle="You are here now"
        onUserLocationChange={this.onUserLocationChange}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}

// const RecordButton = () => (
//   <View
//     style={{
//       width: 60,
//       height: 60,
//       borderRadius: 60,
//       backgroundColor: "white",
//       justifyContent: "center",
//       alignItems: "center"
//     }}
//   >
//     <TouchableOpacity
//       onPress={() => alert("Record started")}
//       style={{
//         width: 55,
//         height: 55,
//         borderRadius: 55,
//         backgroundColor: "red"
//       }}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
