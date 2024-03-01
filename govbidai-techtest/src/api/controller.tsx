import * as Route from '@/api/routes'

/* Controller for the application */
/* This file contains the functions that are used to fetch data from the API */

export const getBooksByAuthor = async (author: string) => {
    const data = await Route.getByAuthor(author);
    return data;
}

export const getBooksByTitle = async (title: string) => {
    const data = await Route.getByTitle(title);
    return data;
}

export const getBooksBySubject = async (subject: string) => {
    const data = await Route.getBySubject(subject);
    return data;
}

export const fetchImage = async (id: string) => {
    const data = await Route.fetchImage(id);
    return data;
}