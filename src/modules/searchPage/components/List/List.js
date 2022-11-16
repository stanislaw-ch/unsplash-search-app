import React, {useContext} from "react";
import modules from "./List.module.css"
import {UnsplashContext} from "../../../../context/unsplash/UnsplashContext";
import Picture from "./Picture/Picture";

function SearchList() {
    const {loading, pictures} = useContext(UnsplashContext);
    return(
        pictures.length !== 0
            ? <div className={modules.Container}>
                    <h3>Search result</h3>

                    <div className={modules.ResultContainer}>
                        <div className={modules.ResultWrapper}>
                            {loading
                                ? <p>Loading...</p>
                                : pictures.map(picture => (
                                        <Picture picture={picture} key={picture.id}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            : null
    )
}

export default SearchList;
