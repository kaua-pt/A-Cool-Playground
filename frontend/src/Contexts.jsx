import React, { createContext, useState } from 'react';
import axios from "axios";
import APIURL from "../src/utils/consts";

export const PlaygroundContext = createContext({});

export const PlaygroundProvider = ({children}) =>{
    const [infoList,setInfoList] = useState([]);

    const getInfo = (info,e) =>{
        e.preventDefault();

        axios.get(`${APIURL}`, {headers:{	
        "name":info.name,
        "cep":info.cep,
        "income":info.income,
        "dependents":info.dependents}})
        .then((answer)=>{ setInfoList(answer);})
        .catch((e)=>{console.log(e)});
    }

    return( 
        <PlaygroundContext.Provider value={{getInfo,infoList,setInfoList}}>
            {children}
        </PlaygroundContext.Provider>
        )
}