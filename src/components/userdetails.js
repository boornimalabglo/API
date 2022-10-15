import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../components/style.css"
import pin from "../icon/pin.svg"

const Userdetails = () => {

  const [apidata, setApidata] = useState({})
  const navigate = useNavigate()

  const fetchData = () => {
    axios.get("https://reqres.in/api/unknown?page=1")
      .then((response) => setApidata(response.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleClk = (id) => {
    navigate(`/${id}`)
  }
  
  const handlenxt = () => {
    axios.get("https://reqres.in/api/unknown?page=2")
      .then((response) => setApidata(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <button onClick={handlenxt}><h2>NextPage</h2></button>
    
        {
          apidata.data?.map((record) => {
            return (
              <div className="column"><br /><br />
                <div className="card">
                  <h3 onClick={() => handleClk(record.id)}><img src={pin} /></h3>
                  <h3>Id:{record.id}</h3>
                  <h3>Name:{record.name}</h3>
                  <h3>Year:{record.year}</h3>
                  <h3>Color:{record.color}</h3>
                  <h3>Pantone_value:{record.pantone_value}</h3>
                </div>
              </div>
            )
          })
        }

    

    </>
  )
}

export default Userdetails;