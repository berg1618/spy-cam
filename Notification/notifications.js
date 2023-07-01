import * as Notifications from 'expo-notifications';

import EventSource from "react-native-sse";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


const url = 'https://fb6b-2804-4764-20e-4e00-7d7f-4452-3f44-b817.ngrok-free.app/registro/watch';
const source = new EventSource(url);


export const CreatNotification = () => {
  source.addEventListener("message", (event) => {
    // console.log('-->',event.data)
    const data = JSON.parse(event.data);
    
    if (data.length > 0) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Alerta!",
          body: data[0].mensagem,
        },
        trigger: {
          seconds: 5
        },
      });
    }
  });
  
}
