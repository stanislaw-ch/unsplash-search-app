import React from "react";
import modules from "./List.module.css"

function SearchList() {
    return(
        <div className={modules.Container}>
            <h3>Search result</h3>

            <div className={modules.ResultContainer}>

            </div>
        </div>
    )
}

export default SearchList;
