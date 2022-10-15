import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Showdetails = () => {

  const [apidata, setApidata] = useState({})
  const { id } = useParams();

  const fetchData = () => {
    axios.get(`https://reqres.in/api/unknown/${id}`)
      .then((response) => setApidata(response.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <center>
        <h2>Id:{apidata.data?.id}</h2>
        <h2>Name:{apidata.data?.name}</h2>
        <h2>Year:{apidata.data?.year}</h2>
        <h2>Color:{apidata.data?.color}</h2>
        <h2>Pantone_value:{apidata.data?.pantone_value}</h2>
        <Link to={-1}>Back</Link>
      </center>
    </>
  )
}
export default Showdetails;