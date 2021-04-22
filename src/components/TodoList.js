import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const TodoItem = ({ todo }) => {
    return (
        <TodoItemContainer>
            <ItemText>
                <span>{todo.title}</span>
            </ItemText>
            <DeleteTodo>
                <DeleteOutlineIcon />
            </DeleteTodo>
        </TodoItemContainer>
    );
}

const TodoList = () => {
    const todoList = useSelector(state => state.todos)
    return (
        <>
            {todoList.map(todo => (

                <li key={todo.id}>
                    <TodoItem todo={todo} />
                </li>

            ))}
        </>
    )
}

export default TodoList

const TodoItemContainer = styled.div`
    background-color:#ffffff;
    border-radius:0.75rem;
    margin:0.5rem 0.1rem;
    padding:1rem;
    height:auto;
    min-height:2rem;
    display:flex;
    justify-content:space-between;
`

const ItemText = styled.div`
    width:95%;
    word-wrap:break-word;
`
const DeleteTodo = styled.div`
    width:5%;
    display: flex;
    align-items: center;
    padding:0 0 0 0.5rem;
`
