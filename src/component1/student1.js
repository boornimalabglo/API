import React from "react";
import { createContext } from "react";
import Student2 from "./student2";
// import Student3 from "./student3";
import Student5 from "./student5";

export const data = createContext()
const Student1=()=>{
let name = "janani"
return(
    <>
    <data.Provider value={name}>
        <Student2/>
        <Student5/>
    </data.Provider>
    
    </>
)
}
export default Student1