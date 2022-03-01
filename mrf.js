let data = [
    {
      name: "Joey",
      age: 3,
      type: "dog",
    },
  
    {
      name: "Lizzy",
      age: 6,
      type: "dog",
    },
  
    {
      name: "Red",
      age: 2,
      type: "dog",
    },
  
    {
      name: "Sheru",
      age: 4,
      type: "dog",
    },
  
    {
      name: "Butters",
      age: 6,
      type: "dog",
    },
  
    {
      name: "john",
      age: 45,
      type: "human",
    },
  ];
  let typedog=data.filter(function(dog){

    if(dog.type=="dog")
    return dog.name
  }).map((d)=>{
      return d.age*7

  }).reduce((sum,d)=>{
    return sum+d
})


  console.log(typedog)

