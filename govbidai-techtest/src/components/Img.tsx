import React, { useEffect } from 'react';
import { fetchImage } from '@/api/routes';

export default function Img({ coverEditionKey }) {
    const [image, setImage] = React.useState('');
    console.log(coverEditionKey);

    async function getImage(pCoverEditionKey: string){
        const url = await fetchImage(pCoverEditionKey);
        console.log(url);
        // const width = 128;
        // const height = 192;
        // const cols = 5;
        // const rows = 5;
        // setImage(`${url}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`);
        setImage(url);
    }

    useEffect(() => {
        getImage(coverEditionKey);
    }, [coverEditionKey]);

  return <img src={image} height="300" width="200" alt="lazy"/>;
}