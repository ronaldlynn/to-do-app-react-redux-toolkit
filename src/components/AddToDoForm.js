import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'


const AddToDoForm = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        const inputAddTodoEle = document.getElementById('inputAddTodo')
        inputAddTodoEle.value = '';
        if (!value) return;
        dispatch(addTodo({
            title: value,
        }))
        setValue('');
    }
    return (
        <Form onSubmit={onSubmit}>
            <InputText>
                <input
                    id="inputAddTodo"
                    type="text"
                    placeholder="Add a task..."
                    onChange={(event) => setValue(event.target.value)}
                />
                <AddToDoButton>
                    <Button color="primary" type='submit'>
                        <AddCircleOutlineRoundedIcon />
                    </Button>
                </AddToDoButton>
            </InputText>
        </Form>
    )
}

export default AddToDoForm

const Form = styled.form`
    display:flex;
    justify-content:space-between;
    overflow:hidden;
    border-radius:0.55rem;
    height:2.5rem;
`

const InputText = styled.div`
    flex:1 1 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#ffffff;

    input{
        height:100%;
        font-size:1.2rem;
        padding:0.5rem 0 0.5rem 1.2rem;
        border-radius:0.2rem;
        border:1px solid #ffffff;
        flex-grow:1;

        &:focus-within{
            outline:unset;
            box-shadow:unset;
        }
    }

    @media screen and (max-width:768px){
        input{
            font-size:0.8rem;
        }
    }
`

const AddToDoButton = styled.div`
    
`

