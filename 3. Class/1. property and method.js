    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Add leg Property and sleep method

    class Animal {
      
      constructor(name,leg = 4) {
        this.name = name;             
        this.leg = leg;
      }
      
      speak(){        
        console.log(`${this.name} speak`);
      }

      sleep(){
        console.log(`${this.name} is sleeping`);
      }
    }
   
    let a = new Animal('Mitzie',2);    
    console.log(a.name);
    console.log(a.leg);
    a.speak();
    a.sleep();
