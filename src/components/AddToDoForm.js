import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core';


const AddToDoForm = () => {
    return (
        <Container>
            <InputText>
                <input type="text" placeholder="add to do..." />
            </InputText>
            <Button variant="outlined" color="primary">
                Add
            </Button>
        </Container>
    )
}

export default AddToDoForm

const Container = styled.div`
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


