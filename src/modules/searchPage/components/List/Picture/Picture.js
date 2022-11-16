import React from "react";
import modules from "./Picture.module.css";

function SearchPicture({picture}) {
    return (
        <div className={modules.Container}>
            <img src={picture.urls.thumb} alt={picture.alt_description} />
        </div>
    )
}

export default SearchPicture;