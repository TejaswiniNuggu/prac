class person{
    constructor(name,age,gender,addrs){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.addrs = addrs;
    }
    getpersondetails(){
        let persondetails =`name:${this.name}
age:${this.age}
gender:${this.gender}
addrs:${this.addrs}`
        console.log(persondetails)
    }
}
let person1=new person("teju","26","female","hyderabad")
person1.getpersondetails()