import axios from 'axios';

const titleURL = "https://openlibrary.org/search.json?title="
const authorURL = "https://openlibrary.org/search.json?author="
const subjectURL = "https://openlibrary.org/search.json?subject="
const imageURL = "https://covers.openlibrary.org/b/olid/"

async function getByTitle(title: string) {
    const data = await axios.get(titleURL + title);
    return data;
}

async function getByAuthor(author: string) {
    const data = await axios.get(authorURL + author);
    return data
}

async function getBySubject(subject: string) {
    console.log(subjectURL + subject)
    const data = await axios.get(subjectURL + subject);
    return data;
}

async function fetchImage(id: string) {
    const url = await axios.get(imageURL + id + "-M.jpg");
    return url.request.responseURL;
}


export { getByTitle, getByAuthor, getBySubject, fetchImage };