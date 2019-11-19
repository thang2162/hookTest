import React, { useReducer } from "react";
import { StyleSheet, Text, View } from 'react-native';

import { Context, initialState, reducer } from "./store";
import Nav from './navigator';

export default function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
    <Nav />
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
