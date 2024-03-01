'use client'
import React, { useEffect } from "react";

import SearchBar from "@/components/SearchBar";
import { getBooksByAuthor, fetchImage } from "@/api/controller";
import DataGrid from "@/components/DataGrid";

/* Page for displaying books by a specific author */
function AuthorPage()  {
    const [books, setBooks] = React.useState([]);

    /* Function to fetch books by a specific author */
    async function getBooks(author: string){
        const data = await getBooksByAuthor(author);
        setBooks(data.data.docs.slice(0, 50));
    }

    useEffect(() => {
        setBooks([]);
    }, []);
    
    return (
        <div>
            <SearchBar handleSearch={getBooks}></SearchBar>
            <br></br>
            <DataGrid books = {books}></DataGrid>
        </div>
    );
}

export default AuthorPage;