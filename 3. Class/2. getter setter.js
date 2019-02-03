    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Creat get and set for dinner properties

    class Animal {

      constructor(name) {
        this.name = name;             
        this.foodForBreakfast = 'nothing';
        this.foodForDinner = 'nothing';
      }   

      set dinner(food){
        this.foodForDinner = food;
      }
      
      set breakfast(food){
        this.BREAKFAST = food;
      }

      get breakfast(){
        return `${this.name} eatten ${this.BREAKFAST} for breakfast`;
      }

      get dinner(){
        return `${this.name} eatten ${this.foodForDinner} for dinner`;
      }
    }
   
    let a = new Animal('Mitzie');     
    a.breakfast = 'Cake';
    a.dinner = 'Pizza';  
    console.log(a.breakfast);
    console.log(a.dinner);
