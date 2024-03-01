import axios from 'axios';

const titleURL = "https://openlibrary.org/search.json?title="
const authorURL = "https://openlibrary.org/search.json?author="
const subjectURL = "https://openlibrary.org/search.json?subject="
const imageURL = "https://covers.openlibrary.org/b/olid/"

/* Functions for fetching data from the Open Library API */

/* Fetches data from the Open Library API based on the title of a book 
params - title: string
returns - data: object
*/
async function getByTitle(title: string) {
    const data = await axios.get(titleURL + title);
    return data;
}

/* Fetches data from the Open Library API based on the author of a book
params - author: string
returns - data: object
*/
async function getByAuthor(author: string) {
    const data = await axios.get(authorURL + author);
    return data
}

/* Fetches data from the Open Library API based on the subject of a book
params - subject: string
returns - data: object
*/
async function getBySubject(subject: string) {
    const data = await axios.get(subjectURL + subject);
    return data;
}

/* Fetches the image of a book from the Open Library API
params - id: string
returns - url: string
*/
async function fetchImage(id: string) {
    const url = await axios.get(imageURL + id + "-M.jpg");
    return url.request.responseURL;
}


export { getByTitle, getByAuthor, getBySubject, fetchImage };