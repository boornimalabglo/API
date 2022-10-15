import React from "react";
import Student5 from "./student5";
import { useContext } from "react";
import { data } from "./student1";

const Student4=()=>{
    const record = useContext(data)
return(
    <>
    4{record}
    
    </>
)
}
export default Student4