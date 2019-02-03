    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Implement Cat class
    // speak function of Cat should display a different content than Animal

    class Animal {
      constructor(name) {
        this.name = name;
      }

      static walk(){
        console.log("walking");
      }

      speak() {
        console.log(`${this.name} speak`);
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
        if(Dog.count === undefined){
          Dog.count = 1;
        }
        else{
          Dog.count++;
        }
        
      }

      static getCount(){
        this.speak();
        console.log(Dog.count);
        
      }

      speak() {
        super.speak();
        console.log(`${this.name} bark`);
      }

    }  

    //Dog.count = 0;

    // const newDog = new Dog("Aung nat");

    // Dog.getCount();
    // //Dog.speak();
    const newDog2 = new Dog("Aung nat 2");
    // console.log(newDog2.count);
    // console.log(Dog.count);
    // Dog.getCount();
    Animal.walk();
    Dog.walk();