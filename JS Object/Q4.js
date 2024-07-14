//Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books.

let library = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        readingStatus: true  // true means book has been read
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        readingStatus: false  // false means book has not been read
    },
    {
        title: '1984',
        author: 'George Orwell',
        readingStatus: true
    }
];

function displayReadingStatus(books) {
    books.forEach(book => {
        console.log(`Book title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Reading Status: ${book.readingStatus ? 'Already read' : 'Not yet read'}`);
        console.log('-----------------------------');
    });
}

displayReadingStatus(library);

