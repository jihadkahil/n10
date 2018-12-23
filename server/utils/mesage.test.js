var expect = require('expect');
const {generateMessage,generateLocationMessage} = require('./message');




describe('should creadte a message object',()=>{
    it('should creat a msg object',()=>{

     var msg=   generateMessage("ihadkahil.93@gmail.com","testing 1");
        expect(msg.from).toBe('ihadkahil.93@gmail.com');
        expect(msg.text).toBe('testing 1');
        expect(msg.createdAt).toBeA('number');
    })
})


describe('should creat a location msg',()=>{
    it('should creat a location msg obj',()=>{
        var location = generateLocationMessage('jihadkahil.93@gmail.com',13.13,14.14);
        expect(location.from).toBe('jihadkahil.93@gmail.com');
        expect(location.url).toBe("https://www.google.com/maps?q=13.13,14.14")
    })
})
