import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

import { Context } from "../store";

let hasLoaded = false;

export default (props) => {

const { store, dispatch } = useContext(Context);

const [values, setValues] = React.useState({
    hasCameraPermission: null,
    scanned: false
 });

  React.useEffect(() => {

    // alert(props.navigation.state.routeName);
    if (hasLoaded === false)
    {
      getPermissionsAsync();
      hasLoaded = true;
    }

  });

  handleBarCodeScanned = ({ type, data }) => {
    setValues({ ...values, scanned: true });
    dispatch({ type: "scannerResult", result: data});
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    // setValues({ ...values, hasCameraPermission: status === 'granted' ? 'true' : 'false' });
    dispatch({ type: "cameraPermission", status: status});
  };

    if (store.hasCameraPermission === null) {
      return <Text>Requesting for camera permission { values.scanned }</Text>;
    }
    if (store.hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={values.scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {values.scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => setValues({ ...values, scanned: false })} />
        )}
      </View>
    );

}
