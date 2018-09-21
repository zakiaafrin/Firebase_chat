// document.getElementById('root').root.appendChild(loadingScreen());
// const root = document.getElementById('root');
// root.appendChild(loadingScreen());
// mountLoadingScreen();



// Initialize Firebase
const config = {
  apiKey: "AIzaSyCvgCmxzIDszusowmyvkR2rORMizKagnPI",
  authDomain: "fun-chat-ed265.firebaseapp.com",
  databaseURL: "https://fun-chat-ed265.firebaseio.com",
  projectId: "fun-chat-ed265",
  storageBucket: "fun-chat-ed265.appspot.com",
  messagingSenderId: "1076340914110"
};
firebase.initializeApp(config);


navigate('loading-screen');