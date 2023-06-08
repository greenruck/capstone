import react, {useState, useEffect} from 'react';
import axios from 'axios';

const ImageSearch= (object) => {
    const [image, setImage] = useState;

    useEffect(()=> {
    async function fetchImage(){
        let imageResult = await axios.get(`https://www.artic.edu/iiif/2/${object.id}/full/843,/0/default.jpg`);
        setImage(imageResult)
    }
    fetchImage();
},
  [object]  )

  return (
    <img src={image} alt={object.title}>{image}</img>
  )
}
export default ImageSearch;