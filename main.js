// task 1
console.log('Task 1');

let products =[1,2,3,4,5,6,7,8,9];
let ammount = products.length;
console.log(products[ammount-1]);

// task 2
console.log('Task 2');

let styles = ['Jazz','Blues'];

// add last element
styles.push('Rock-n-Roll');
console.log(styles);

// change prelast element
styles.splice(-2,1,'Classic');
console.log(styles);

// delete first element
console.log(styles.shift());

// add fist two elements
styles.unshift('Rap', 'Raggy');
console.log(styles);

// task 3
console.log('Task 3');
function find(arr, value) {
    let index = -1;
    for(let i = 0; i < arr.length; i++) {        
        if(arr[i] === value) {  
            index = i;          
        } 
    }
    console.log("Element`s index = " + index);
}

find(styles, 'Classic');
find(styles, 'Hard-Rock');

// task 4
console.log('Task 4');

let array = [12,34,45,23,87,56,34,56,32,55,88,34,98,22,34];

function sliceArray(arr,a,b) {
    let newArray = arr.splice(a,(b-a)+1);
    console.log(newArray); 
}

sliceArray(array,2,6);

// task 5
console.log('Task 5');

let firstString = 'my-short-string';

function camelize(str) {

    // devide to array of word in "-"
    let splitArray = str.split("-");
    
    let endString = splitArray[0];
    for(let i=1; i<splitArray.length; i ++) {

        // devide each word to symbols
        let smallArr = splitArray[i].split("");

        // make first symbol in UpperCase
       smallArr.splice(0,1,smallArr[0].toUpperCase());  
       
       // join with endString
        endString +=smallArr.join('');
    }
    console.log(endString);
}
camelize(firstString);




