import React, {Component} from "react";

const Details = (props) => {
    return (
        <section className='details'>
          <h3 className='detail__item'><span>Departament: </span> {props.department}</h3>
          <h3 className='detail__item'><span>Więcej szczegółów: </span> {props.moreDetails}</h3>
          <h3 className='detail__item'><span>Aktywny:</span> {props.isActive?'tak': 'nie'}</h3>
            <div className="line"/>
        </section>
    )
};

export {Details};