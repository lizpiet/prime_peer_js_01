var value = 42;

if (value >= 53){
	value += 42;
}else {
	value -= 13;
};


var stringValue = "11";
value += stringValue;

var numArray = [];

for(var i = 0; i < value.length; i++) {
	numArray[i] = value.charAt(i);
}
console.log(numArray);
numArray.pop();
numArray.shift();



 var backwards = "";

for (i = numArray.length -1; i >= 0; i--){
backwards += numArray[i];

}
console.log(value);
console.log(backwards);


value = parseInt(value);
backwards = parseInt(backwards);
value = value + backwards;

console.log(value)

if(value < 60){
    value = 14;
}else if(value == 2930){
    value = 27;
}else{
	value = 2;
};
i = 10;
while (i > 0){
	value += 1;
	i--;
}



function numValue(val){
	val = val.toString();
	if (val.length > 1) {
      val = val.slice(1);
      value = val;
      return val;
	}; 
};


numValue(value);
console.log(value);

