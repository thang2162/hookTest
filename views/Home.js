import React, { useContext } from "react";
import { Context } from "../store";

import { StyleSheet, Text, View, Button } from 'react-native';

const Home = (props) => {
  const { store, dispatch } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text>Home; Counter: { store.count }</Text>
      <Button
        title="Another"
        onPress={() =>
          props.navigation.navigate('Another')
        }
      />
      <View style={styles.button}>
      <Button
        title="Scanner"
        onPress={() =>
          props.navigation.navigate('Scanner')
        }
      />
      </View>
      <Text>{'\n\n'} Scanner Result {'\n\n'} {store.cardTxt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 5
  }
});


export default Home;
