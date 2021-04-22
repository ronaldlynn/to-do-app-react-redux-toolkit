import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'


const AddToDoForm = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({ value });
        dispatch(addTodo({
            title: value,
        }))

    }
    return (
        <Form onSubmit={onSubmit}>
            <InputText>
                <input
                    type="text"
                    placeholder="add to do..."
                    onChange={(event) => setValue(event.target.value)}
                />
            </InputText>
            <Button variant="outlined" color="primary" type='submit'>
                Add
            </Button>
        </Form>
    )
}

export default AddToDoForm

const Form = styled.form`
    display:flex;
    justify-content:space-between;
`

const InputText = styled.div`
    flex:1 1 auto;
    input{
        height:100%;
        width:95%;
        padding:0.2rem 0 0.2rem 0.8rem;
        border-radius:0.2rem;
        border:1px solid #ffffff;

        &:focus-within{
            outline:unset;
            box-shadow:unset;
        }
    }
`


