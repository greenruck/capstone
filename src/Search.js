import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetSearchForm from './MetSearch';
import Grid from '@mui/material/Grid';
import CardCreator from './Card';
import "./Search.css";


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    function search(searchTerm){
        setSearchTerm(searchTerm);
    };
    

    useEffect(()=>{
        async function fetchArtwork(){
            let termResult = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_title,artist_display,date_display,main_reference_number,thumbnail,api_model,is_boosted,api_link,title,timestamp,image_id,description`);
            console.log('full data', termResult);
            setSearchResults(termResult.data.data)

        }
        fetchArtwork();
    }, [searchTerm])


    
    

    return (
        <div>
          <h1>The Art Database</h1>
          <div>
            <div>
                <h2 id='searcher'>Search the Collection: 
                    <MetSearchForm search={search} 
                /> </h2>
            </div>
            <br></br>
            <div>
            
            {searchResults ?  
             <Grid
             container
             direction="row"
             justifyContent="space-evenly"
             alignItems="stretch"
             >
                {searchResults.map(object => 

                    <CardCreator    
                        image_id={object.image_id} 
                        object={object} 
                        title={object.title}
                        description={object.description}
                        id={object.id} />
                )
                }
            </Grid>
            
            : <i>(loading)</i>}
           
            </div>
            
          </div>
        </div>
    );
  }
  
  export default Search;