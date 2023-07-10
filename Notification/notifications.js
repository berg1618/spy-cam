import * as Notifications from 'expo-notifications';

import EventSource from "react-native-sse";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


const url = 'http://10.48.8.190:8013/registro/watch';
const source = new EventSource(url);


export const CreatNotification = () => {
  source.addEventListener("message", (event) => {
    // console.log('-->',event.data)
    const data = JSON.parse(event.data);
    // console.log(data.data[0].mensagem)
    
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
