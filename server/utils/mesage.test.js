var expect = require('expect');
const {generateMessage} = require('./message');




describe('should creadte a message object',()=>{
    it('should creat a msg object',()=>{

     var msg=   generateMessage("ihadkahil.93@gmail.com","testing 1");
        expect(msg.from).toBe('ihadkahil.93@gmail.com');
        expect(msg.text).toBe('testing 1');
        expect(msg.createdAt).toBeA('number');
    })
})


