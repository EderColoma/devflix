import React from 'react'
import logo from '../../assets/img/logo.png'
import './Menu.css'
import ButtonLink from '../ButtonLink'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo}/>
            </a>

            <ButtonLink className="ButtonLink" href="/"> 
                Novo v&iacute;deo
            </ButtonLink>
        </nav>
    );
}

export default Menu;