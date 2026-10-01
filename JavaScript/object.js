 let product={
 company:'AL-Huda',
 Brand:'Shirt',
 Price:1300,
rating:{
zerostar:8,
 onestar:12,
 twostar:34,
 threestar:5,
 fourstar:9,
 fivestar:3,
showRating : function(){
    let totalRating = this.zerostar+this.onestar+this.twostar+this.threestar+this.fourstar+this.fivestar;

    let AverageRating= (5*this.fivestar+4*this.fourstar+3*this.threestar+2*this.twostar+1*this.onestar+0*this.zerostar)/totalRating;
console.log("Total Rating:"+ totalRating);
console.log("AverageRating:"+AverageRating);
}
},
 };
console.log(product.rating.showRating());

product.Price=450;
console.log(product);

console.log(product.rating);

console.log("Printed Here")
console.log(Object.values(product));
console.log(Object.keys(product));