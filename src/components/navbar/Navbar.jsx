import React from 'react';
import './Navbar.css'
// import SearchBar from '../SearchBar';
import UserOptions from '../user/UserOptions';

export default function Navbar({ handleLogin, returnToHomePage, itemsInBasket, openBasket }) {
    // let loggedIn = true;

    return (
        <nav className="nav">
            <img onClick={() => returnToHomePage()} className="nav__logo" src="../imgs/logo.png" alt=''></img>
            <div className="nav__options">
                {/* <SearchBar /> */}
                <UserOptions
                    handleLogin={handleLogin}
                    itemsInBasket={itemsInBasket}
                    openBasket={openBasket}
                />
            </div>
        </nav>
    )
}