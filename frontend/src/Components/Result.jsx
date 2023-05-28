import styled from 'styled-components';

export default function Result(){
    return(<ResultContainer>
        <FormO>
            <ul>
                <li>Name</li>
                <li>Cep</li>
                <li>Complement</li>
                <li>ddd</li>
                <li>gia</li>
                <li>UF</li>
                <li>public place</li>
                <li>ibge</li>
                <li>locality</li>
                <li> neighborhood</li>
                <li>siafi</li>
                <li>Renda</li>
            </ul>
        </FormO>
    </ResultContainer>)
}

const ResultContainer = styled.div`
    background: #8496A2;
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
`

const ResultDiv = styled.div`

`