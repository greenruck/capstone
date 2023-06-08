import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import ArtworkDetails from './ArtworkDetail';
import Timeline from './Timeline';
import Search from './Search';
import Impressionism from './movements/Impressionism';
import Post_Impressionism from './movements/PostImpressionism';
import Cubism from './movements/Cubism';
import Expressionism from './movements/Expressionism';
import Surrealism from './movements/Surrealism';
import Pop_Art from './movements/PopArt';
import Minimalism from './movements/Minimalism';
import Contemporary from './movements/Contemporary';
import Navbar from './Navbar';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Timeline />}/>
            <Route path='/movement/Impressionism' element={<Impressionism />}/>
            <Route path='/movement/Post-Impressionism' element={<Post_Impressionism />}/>
            <Route path='/movement/Cubism' element={<Cubism />}/>
            <Route path='/movement/Expressionism' element={<Expressionism />}/>
            <Route path='/movement/Surrealism' element={<Surrealism />}/>
            <Route path='/movement/Pop-Art' element={<Pop_Art />}/>
            <Route path='/movement/Minimalism' element={<Minimalism />}/>
            <Route path='/movement/Contemporary' element={<Contemporary />}/>
          <Route path='/search' element={<Search />}/>
            <Route path="/data/:id" element={<ArtworkDetails />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;