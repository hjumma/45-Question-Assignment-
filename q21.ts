// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book: { title: string; author: string; year: number } = {
  title: "The Da Vinci Code",
  author: "Dan Brown",
  year:2003
};

console.log(`Book Info: ${book.title}, by ${book.author}, publish in ${book.year}`);