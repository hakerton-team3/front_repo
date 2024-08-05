// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDrIGA7UqyeGEiSKubfKZYqAs8tTKQK4W4",
  authDomain: "fourj-34a16.firebaseapp.com",
  projectId: "fourj-34a16",
  storageBucket: "fourj-34a16.appspot.com",
  messagingSenderId: "450443974300",
  appId: "1:450443974300:web:e1f0525761fb55be61ff59"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
