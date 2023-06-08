import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css"

function ArtworkDetails({description}){
    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);


    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const artData = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,artist_display,date_display,main_reference_number,thumbnail,api_model,is_boosted,api_link,title,timestamp,image_id,description,place_of_origin,artwork_type_title,category_titles,department_title,material_titles`);
                setArtwork(artData.data.data);
                console.log('newData', artwork)
            } catch (error) {
                console.log(error);
            }
        };
        fetchArtwork();
    }, [id]);

    console.log('hello', description)

    if (!artwork) {
        return <p>Loading artwork details ...</p>;
    }

    return (
        <div id='detailContainer'>
            <h2>{artwork.title}</h2>
            <p>Artist: {artwork.artist_title}</p>
            <p>Year: {artwork.date_display}</p>
            <img id='image' src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
            <p>Description: {artwork.thumbnail.alt_text}</p>
            <p>Origin: {artwork.place_of_origin}</p> 
            <p>Mediums: {artwork.material_titles}</p>
            <p>Artwork Type: {artwork.artwork_type_title}</p>
            <p>Catagories: {artwork.category_titles}</p>
        </div>
    );
};

export default ArtworkDetails;