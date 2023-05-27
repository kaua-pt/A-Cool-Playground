const PORT:number = 8080;
const APIURL:string = 'https://viacep.com.br/ws/'
const NULLADRESS  ={
    cep: "UNKNOWN",
    logradouro: "UNKNOWN",
    complemento: "UNKNOWN",
    bairro: "UNKNOWN",
    localidade: "UNKNOWN",
    uf: "UNKNOWN",
    ibge: "UNKNOWN",
    gia: "UNKNOWN",
    ddd: "UNKNOWN",
    siafi: "UNKNOWN",
}

export default {PORT,APIURL,NULLADRESS};