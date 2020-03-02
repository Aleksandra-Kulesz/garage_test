import React from 'react';
import job from './../json-data/details'
import dropdown from './../json-data/employees'
import {Header} from "./../components/Header";
import {Nav} from "./../components/Nav";
import {Details} from "./../components/Details";
import {Employees} from "./../components/Employees";


const PositionPage = () => {
    return (

        <div className='container'>
            <Header title={job.details.name}/>
            <Nav/>
            <Details department={job.details.departament} moreDetails={job.details.something}
                     isActive={job.details.isActive}/>
            <Employees type='employees' employees={job.employees} dropdown={dropdown.employees}/>
            <Employees type='managers' employees={job.managers} dropdown={dropdown.employees}/>
        </div>

    )
};

export {PositionPage}