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
 
 var user_name= localStorage.getItem("user_name");
 var room_name= localStorage.getItem("Room");

    function sendmsg(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, message:msg, likes:0, hearts:0
      });
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         names=message_data["name"];
         msg=message_data["message"];
         likes=message_data["likes"];
         hearts=message_data["hearts"];

         nametag="<h4>"+names+"<img src='tick.png' class='user_tick'></h4>";
         msgtag="<h4 class='message_h4'>"+msg+"</h4>";
         like="<button id='"+firebase_message_id+"' class='btn btn-warning' value="+likes+"onclick='updatelike(this.id)'>";
         spantag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
         row = nametag+ msgtag+like+spantag;
         document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room");
      window.location="index.html";
}