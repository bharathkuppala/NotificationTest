import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'react-native-firebase';

export default class App extends Component {
  componentDidMount(){
    // firebase.messaging().getToken()
    // .then((token) => {
    //     console.warn('Device FCM Token: ', token);
    // });
  // this.removeAllDeliveredNotifications =  firebase.notifications().removeAllDeliveredNotifications();
//   firebase.notifications().onNotificationOpened((notificationOpen) => {
//     console.log(notificationOpen.notification.data);
// });
    this.removeAllDeliveredNotifications= firebase.removeAllDeliveredNotifications();
  }

  componentWillUnmount() {
    this.removeAllDeliveredNotifications();
}

  render() {
    return (
      <View style={styles.container}>
       <Text>Notification sender</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
