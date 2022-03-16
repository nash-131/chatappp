
const firebaseConfig = {
    apiKey: "AIzaSyA9GbJzX92BIZLg5rF3aWmk5kBYYBkYdr0",
    authDomain: "letschat-f3fcb.firebaseapp.com",
    databaseURL: "https://letschat-f3fcb-default-rtdb.firebaseio.com",
    projectId: "letschat-f3fcb",
    storageBucket: "letschat-f3fcb.appspot.com",
    messagingSenderId: "91699592395",
    appId: "1:91699592395:web:9b2b476b86a901d6bbaf4e",
    measurementId: "G-QSQKTT0SG4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
