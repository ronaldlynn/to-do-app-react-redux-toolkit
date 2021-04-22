import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <NavBar>
            <NavbarBrand>
                <span>To Do</span>
            </NavbarBrand>
        </NavBar>
    )
}

export default Header

const NavBar = styled.div`
    width:100%;
    padding:1.2rem 1.2rem;
    background-color: #ffffff;
    position:fixed;
    box-shadow: 0 6px 20px rgba(93,93,93,0.23);
    z-index:100;
    display:flex;
    align-items:center;
    justify-content:center;
`

const NavbarBrand = styled.div`
    span{
        font-weight:700;
        font-size:2rem;
        box-shadow:0 4px #09009f;
        background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`