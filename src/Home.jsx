import React, { useEffect } from 'react';
import Section01 from './Home/Section1.jsx';
import Section02 from './Home/section2.jsx';
import Section03 from './Home/section3.jsx';
import axiosInstance from './axios/axiosInstance.jsx';
import { messaging, onMessage, getToken } from './firebase';

const Home = () => {


  useEffect(() => {
    const requestUserPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        try {
          const token = await getToken(messaging, { vapidKey: 'BD5YWfRYngq_pzCIgzE1r1LOZf5-a4xzHg85_769GteG2jA45FttLJUM3kS--QxaJCoOkjstmOwoVsfnmMt388E' });
          console.log('FCM Token:', token);

          const accessToken = localStorage.getItem('accessToken');
          const existsfcmKey = await axiosInstance.get(
            '/user-infos/fcm-key',
            {
              headers: {'Authorization': `Bearer ${accessToken}`}
            }
          );
          
          const { existsClientFcmKey } = existsfcmKey.data;

          if (accessToken && existsClientFcmKey === false) {
            await axiosInstance.patch('/user-infos/fcm-key', 
              { clientFcmKey: token },
              { headers: { 'Authorization': `Bearer ${accessToken}` }}
            );
          } else {
            console.error('Access Token not found');
          }
          
        } catch (error) {
          console.error('Error getting FCM token', error);
        }
      } else {
        console.error('Permission not granted for notifications');
      }
    };

    const receiveMessage = () => {
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
          body: payload.notification.body,
        };

        if (Notification.permission === 'granted') {
          new Notification(notificationTitle, notificationOptions);
        }
      });
    };


    requestUserPermission();
    receiveMessage();

  }, []);
  return (
    <div>
      <Section01 />
      <Section02 />
      <Section03 />
    </div>
  );
}

export default Home;
