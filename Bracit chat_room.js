var firebaseConfig = {
  apiKey: "AIzaSyB4uq4tb_HyacWKBY6gFYBbOYeEFhN91V8",
  authDomain: "bracit-chat-6b649.firebaseapp.com",
  databaseURL: "https://bracit-chat-6b649-default-rtdb.firebaseio.com",
  projectId: "bracit-chat-6b649",
  storageBucket: "bracit-chat-6b649.appspot.com",
  messagingSenderId: "371428493503",
  appId: "1:371428493503:web:4b66d980998f3010cbde0a",
  measurementId: "G-XWW91YM9LZ"
};

firebase.initializeApp(firebaseConfig);

var username=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome "+username;

function add_room(){
var room_name=document.getElementById("room_name").value;
localStorage.setItem("Room" , room_name);
firebase.database().ref("/").child(room_name).update({
  purpose:"Chat"
});
window.location="Bracit chat_message.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Room", name);
  window.location="Bracit chat_message.html";
}

function log_out(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room");
  window.location="index.html"
}