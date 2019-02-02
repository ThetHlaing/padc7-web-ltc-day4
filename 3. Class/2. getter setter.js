    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Creat get and set for dinner properties

    class Animal {

      constructor(name) {
        this.name = name;             
        this.food = 'nothing';
      }      
    }
   
    let a = new Animal('Mitzie');     
    a.breakfast = 'Cake';
    console.log(a.breakfast);
