import styled from 'styled-components';
import money from "../img/money2.jpg";

export default function SideImage(){
    return(
        <Wrapper>
            <img src={money} alt='money'></img>
        </Wrapper>
    );
}

const Wrapper =styled.div`
    width: 30%; 
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2A9EB8;
    border-radius: 20px;
    margin-top: 15px;
    margin-bottom: 15px;

    img {
        width: 93%;
        height: 93%;
        border-radius: 20px;
    }
`