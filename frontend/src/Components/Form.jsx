import styled from 'styled-components';
import { useContext} from 'react';
import { PlaygroundContext } from '../Contexts';

export default function Form(){
    const { family,setFamily,getInfo } = useContext(PlaygroundContext);

    function onSubmit(e){
        getInfo(family,e);
    }
    return(
    <FormContainer>
        <FormI onSubmit={onSubmit}>
            <Title>Enter your data</Title>
            <Input name ="name" id ="name" type='text' placeholder='Your Name' onChange = {(e) => setFamily({...family, name: e.target.value})} ></Input>
            <Input name ="cep" id ="cep" type='number' placeholder='Your CEP' onChange = {(e) => setFamily({...family, cep: e.target.value})} required></Input>
            <Input name ="income" id ="income" type='number' placeholder='Your Income' onChange = {(e) => setFamily({...family, income: e.target.value})} required></Input>
            <Input name ="dependents" id ="dependents" type='number' placeholder='Number of dependents' onChange = {(e) => setFamily({...family, dependents: e.target.value})} required></Input>
            <Button type='submit'>Submit</Button>
        </FormI>
    </FormContainer>

    )
}

const FormContainer = styled.div`
    background: #2A9EB8;
    border-radius: 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 30%; 
    height: 95%;
    margin-top: 15px;
    margin-bottom: 15px;
    
`
const FormI = styled.form`
    background: #F3F7F8;
    width: 93%; 
    height: 93%;
    margin: 20px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    background: #edefe7;
    width: 90%;
    height: 3%;
    border-radius: 20px;
    margin: 10px;
    border:none;
    outline:none;
    font-size: 20px;
    padding: 20px;

`

const Button = styled.button`
    width: 50%;
    background-color: #D4D7C4;
    font-size:14px;
    font-weight:700;
    text-transform: uppercase;
    border:none;
    padding:10px;
    cursor: pointer;
    display:inline-block;
    text-decoration: none;
    border-radius:20px;
    margin: 10px;
`

const Title = styled.span`
    height:3%;
    font-weight: bold;
    width:90%;
    background-color:#8dc0bc;
    font-size: 30px;
    border-radius:20px;
    margin: 10px;
    text-align: center;
    padding: 10px;
    margin-top: 130px;
    margin-bottom: 20px;
`
