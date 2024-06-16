---
title: 'Solving Fizzbuzz with CSS using an Ordered List'
description: ''
date: 2021-02-03
---

In the first part of this article, we [tackled the Fizzbuzz problem using CSS Counters](./2021-02-03-fizzbuzz-part-1.md). Now, in part 2, we will solve it using HTML ordered lists and CSS.

## What is the Fizzbuzz Problem?

> Write a program that outputs the numbers from 1 to 100. For numbers that are multiples of 3, display "Fizz" instead of the number. For multiples of 5, display "Buzz." For numbers that are multiples of both 3 and 5, display "FizzBuzz."

## Using Ordered Lists

Lets update the pug mixing from part 1 and use an ordered list.

```js
mixin fizzbuzz(min, max)
ol
  - for(let i = min; i <= max; i++)
    li
		
+fizzbuzz(1, 100)
```

Here, we use an [ordered list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) which displays numbered elements. By rendering 100 list items within this ordered list, we automatically generate the sequential numbers. While this approach lacks semantic meaning, it demonstrates how we can achieve this conceptually.

Within this ordered list, we adjust the [list-style-position](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position) of each list item to `inside`. This aligns the content inside the list item, ensuring proper formatting. Additionally, we remove the numbering by setting the list style to none for items that require plain text.

```css
li {
    list-style-position: inside;
}

li:nth-child(3n),
li:nth-child(5n) {
    list-style-type: none;
}

li:nth-child(3n)::before {
    content: 'Fizz';
}

li:nth-child(5n)::after {
    content: ' Buzz';
}
```

Here is the final codepen solution: 

{% postToCodepen "Final Solution", "https://codepen.io/garyb1/pen/LYbpRbG", css, html %}
