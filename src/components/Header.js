import React, {Component} from "react";

const Header = (props) => {
    return (
        <header>
            <h1 className='header__title'>{props.title}</h1>
            <div className="line"/>
        </header>
    )
};

export {Header};