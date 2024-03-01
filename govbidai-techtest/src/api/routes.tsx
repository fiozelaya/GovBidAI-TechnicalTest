import axios from 'axios';

const titleURL = "https://openlibrary.org/search.json?title="
const authorURL = "https://openlibrary.org/search.json?author="
const subjectURL = "https://openlibrary.org/search.json?subject="
const imageURL = "https://covers.openlibrary.org/b/olid/"

async function getByTitle(title: string) {
    let result: [] = [];
    return await fetch(titleURL + title)
        .then((response) => response.json())
        .then((data) => {result = data; console.log(data); return result;})
        .catch(error => console.log('Error fetching and parsing data', error));
}

async function getByAuthor(author: string) {
    const data = await axios.get(authorURL + author);
    console.log(data);
    return data
}

async function getBySubject(subject: string) {
    return await fetch(subjectURL + subject)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log('Error fetching and parsing data', error));
}

async function fetchImage(id: string) {
    const url = await axios.get(imageURL + id + "-S.jpg");
    return url.request.responseURL;
}


export { getByTitle, getByAuthor, getBySubject, fetchImage };