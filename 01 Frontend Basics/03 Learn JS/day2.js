const queue = [];
queue.push(1);
queue.push("hi");
queue.push(true);
queue.push(1.23);
console.log(queue);
//Remove the first person:
const firstPerson = queue.shift();
console.log(queue);

console.log(firstPerson);

// pop and shift are deleting from the array
// push and unshift are modifing the array and return new lenght



// Operations at the beginning may require JavaScript to move/re-index many elements:
// Operations at the end of an array are usually cheaper:




