import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  let url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=11531d44`;

  const [jsonDataArr, setjsonDataArr] = useState({
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
  });
  

  const fetchApiData = async (url) => {
    let data = await fetch(url);
    let json = await data.json();
    const { Title, Year, Rated, Released, Runtime, Genre, Director } = json;
    const objectValue = { Title, Year, Rated, Released, Runtime, Genre, Director };
    setjsonDataArr(json.Response ? {...objectValue} : {});
  };

  useEffect(() => {
    fetchApiData(url)
  }, []);

  return <div>{jsonDataArr.Title}</div>;
};

export default MovieDetails;
