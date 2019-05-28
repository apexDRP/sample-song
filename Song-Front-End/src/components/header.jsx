import React from 'react';
import HeaderImage from '../web_resources/images/header.jpg'
import Logo from '../web_resources/images/JF-Weirdo-logo.png'

//inline style for header component
const header = {
        width: '100%',
        height: 'auto',
        backgroundColor: '#ff0000',
        backgroundSize: 'cover'
    },

    headerImg = {
        width: '100%',
        height: 'auto'
    },

    logo = {
        position: 'absolute',
        width: '16vw',
        height: '15vw',
        top: '2vw',
        left: '2vw',
        zIndex: '1'
    }

function Header() {
    return <div style={header}>
        <img style={headerImg} src={HeaderImage} alt='headerImg'/>
        <img style={logo} src={Logo} alt='logo'/>
    </div>
}

export default Header;