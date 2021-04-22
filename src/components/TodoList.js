import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo({ id: todo.id }));

    }
    return (
        <TodoItemContainer>
            <ItemText>
                <span>{todo.title}</span>
            </ItemText>
            <DeleteTodo
                onClick={handleDeleteTodo}
            >
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
const DeleteTodo = styled.button`
    width:5%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color:unset;
    border:unset;
    cursor:pointer;
    padding:0.2rem;
    &:active{
        transform:scale(0.9);
        border:unset;
        color:#ff0000;
    }
    &:focus{
        border:unset;
        outline:none;
    }
`
