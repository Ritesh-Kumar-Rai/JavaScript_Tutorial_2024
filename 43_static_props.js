// static property in class

class User{
    constructor(username){
        this.username = username;
    }

    static create_id(){
        return Math.round(Math.random() * this.username.length) * 24;
    }
}

const iphone = new User("iphone 16");

// console.log(iphone.create_id()); error

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }

    showTeacher(){
        console.log(`The Professor name: ${this.username} and email is ${this.email}`);
    }
}

const professor = new Teacher("Prof. Ritesh Kumar Rai", "ritesh@rai.professor");

professor.showTeacher();
// console.log(professor.create_id()); error