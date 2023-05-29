import styled from 'styled-components';
import { PlaygroundContext } from '../Contexts';
import { useContext,useEffect } from 'react';
import tomioka from "../img/tomioka.gif"

export default function Result(){

    const {infoList} = useContext(PlaygroundContext)

    useEffect(() => {
    },[infoList]);

    return(<ResultContainer>
        <FormO>
            {infoList.length === 0 ?(<div>
                <Image src={tomioka} alt='tomioka' height={800} ></Image>
            </div>) :(
            <div>
                <Title>Your results</Title>
                
                <Info><Focus>Name</Focus>: {infoList.name}</Info>
                <Info><Focus>Cep</Focus>: {infoList.adress.cep} </Info>
                <Info><Focus>Complement</Focus>: {infoList.adress.complement}</Info>
                <Info><Focus>DDD</Focus>: {infoList.adress.ddd}</Info>
                <Info><Focus>GIA</Focus>: {infoList.adress.gia}</Info>
                <Info><Focus>UF</Focus>: {infoList.adress.uf}</Info>
                <Info><Focus>Public Place</Focus>: {infoList.adress.publicPlace}</Info>
                <Info><Focus>IBGE</Focus>: {infoList.adress.ibge}</Info>
                <Info><Focus>Locality</Focus>: {infoList.adress.locality}</Info>
                <Info><Focus>Neighborhood</Focus>: {infoList.adress.neighborhood}</Info>
                <Info><Focus>Siafi</Focus>: {infoList.adress.siafi}</Info>
                <Info><Focus>Per Capita</Focus>: R$ {infoList.perCapita}</Info>
            </div>

            )}
            
        </FormO>
    </ResultContainer>)
}

const ResultContainer = styled.div`
    background: #2A9EB8;
    border-radius: 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 30%; 
    height: 95%;
    margin-top: 15px;
    margin-bottom: 15px;
}
`
const FormO = styled.form`
    background: #F3F7F8;
    width: 93%; 
    height: 93%;
    margin: 20px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`

const Image = styled.img`
    border-radius: 20px;
    margin:5px;
`

const Title = styled.span`
    height:3%;
    width:100%;
    background:#8dc0bc;
    font-size: 30px;
    border-radius:20px;
    margin: 10px;
    text-align: center;
`
const Info = styled.p`
    width: 100%;
    height: 2%;
    padding: 11px;
    background: #edefe7;
    border-radius:20px;
    font-size: 20px;

`
const Focus = styled.span`
    font-weight: bold;
`
