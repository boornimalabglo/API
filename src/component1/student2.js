import React from "react";
import { useContext } from "react";
import { data } from "./student1";
import Student5 from "./student5";

const Student2=()=>{
    const name = useContext(data)
    return(
        <>
       2{name}
       <Student5/>
        </>
    )

}
export default Student2