'use client'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import { useEffect, useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Img from './Img';

export default function DataGrid({books}) {
    const [data, setData] = useState(books);

    if (books === undefined) {
        return <div>Error</div>
    }

    useEffect(() => {
        setData(books);
    }, [books]);

  return (
    <div>
    <ImageList cols={4} sx={{ width: "100%", height: "100%" }}>
      {data.map((item) => (
        <ImageListItem key={item.key} sx={{width: 300}}>
          <Img coverEditionKey={item.cover_edition_key}></Img>
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author_name}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}
