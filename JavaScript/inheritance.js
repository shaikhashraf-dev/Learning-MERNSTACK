class Cat{
    constructor(name){
        this.name=name;
        this.legs=4;
    }
    meow(){
        console.log(`Cat doing ${this.name}`);
    }
    leg(){
        console.log(`The Cat is Moving in ${this.legs} legs `);
    }
} 

class Lion extends Cat{
constructor(name,sound){
    super(name);
    this.sound=sound;
}
  meow(){
        console.log(`Lion doing ${this.name}`);
    }
      leg(){
        console.log(`The Lion is Moving in ${this.legs} legs `);
    }
}
let miyu = new Cat("miyu");
miyu.meow();
miyu.leg();
let  roars = new Lion("simbha");
roars.meow();
roars.leg();