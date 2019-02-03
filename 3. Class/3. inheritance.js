    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Implement Cat class
    // speak function of Cat should display a different content than Animal

    class Animal {
      constructor(name) {
        this.name = name;             
      }
      
      speak(){        
        console.log(`${this.name} speak`);
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
      }

      speak(){
        super.speak();
        console.log(`${this.name} bark`);
      }
    }    

    class Cat extends Animal{
      constructor(name){
        super(name);
      }

      speak(){
        //super.speak();
        console.log("a cat is speaking");
      }
    }

    let d = new Dog('Aung Net'); 
    console.log(d.name);
    d.speak(); //This function should return the result of both parent and child functions

    const cat = new Cat("A Cat");
    console.log(cat.name);
    cat.speak();