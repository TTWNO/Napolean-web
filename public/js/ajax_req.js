function sendToServer(command){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var json = JSON.parse(this.responseText);
      console.log("Recieved");
      console.log(json);
      document.getElementById("server_response").innerHTML = json.message;
    }
  };
  xhttp.open("POST", "/", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send("{\"message\": \"Hello world!\", \"command\": \"" + command + "\"}");
}

function touchLockfile(){
	sendToServer("touch filelock.lock");
}

function decreeseBrightness(){
	sendToServer("xbacklight -dec 10");
}
