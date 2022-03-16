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

  

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="ChatRoom.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Roomname= " + Room_names);
        row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  
  function redirectToRoomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
  } 
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  