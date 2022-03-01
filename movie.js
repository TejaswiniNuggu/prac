class movie{
    static title = "casino royale";
    static studio="Eon productions";
    static rating="PG13"
    
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getpg(){
        if(this.rating=='PG'){
            let moviedata=`title:${this.title}`;
            console.log(moviedata);
        }
       
    }
    static getpgstatic(){
        console.log(movie.title);
        console.log(movie.studio);
        console.log(movie.rating);
    }
}

let movie1=new movie("svsc","anapurna","R")
movie1.getpg()
let movie2=new movie("pushpa","aha")
movie2.getpg()
movie.getpgstatic()