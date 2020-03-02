import React, {Component} from "react";
import job from './../json-data/details'

const employees = job.employees;

const EmployeePage = ({match}) => {
    const {params: {employeeId}} = match;

    return (
        <>
            <h2 className="employee__page__title">{employees[employeeId - 1].name}</h2>
            <h3 className="employee__page__subtitle">{employees[employeeId - 1].details}</h3>

        </>
    );
};

export {EmployeePage};