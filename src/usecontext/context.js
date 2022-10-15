import React from "react";
import { useContext } from "react";
import { Context } from "../App";

const Context1 = () => {
    const name = useContext(Context)
    return(
        <>
        <p>{name}</p>
        </>
    )
}
export default Context1;