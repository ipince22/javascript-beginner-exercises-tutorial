// Your code here:

for (let index = 99; index >=0; index--) {
    let string="";
    if (index===0) {
        string="No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."
    } else if (index>10) {
        string = index + " bottles of milk on the wall,"+ index + " bottles of milk. Take one down and pass it around, no more bottles of milk on the wall."    
    }else{
        string = index + " bottles of milk on the wall,"+ index + " bottles of milk. Take one down and pass it around,"+ (index-1) + "bottles of milk on the wall."
    }
    console.log(string);
    
}