import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from "react-navigation-drawer";
import { SafeAreaView } from "react-native";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import { Header } from "react-native-elements";

const RootStack = createDrawerNavigator(
  {
    HomePage: HomePage,
    ProfilePage: ProfilePage,
  },
  {
    contentComponent: (props) => <CustomDrawerComponent {...props} />,
  }
);

const CustomDrawerComponent = (props) => (
  <SafeAreaView
  // forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <DrawerNavigatorItems {...props} />
  </SafeAreaView>
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
      <Header containerStyle={{ backgroundColor: "white" }}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Image
            source={require("./drawer.png")}
            style={{ width: 50, height: 50, tintColor: "#1F73BD" }}
          />
        </TouchableOpacity>
      </Header>
      <Text>Open up HI to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
