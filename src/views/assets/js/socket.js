const socket = io.connect("https://monitoring.delicacysound.repl.co");

socket.on('userCount', userCount => {
let doc = document.getElementById('connectionCount');
  if(doc) {
    doc.innerHTML = userCount;
  }
})