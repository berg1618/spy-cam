import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

import { getNotifications } from "../api";


async function TaskGetNotifications() {
    console.log('vamos')
    let req = await getNotifications()
    console.log("->", req)
  }

const TASK_GET_NOTIFICATION = 'getNotification'

TaskManager.defineTask(TASK_GET_NOTIFICATION,() => {
    try {
        TaskGetNotifications()
        // return data? BackgroundFetch.BackgroundFetchResult.NewData : BackgroundFetch.BackgroundFetchResult.NoData
        // return BackgroundFetch.BackgroundFetchResult.NewData;
    }
    catch (err) {
        BackgroundFetch.BackgroundFetchResult.Failed
    }
  });

  const register = () => {
    return BackgroundFetch.registerTaskAsync(TASK_GET_NOTIFICATION, {
        minimumInterval: 2,
        stopOnTerminate: false,
    })
  }

  const unregister = () => {
   return BackgroundFetch.unregisterTaskAsync(TASK_GET_NOTIFICATION)
  }

  export {
    register,
    unregister
  }
  