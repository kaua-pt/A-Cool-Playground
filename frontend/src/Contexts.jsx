import React, { createContext, useState } from 'react';
import axios from "axios";
import APIURL from "../src/utils/consts";

export const PlaygroundContext = createContext({});

export const PlaygroundProvider = ({children}) =>{
    const [infoList,setInfoList] = useState([]);

    const [family,setFamily] = useState({
        cep:"",
        income:0,
        dependents:0
    });

    const getInfo = (info,e) =>{
        e.preventDefault();

        console.log(info);

        axios.post(`${APIURL}`,family)
        .then((answer)=>{ 
        setInfoList(answer.data);})
        .catch((e)=>{console.log(e)});
    }

    return( 
        <PlaygroundContext.Provider value={{getInfo,infoList,setInfoList,family,setFamily}}>
            {children}
        </PlaygroundContext.Provider>
        )
}