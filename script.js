class car{
    setAttribute(model,year){
        this.model=model;
        this.year=year;
    }
    getmodel(){
        let x=[];
        if(this.year==2018){
            x.push(this.model)
        }console.log(x.join(","));
    } 
}
let car1=new car()
car1.setAttribute("nexon","2018")
car1.getmodel()
let car2=new car()
car2.setAttribute("tata","2018")
car2.getmodel()
let car3=new car()
car3.setAttribute("honda","2019")
car3.getmodel()