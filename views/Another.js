import React, { useContext } from "react";
import { Context } from "../store";

import { StyleSheet, Text, View, Button } from 'react-native';

const Another = (props) => {
  const { store, dispatch } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text>Another</Text>
      <Button
        title="Increment"
        onPress={() =>
          dispatch({ type: "increment" })
        }
      />
      <View style={styles.button}>
      <Button
        title="Decrement"
        onPress={() =>
          dispatch({ type: "decrement" })
        }
      />
      </View>
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


export default Another;
