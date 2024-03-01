'use client'
import React, { useEffect } from "react";

import SearchBar from "@/components/SearchBar";
import { getBooksBySubject, fetchImage } from "@/api/controller";
import DataGrid from "@/components/DataGrid";


function GenrePage()  {
    const [books, setBooks] = React.useState([]);

    async function getBooks(genre: string){
        const data = await getBooksBySubject(genre);
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

export default GenrePage;