import styled from 'styled-components';

export default function Form(){
    return(<>
    <FormContainer>
        <FormI>
            <span>Insira seus dados:</span>
            <input name ="name" id ="name" type='text' ></input>
            <input name ="cep" id ="cep" type='number' required></input>
            <input name ="income" id ="income" type='number' required></input>
            <input name ="persons" id ="persons" type='number' required></input>
            <button type='submit'></button>
        </FormI>
    </FormContainer>

    </>)
}

const FormContainer = styled.div`
    background: #8496A2;
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

