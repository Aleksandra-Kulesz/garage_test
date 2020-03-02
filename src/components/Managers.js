import React, {Component} from "react";
import {DropdownElement} from "./DropdownElement";
import {Table} from "./Table";

class Employees extends Component {
    render() {
        return (
            <section className='employees'>
                <h2>Pracownicy</h2>
                <button>Dodaj</button>
                <div className='modal'>
                    <input type="text"/>
                    <button>Dodaj</button>
                    <div className="dropdown-content">
                        {this.props.employees.map((e, i) => {
                            return (
                                <DropdownElement key={i} element={e}/>
                            )
                        })}
                    </div>
                </div>

                <Table employees={this.props.employees}/>
            </section>
        )
    }
}

export {Employees};