import styled from 'styled-components';
import SideImage from '../Components/SideImage';
import Form from '../Components/Form';
import Result from '../Components/Result';

export default function Home(){
    return(
        <Container>
            <Form></Form>
            <Result></Result>
            <SideImage></SideImage>
        </Container>
    )
}

const Container = styled.div`
    width: 98vw;
    height: 98vh;
    display: flex;
    justify-content: space-evenly;
    background: #F3F7F8;
`