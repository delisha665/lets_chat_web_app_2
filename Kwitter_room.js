function logOut() {
    window.location="index.html";
    localStorage.clear();
}
add_room=document.getElementById("room").value;
const firebaseConfig = {
    apiKey: "AIzaSyBBR2_eKyqY7E0Y_na5rUNktiwE_37PyI8",
    authDomain: "letschat-webapp-283f2.firebaseapp.com",
    projectId: "letschat-webapp-283f2",
    storageBucket: "letschat-webapp-283f2.appspot.com",
    messagingSenderId: "336882725051",
    appId: "1:336882725051:web:5bd5400a76f226d0cf399e"
  };
  firebase.initializeApp(firebaseConfig);
