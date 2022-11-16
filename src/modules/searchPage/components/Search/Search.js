import React, {useState} from "react";
import modules from "./Search.module.css"

function Search() {
    const [value, setValue] = useState('');
    // const alert = useContext(AlertContext);
    // const github = useContext(GithubContext);

    const onSubmit = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        // github.clearUsers()

        if (value.trim()) {
            // alert.hide()
            // github.search(value.trim())
        } else {
            alert.show('Введите данные пользователя!')
        }
    }

    return (
        <div className={modules.Container}>
            <input
                type="text"
                className="form-control"
                placeholder="Search for pictures..."
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button
                type="button"
                value="Search"
                aria-label="Search"
                onClick={onSubmit} />
        </div>
    )
}

export default Search;