import React from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'
import AddToDoForm from './AddToDoForm';

const Todo = () => {
    return (
        <Container>
            <TodoContainer>
                <TodoListContainer>
                    <TodoList />
                </TodoListContainer>
                <AddToDoFormContainer>
                    <AddToDoForm />
                </AddToDoFormContainer>
            </TodoContainer>
        </Container>
    )
}

export default Todo

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:1rem;

`
const TodoContainer = styled.div`
    width:70%;
    height:30rem;
    padding:2rem;
    display:grid;
    grid-template-rows:1fr auto;
    grid-template-columns:repeat(1,minmax(0,1fr));
    grid-gap:1rem;
    justify-content:center;
    align-items:flex-start;
    @media screen and (max-width:768px){
        padding:1rem;
        width:100%;
    }
`

const TodoListContainer = styled.div`
    height:20rem;
    overflow-y:auto;
`
const AddToDoFormContainer = styled.div`
    overflow:hidden;
`
