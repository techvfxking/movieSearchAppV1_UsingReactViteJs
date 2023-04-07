import { React } from 'react'
import CardContainer from './components/CardContainer'
import MovieDetails from './components/MovieDetails';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<CardContainer/>}/>
      <Route path="/movieDetails/:id" element = {<MovieDetails/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
