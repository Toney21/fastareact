importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDXJg4U_MOK-9LiwvWNAeGQvDSyWcZnhAU",

  authDomain: "fasta-406607.firebaseapp.com",

  projectId: "fasta-406607",

  storageBucket: "fasta-406607.firebasestorage.app",

  messagingSenderId: "983193418283",

  appId: "1:983193418283:web:def92c2d3ae631b4efc86e",

  measurementId: "G-4FSKS2SMYD"

};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
