import React, {Component} from "react";

const DropdownElement = (props) => {
  return (
      <span className='dropdown__element' onClick={props.close}>{props.element.name}</span>
  )
};

export {DropdownElement};