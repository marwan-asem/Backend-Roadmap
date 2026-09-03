# JavaScript Basics & Useful Array Tricks

> Friendly notes for learning JavaScript arrays, with practical examples and best practices.

---

## 1. Quick JavaScript Basics

Before working with arrays, remember a few core ideas.

### Variables

Use `let` when the value may change:

```js
let score = 10;
score = 20;
```

Use `const` when you do not plan to reassign the variable:

```js
const name = "Marwan";
```

### Best Practice

Prefer `const` by default.

```js
const age = 23;
```

Use `let` only when you actually need to change the value.

```js
let counter = 0;
counter++;
```

Avoid `var` in modern JavaScript unless you specifically need its older behavior.

---

## 2. Arrays

An array stores multiple values in one variable.

```js
const fruits = ["apple", "banana", "orange"];
```

Array positions start from `0`.

```js
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
```

You can get the number of elements using `.length`.

```js
console.log(fruits.length); // 3
```

### Access the Last Element

```js
console.log(fruits[fruits.length - 1]);
```

Modern JavaScript also supports:

```js
console.log(fruits.at(-1));
print the last element on array
```

---

# 3. Pushing and Popping

`push()` and `pop()` work with the **end of an array**.

They are commonly used when an array behaves like a **stack**.

A stack follows:

**Last In, First Out — LIFO**

Think of a stack of plates.

---

## `push()`

`push()` adds one or more elements to the end of the array.

```js
const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);
```

Output:

```text
[1, 2, 3, 4]
```

You can add multiple values:

```js
numbers.push(5, 6);

console.log(numbers);
```

Output:

```text
[1, 2, 3, 4, 5, 6]
```

### Important Trick

`push()` returns the **new length** of the array.

```js
const items = ["A", "B"];

const newLength = items.push("C");

console.log(newLength); // 3
```

---

## `pop()`

`pop()` removes the last element from the array.

```js
const numbers = [10, 20, 30];

numbers.pop();

console.log(numbers);
```

Output:

```text
[10, 20]
```

### Important Trick

`pop()` returns the removed value.

```js
const numbers = [10, 20, 30];

const removed = numbers.pop();

console.log(removed); // 30
console.log(numbers); // [10, 20]
```

---

## Stack Example

```js
const stack = [];

stack.push("Page 1");
stack.push("Page 2");
stack.push("Page 3");

console.log(stack);
```

Now remove the most recent item:

```js
const lastPage = stack.pop();

console.log(lastPage); // Page 3
```

This is useful in things such as:

- undo systems
- browser history logic
- recursive algorithms
- expression evaluation

---

## Best Practices for `push()` and `pop()`

Use them when you want to work from the **end of an array**.

```js
const tasks = [];

tasks.push("Study JavaScript");
tasks.push("Solve problems");

const finishedTask = tasks.pop();
```

Remember that both methods **modify the original array**.

```js
const arr = [1, 2, 3];

arr.pop();

console.log(arr); // [1, 2]
```

---

# 4. Queues Using `shift()` and `unshift()`

A queue usually follows:

**First In, First Out — FIFO**

Think of people waiting in a line.

The first person who enters the queue is the first person who leaves.

---

## `shift()`

`shift()` removes the **first element** from an array.

```js
const queue = ["Ali", "Sara", "Omar"];

const firstPerson = queue.shift();

console.log(firstPerson); // Ali
console.log(queue);
```

Output:

```text
["Sara", "Omar"]
```

---

## `unshift()`

`unshift()` adds one or more elements to the **beginning** of an array.

```js
const queue = ["Sara", "Omar"];

queue.unshift("Ali");

console.log(queue);
```

Output:

```text
["Ali", "Sara", "Omar"]
```

Like `push()`, `unshift()` returns the new array length.

```js
const numbers = [2, 3];

const length = numbers.unshift(1);

console.log(length); // 3
```

---

# 5. Building a Simple Queue

A common queue pattern is:

- add with `push()`
- remove with `shift()`

```js
const queue = [];

queue.push("Student 1");
queue.push("Student 2");
queue.push("Student 3");

console.log(queue);
```

Remove the first person:

```js
const nextStudent = queue.shift();

console.log(nextStudent); // Student 1
console.log(queue);
```

Result:

```text
["Student 2", "Student 3"]
```

This follows FIFO correctly.

---

## Queue Example

```js
const customers = [];

customers.push("Ahmed");
customers.push("Mona");
customers.push("Youssef");

while (customers.length > 0) {
  const currentCustomer = customers.shift();
  console.log(`Serving ${currentCustomer}`);
}
```

Possible output:

```text
Serving Ahmed
Serving Mona
Serving Youssef
```

---

# 6. `shift()` vs `unshift()`

| Method | What it does |
|---|---|
| `push()` | Add to end |
| `pop()` | Remove from end |
| `unshift()` | Add to beginning |
| `shift()` | Remove from beginning |

A good memory trick:

```text
push     -> add at end
pop      -> remove from end

unshift  -> add at beginning
shift    -> remove from beginning
```

---

# 7. Performance Tip

Operations at the end of an array are usually cheaper:

```js
push()
pop()
```

Operations at the beginning may require JavaScript to move/re-index many elements:

```js
shift()
unshift()
```

For small arrays, this usually does not matter.

For very large or performance-sensitive queues, a dedicated queue structure can be better.

---

# 8. Splicing with `splice()`

`splice()` is one of the most useful array methods.

It can:

- remove elements
- insert elements
- replace elements

Syntax:

```js
array.splice(start, deleteCount, item1, item2, ...);
```

Where:

- `start` = index where the operation begins
- `deleteCount` = how many elements to remove
- extra arguments = elements to insert

---

# 9. Removing Elements with `splice()`

Example:

```js
const fruits = ["apple", "banana", "orange", "mango"];

fruits.splice(1, 2);

console.log(fruits);
```

Output:

```text
["apple", "mango"]
```

Explanation:

```text
Index 1 = banana

Remove 2 elements:
banana
orange
```

---

## `splice()` Returns Removed Elements

```js
const fruits = ["apple", "banana", "orange"];

const removed = fruits.splice(1, 1);

console.log(removed); // ["banana"]
console.log(fruits);  // ["apple", "orange"]
```

Notice that the returned value is an **array**.

---

# 10. Inserting Elements with `splice()`

Set `deleteCount` to `0`.

```js
const fruits = ["apple", "orange"];

fruits.splice(1, 0, "banana");

console.log(fruits);
```

Output:

```text
["apple", "banana", "orange"]
```

Explanation:

```text
Start at index 1
Delete 0 elements
Insert "banana"
```

---

# 11. Replacing Elements with `splice()`

You can remove an element and insert another in the same operation.

```js
const languages = ["C++", "Java", "Python"];

languages.splice(1, 1, "JavaScript");

console.log(languages);
```

Output:

```text
["C++", "JavaScript", "Python"]
```

---

# 12. Insert Multiple Elements

```js
const numbers = [1, 4];

numbers.splice(1, 0, 2, 3);

console.log(numbers);
```

Output:

```text
[1, 2, 3, 4]
```

---

# 13. Remove Everything After an Index

```js
const numbers = [10, 20, 30, 40, 50];

numbers.splice(2);

console.log(numbers);
```

Output:

```text
[10, 20]
```

When `deleteCount` is omitted, JavaScript removes everything from the starting index to the end.
عندما لا اذكر عدد الارقام اللي المفروض امسحها معناها امسح الكل

---

# 14. Negative Index with `splice()`

Negative numbers count from the end of the array.

```js
const numbers = [10, 20, 30, 40];

numbers.splice(-1, 1);

console.log(numbers);
```

Output:

```text
[10, 20, 30]
```

Here:

```text
-1 = last element
```

---

# 15. `splice()` Changes the Original Array

This is very important.

```js
const original = [1, 2, 3];

original.splice(1, 1);

console.log(original);
```

Output:

```text
[1, 3]
```

`splice()` is a **mutating method**.

That means it changes the existing array.

---

# 16. `splice()` vs `slice()`

These two methods have similar names but behave very differently.

## `splice()`

Changes the original array.

```js
const numbers = [1, 2, 3, 4];

numbers.splice(1, 2);

console.log(numbers);
```

Output:

```text
[1, 4]
```

---

## `slice()`

Does **not** change the original array.

```js
const numbers = [1, 2, 3, 4];

const part = numbers.slice(1, 3);

console.log(part);
console.log(numbers);
```

Output:

```text
[2, 3]
[1, 2, 3, 4]
```

Remember:

```text
splice -> modifies
slice  -> copies
```

---

# 17. Useful Array Tricks

## Check Whether an Array Is Empty

```js
const tasks = [];

if (tasks.length === 0) {
  console.log("No tasks");
}
```

---

## Get the Last Element

```js
const numbers = [10, 20, 30];

console.log(numbers.at(-1));
```

Output:

```text
30
```

---

## Copy an Array

Using spread syntax:

```js
const original = [1, 2, 3];

const copy = [...original];
```

Now changing the copy does not change the original array structure.

```js
copy.push(4);

console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]
```

---

## Merge Arrays

```js
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];

console.log(combined);
```

Output:

```text
[1, 2, 3, 4]
```

---

## Add an Element Without Using `push()`

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

console.log(newNumbers);
```

This creates a new array instead of modifying the old one.

---

## Add an Element to the Beginning Without `unshift()`

```js
const numbers = [2, 3];

const newNumbers = [1, ...numbers];

console.log(newNumbers);
```

---

# 18. Mutating vs Non-Mutating Code

Some array methods change the original array.

Examples:

```text
push()
pop()
shift()
unshift()
splice()
```

These methods are called **mutating methods**.

Example:

```js
const numbers = [1, 2];

numbers.push(3);

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

Sometimes you may prefer to create a new array.

```js
const numbers = [1, 2];

const newNumbers = [...numbers, 3];
```

This can make code easier to reason about in larger applications.

---

# 19. Common Mistakes

## Mistake 1: Thinking `pop()` removes the first item

Wrong idea:

```text
pop -> first item
```

Correct:

```text
pop -> last item
```

---

## Mistake 2: Forgetting that `shift()` changes the array

```js
const users = ["Ali", "Sara"];

const first = users.shift();

console.log(first); // Ali
console.log(users); // ["Sara"]
```

---

## Mistake 3: Confusing `slice()` with `splice()`

Remember:

```text
slice  = copy
splice = change
```

---

## Mistake 4: Ignoring Return Values

Many array methods return useful information.

```js
const numbers = [1, 2, 3];

const removed = numbers.pop();

console.log(removed);
```

You can use the removed value instead of calling the method and losing it.

---

# 20. Practical Example: Browser History Stack

```js
const history = [];

history.push("google.com");
history.push("youtube.com");
history.push("github.com");

console.log(history);
```

The user presses Back:

```js
const currentPage = history.pop();

console.log(`Leaving ${currentPage}`);
console.log(history);
```

Output:

```text
Leaving github.com
["google.com", "youtube.com"]
```

---

# 21. Practical Example: Customer Queue

```js
const queue = [];

queue.push("Customer 1");
queue.push("Customer 2");
queue.push("Customer 3");

const nextCustomer = queue.shift();

console.log(`Serving ${nextCustomer}`);
```

Output:

```text
Serving Customer 1
```

---

# 22. Practical Example: Student List with `splice()`

```js
const students = [
  "Ahmed",
  "Sara",
  "Omar",
  "Mona"
];
```

Remove Omar:

```js
students.splice(2, 1);

console.log(students);
```

Output:

```text
["Ahmed", "Sara", "Mona"]
```

Insert Youssef at index `1`:

```js
students.splice(1, 0, "Youssef");

console.log(students);
```

Output:

```text
["Ahmed", "Youssef", "Sara", "Mona"]
```

---

# 23. Best Practices

### 1. Use descriptive variable names

Good:

```js
const studentQueue = [];
```

Less clear:

```js
const x = [];
```

---

### 2. Prefer `const` for arrays

You can still modify the contents of a `const` array.

```js
const numbers = [];

numbers.push(10);
```

This is valid.

What you cannot do is reassign the variable:

```js
const numbers = [];

numbers = [1, 2, 3]; // Error
```

---

### 3. Know Whether a Method Mutates the Array

Before using an array method, ask:

> Does this method change my original array?

For example:

```js
splice()
```

changes the array.

```js
slice()
```

does not.

---

### 4. Store Return Values When Useful

Instead of:

```js
queue.shift();
```

you may want:

```js
const nextPerson = queue.shift();
```

Now you can use the removed item.

---

### 5. Use the Right Structure

For a stack:

```js
push()
pop()
```

For a simple queue:

```js
push()
shift()
```

---

# 24. Quick Reference Table

| Method | Operation | Position | Mutates Array? |
|---|---|---|---|
| `push()` | Add | End | Yes |
| `pop()` | Remove | End | Yes |
| `unshift()` | Add | Beginning | Yes |
| `shift()` | Remove | Beginning | Yes |
| `splice()` | Add / Remove / Replace | Any position | Yes |
| `slice()` | Copy part of array | Any position | No |

---

# 25. Small Practice Exercises

## Exercise 1

Create an empty array called `books`.

Add:

```text
Clean Code
JavaScript Guide
Algorithms
```

using `push()`.

Then remove the last book using `pop()`.

---

## Exercise 2

Create:

```js
const queue = ["Ahmed", "Sara", "Omar"];
```

Remove the first student from the queue and print their name.

---

## Exercise 3

Given:

```js
const languages = ["C++", "Java", "Python"];
```

Use `splice()` to replace `"Java"` with `"JavaScript"`.

Expected result:

```js
["C++", "JavaScript", "Python"]
```

---

## Exercise 4

Given:

```js
const numbers = [1, 2, 5];
```

Use `splice()` to insert `3` and `4`.

Expected result:

```js
[1, 2, 3, 4, 5]
```

---

## Exercise 5

Create a simple customer queue.

Add three customers.

Then serve them one by one using:

```js
shift()
```

---

# Final Memory Trick

```text
STACK

push -> add
pop  -> remove

Last In, First Out
LIFO
```

```text
QUEUE

push  -> add to end
shift -> remove from beginning

First In, First Out
FIFO
```

```text
SPLICE

splice(start, deleteCount, ...newItems)

Can:
- remove
- insert
- replace
```

The most important thing is not memorizing every method immediately.

Instead, understand:

> Where is the element being added or removed, and does the method change the original array?
