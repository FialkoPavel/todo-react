import React from "react";
import './app-header.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className="header_text">
            <h1> My ToDo List </h1>
            <img className='pencil' alt="File:Ei-pencil.svg"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ei-pencil.svg/512px-Ei-pencil.svg.png"
                 decoding="async" width="50" height="50"
                 srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ei-pencil.svg/768px-Ei-pencil.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ei-pencil.svg/1024px-Ei-pencil.svg.png 2x"
                 data-file-width="512" data-file-height="512"></img>
            <p> {todo} more to do, {done} done</p>
        </div>
    )
};

export default  AppHeader;