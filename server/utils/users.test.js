const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;


    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id:1,
            name:'jihad',
            room:'LWC'
        },{
            id:2,
            name:'Lindsey',
            room:'LWC'
        },{
            id:3,
            name:'Sonia',
            room:'SWC'
        }]
    })
   



  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

   
    expect(users.users).toEqual([user]);
  });


  it('should retrun users list',()=>{
    var userName=  users.getUsersList('LWC');
    expect(userName.length).toEqual(2);
  })


  it('should retrun the specific user',()=>{
      var user = users.getUser(1);
      expect(user[0].name).toEqual('jihad');
  })


  it('should not find any user',()=>{
      var user = users.getUser(0);
      expect(user[0]).toNotExist();
  })

  it('should remove this user',()=>{
      var user = users.removeUser(1);

      expect(user[0].id).toBe(1);
      expect(users.users.length).toBe(2);
  })

  it('should not remove any user',()=>{
      var user = users.removeUser(0);

   
      expect(user.length).toBe(0);
    
  })
});

