class uberprice{
    constructor(distance,time,weekday){
        this.distance = distance;
        this.time = time;
        this.weekday = weekday;
        if(this.weekday=="Sun"||this.weekday=="Fri"||this.weekday=="Sat"){
        let total=((distance*14)+(time*1))+150+48 //48:base fee and 150 increased amt than regular days
        this.total=total
        }else{
            let total=(distance*14)+(time*1)+48
            this.total=total
        }
        
        
    }
    getuberpricetotal(){
    if(this.total>=85){
    let totalprice=`total:${this.total}`
    console.log(totalprice)
    }
    else{
        console.log("invalid ride")
    }   
    }
}
let ride1=new uberprice(10,10,"Sat")
ride1.getuberpricetotal()
let ride2=new uberprice(10,10,"Mon")
ride2.getuberpricetotal()