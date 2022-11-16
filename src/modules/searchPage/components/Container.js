import React from 'react';
import Search from "./Search/Search";
import SearchList from "./List/List";

import modules from "./Container.module.css";

function SearchContainer() {
    return (
        <section className={modules.Container}>
            <div className={modules.Header}>
                <h2>Unsplash Search App</h2>
            </div>

            <div className={modules.ContentWrapper}>
                <Search />
                <SearchList />
            </div>
        </section>
    );
}

export default SearchContainer;