import React, {Component} from "react";
import {Link} from "react-router-dom";

const Table = (props) => {

    const employeeList = [];

    const createList = () => {
        props.employees.map((e) => employeeList.push(e.name));
        props.dropdownElem.map((e) => employeeList.push(e));
    };

    createList();
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>Lp.</th>
                    <th>Imię i nazwisko</th>
                    {props.type === 'management' ? <th>Usuń</th> : null}
                </tr>
                {employeeList.map((e, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            {props.type === 'management' ? <td>{e}</td> :
                                <td><Link to={`/employee/${i + 1}`}>{e}</Link></td>}
                            {props.type === 'management' ? <td>
                                <button className='btn'>Usuń</button>
                            </td> : null}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="line"/>
        </>
    )
};

export {Table};