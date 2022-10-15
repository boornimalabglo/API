import React from "react";
import { useContext } from "react";
import { data } from "./student1";
import Student4 from "./student4";
const Student3=()=>{
    const name = useContext(data)
return(
    <>
    <Student4 />
    {/* <p>{nam}</p> */}
    </>
)
}
export default Student3