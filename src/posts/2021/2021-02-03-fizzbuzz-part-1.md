---
title: 'Solving Fizzbuzz with CSS Counters and Pug'
description: ''
date: 2021-02-03
---

Back in 2017, during a frontend interview, I was asked to solve a coding challenge on a whiteboard. The task was the classic FizzBuzz problem. Instinctively, I reached for JavaScript to write my solution. Recently, however, I discovered CSS counters, which sparked an intriguing question in my mind: Can we solve FizzBuzz using only CSS?

In this article, we will solve the FizzBuzz problem using CSS Counters. In [part 2](./2021-02-03-fizzbuzz-part-2.md) we will explore solving it with an HTML ordered list.

## What is the Fizzbuzz Problem?

> Write a program that outputs the numbers from 1 to 100. For numbers that are multiples of 3, display "Fizz" instead of the number. For multiples of 5, display "Buzz." For numbers that are multiples of both 3 and 5, display "FizzBuzz."

## Using CSS Counters

Loop from 1 to 100 and create an HTML element for each number. In this example, we'll create a div for each element to hold the counter.

```js
const range = 100;
for(let i = 1; i <= range; i++)
    .fizz
```

Here, we're using a for loop to iterate through the numbers. Alternatively, we could use a different iteration method. 

```js
Array(100).forEach((_, i) => { ... }).
```

To begin, we need to initiate a counter-reset to establish our CSS counter, assigning it a name and initializing its value. By default, the initial value is 0.

```css
body {
    counter-reset: fizz;
    /* counter initialized with a value of 0 */
}
```

Once the counter is set up, we can use counter-increment to increment its value whenever an element with the class .fizz appears.

```css
.fizz {
    counter-increment: fizz;
}
```

Next, we configure the content for our divs using CSS ::before and ::after pseudo-elements.

* If a div's counter value is a multiple of 3, its ::before content will be set to 'Fizz '.
* If a div's counter value is a multiple of 5, its ::after content will be set to 'Buzz'.
* If a div's counter value is a multiple of both 3 and 5, the ::before and ::after pseudo-elements will combine to display 'Fizz Buzz'.

```css
.fizz:nth-child(3n)::before {
  content: 'fizz ';
}

.fizz:nth-child(5n)::after {
  content: 'buzz';  
}
```

Now, for the remaining divs that are not multiples of 3 or 5, we set the ::before content of the div to display the current counter value using the counter function.

```css
.fizz::before {
	content: counter(fizz);
}

.fizz:nth-child(3n)::before {
  content: 'fizz ';
}

.fizz:nth-child(5n)::after {
  content: 'buzz';  
}
```

This gives us the following: 

![An orderded list of fizzbuzz with every odd item with fizz, every even item with buzz, every multiple of five showing number and buzz](https://cdn.hashnode.com/res/hashnode/image/upload/v1612354739834/hpFgTA0nq.png)

Notice how even the divs that are multiples of 5 but not multiples of 3 still display the counter number. To address this, we can utilize the :not pseudo-class. When a div is not a multiple of 5, we set its ::before content to display the counter number.


```css
.fizz:not(:nth-child(5n))::before {
	content: counter(fizz);
}
.fizz:nth-child(3n)::before {
  content: 'fizz ';
}

.fizz:nth-child(5n)::after {
  content: 'buzz';  
}
```

Here is a working example in codepen:

{% postToCodepen "Step 1, Printing", "https://codepen.io/garyb1/pen/zYovrVB", css, html %}

### Refactoring our Pug

Sometimes, an interviewer may request modifications to your code to accommodate a different range instead of the default 1 to 100. To handle this, we can create a Pug mixin that accepts minimum and maximum values as parameters.

```js
mixin fizzbuzz(min, max)
	- for(let i = min; i <= max; i++)
		.fizz
		
+fizzbuzz(1, 100)
```

Here is a working codepen example:

{% postToCodepen "Final Solution", "https://codepen.io/garyb1/pen/RwoWRNz", css, html %}

### Browser Support

At the time of writing, CSS Counters are supported in most major browsers. See [Can I Use](https://caniuse.com/css-counters) for more information.

Check out part 2 of this article where I solve Fizzbuzz using ordered lists.