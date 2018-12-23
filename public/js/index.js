var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
 

  console.log(message.text);
  var li = jQuery('<li></li>');


  li.text(`from ${message.from} : ${message.text} `);
  jQuery('#messages').append(li);
});


jQuery('#message-form').on('submit',function(e){
  e.preventDefault();


  socket.emit('createMessage',
  {from:'jihad',text:jQuery('[name=message]').val(),function (name) {
    
    console.log(name);
  }},function(data){
    console.log('we are going '+data);
  });
  })
  