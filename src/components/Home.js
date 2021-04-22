import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const Home = () => {
    return (
        <Container>
            <TodoSection id="todo">
                <Todo />
            </TodoSection>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width:1200px;
    margin:0 auto;
    padding:3rem 0;
    display:grid;
    grid-template-rows:repeat(1,minmax(0,1fr));
    grid-template-columns:repeat(1,minmax(0,1fr));
    align-items:center;
    justify-content:center;
`
const TodoSection = styled.div`
    padding:3rem 2rem;
    @media screen and (max-width:768px){
        padding:3rem 0;
    }
`
