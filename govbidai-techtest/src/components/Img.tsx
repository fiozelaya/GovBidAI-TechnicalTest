import React, { useEffect } from 'react';
import { fetchImage } from '@/api/routes';

export default function Img({ coverEditionKey }) {
    const [image, setImage] = React.useState('');

    async function getImage(pCoverEditionKey: string){
        let url: string = '';
        if (pCoverEditionKey === undefined) {
            url = 'https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
        }
        else{
            url = await fetchImage(pCoverEditionKey);
        }
        setImage(url);
    }

    useEffect(() => {
        getImage(coverEditionKey);
    }, [coverEditionKey]);

  return <img src={image} height="300" width="200" alt="lazy"/>;
}