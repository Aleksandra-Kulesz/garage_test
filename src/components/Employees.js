import React, {Component} from "react";
import {DropdownElement} from "./DropdownElement";
import {Table} from "./Table";

class Employees extends Component {
    state = {
        modalIsOpen: false,
        dropdownIsOpen: false,
        employeesList: [],
        managersList: []
    };

    handleOpenModal = () => {
        this.setState({modalIsOpen: true})
    };

    handleCloseModal = () => {
        this.setState({
            modalIsOpen: false,
            dropdownIsOpen: false
        })
    };

    handleToggleDropdown = () => {
        this.setState({dropdownIsOpen: !this.state.dropdownIsOpen})
    };

    handleCloseDropdown = (e) => {
        const employeesList = [];
        const managersList = [];
        if (this.props.type === 'managers') {
            managersList.push(e.target.innerText)
        } else {
            employeesList.push(e.target.innerText)
        }
        this.setState({
            dropdownIsOpen: false,
            employeesList: [...this.state.employeesList, ...employeesList],
            managersList: [...this.state.managersList, ...managersList]
        })
    };

    render() {

        return (
            <section className={this.props.type === 'employees' ? 'employees' : 'management'}>
                <h2 className='employees__header'>{this.props.type === 'employees' ? 'Pracownicy' : 'Management'}</h2>
                <button className='btn' onClick={this.handleOpenModal}>Dodaj</button>
                <div className={this.state.modalIsOpen ? 'employees__modal--open' : 'employees__modal--closed'}>
                    <i className="far fa-times-circle close" onClick={this.handleCloseModal}/>
                    <h3>Wybierz pracownika z listy</h3>
                    <button className='btn' onClick={this.handleToggleDropdown}>Dodaj</button>
                    <div
                        className={this.state.dropdownIsOpen ? 'dropdown__content--open' : 'dropdown__content--closed'}>
                        {this.props.dropdown.map((e, i) => {
                            return (
                                <DropdownElement key={i} element={e} close={this.handleCloseDropdown}/>
                            )
                        })}
                    </div>
                </div>

                <Table employees={this.props.employees}
                       type={this.props.type === 'employees' ? 'employees' : 'management'}
                       dropdownElem={this.props.type === 'employees' ? this.state.employeesList : this.state.managersList}/>
            </section>
        )
    }
}

export {Employees};