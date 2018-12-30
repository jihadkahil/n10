// class Person{

// constructor(name,age)
// {
//     this.name = name;
//     this.age = age;
//     console.log(name,age);
// }

// getUserDescription()
// {
//     return `${this.name} is ${this.age} years old`
// }



// }


// var p = new Person('jihad',12);

// console.log(p.getUserDescription());


class Users {
    constructor()
    {
        this.users = [];
    }

    addUser(id,name,room)
    {
        var user = { id,name,room}

        this.users.push(user);
        return user;
    }



    getUser(id)
    {
        return this.users.filter((user)=>user.id === id);       
    }

    removeUser (id) {
        var user = this.getUser(id);
    
        if (user) {
          this.users = this.users.filter((user) => user.id !== id);
        }
    
        return user;
      }
    getUserList(room)
    {
        var users = this.users.filter((user)=> user.room ===room);
        var usersName = users.map((user)=> user.name);
        return usersName;
    
    }
}



module.exports = {
    Users
}