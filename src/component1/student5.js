import React from "react";
import { useContext } from "react";
import { data } from "./student1";

const Student5=()=>{
    const datas = useContext(data)
return(
    <>
   5 {datas}
    </>
)
}
export default Student5