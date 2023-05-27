import fetch from 'node-fetch';
import HttpError from "http-errors";
import Utils from '../utils/consts';

// function that fetches the cep
const getAdress:any = async (cep:string) => {

    const finalUrl:string = `${Utils.APIURL}${cep}/json/`;

    try{
        const returned = await fetch(finalUrl);
        const product = await returned.json();

        if(product.erro === true)
            throw new HttpError.NotFound();
        return product;

    }catch(err){
        return Utils.NULLADRESS;
    }
}

export default getAdress;