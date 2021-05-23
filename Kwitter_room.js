var firebaseConfig = {
    apiKey: "AIzaSyBah_SvgDTvzHk30R4dTprz9PgNgtjBdFs",
    authDomain: "project-94-by-tvisha.firebaseapp.com",
    databaseURL: "https://project-94-by-tvisha-default-rtdb.firebaseio.com",
    projectId: "project-94-by-tvisha",
    storageBucket: "project-94-by-tvisha.appspot.com",
    messagingSenderId: "860019217151",
    appId: "1:860019217151:web:7e99524fd3ef47ecb2f2ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var UserName_1 = localStorage.getItem("User_1");
document.getElementById("UserName_Display").innerHTML = "Welcome " + UserName_1;
function rediectToRoomName(Names){
  console.log(Names);
  localStorage.setItem("Room_Name", Names);
  window.location = "Page.html";
}

firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("Output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =
      childSnapshot.key;
      Room_Names = childKey;
      //Start code
      console.log("Room Names: " + Room_Names);
      Row = "<div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)'>#"+ Room_Names +"</div><hr>";
      document.getElementById("Output").innerHTML+= Row;
      //End code
   });});
}
  getData();

function AddRoom(){
    Add_User = document.getElementById("Input_Room_Name").value;
    console.log(Add_User);
    firebase.database().ref("/").child(Add_User).update({
        Purpose: "Adding Room"
    });
    document.getElementById("Output").innerHTML += Add_User;
}
function LogOut(){
  localStorage.removeItem("User_1");
  localStorage.removeItem("Room_Name");
  window.location = "Login.html";
}