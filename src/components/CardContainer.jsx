import { React,useState, useEffect } from 'react';
import Card from './Card';
import Navbar from './Navbar'

const CardContainer = () => {
    const [jsonDataArr, setjsonDataArr] = useState([]);

  const fetchApiData = async (url) =>{
    let blankArr = [{
      Poster: "No Poster",
      Title: "No Title",
      imdbID: "1234",
    }]
    let data = await fetch(url);
    let json = await data.json();
    setjsonDataArr(json.Response==='False' ? blankArr: json.Search);
  }
  useEffect(() => {
    fetchApiData(`https://www.omdbapi.com/?s=avatar&apikey=11531d44`)
  }, []);

  const inputDataValues = async (inputData)=>{
    console.log(inputData);
    await fetchApiData(`https://www.omdbapi.com/?s=${inputData}&apikey=11531d44`)
  }
  return (
    <>
    <Navbar inputDataFunc={inputDataValues}/>
    <div className="cardContainer">
      {jsonDataArr.map((element) => {
        console.log(element);
        return (
          <Card poster={element.Poster} movieTitle={element.Title} key={element.imdbID} path={`/movieDetails/${element.imdbID}`}/>
        );
      })}
    </div>   
    </>
  )
}

export default CardContainer;