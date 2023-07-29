import * as Notifications from 'expo-notifications';

import EventSource from "react-native-sse";
import { URL } from "@env";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});



const url = `${URL}/registro/watch`;
const source = new EventSource(url);


export const CreatNotification = () => {
  source.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    console.log(data.data)
    
    if (data.data.length > 0) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Alerta!",
          body: data.data[0].mensagem,
        },
        trigger: {
          seconds: 5
        },
      });
    }
  });
  
}
