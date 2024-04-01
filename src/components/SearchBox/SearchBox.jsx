import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();
  const filteredName = useSelector(selectNameFilter);

  const searchInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBar}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        className={css.textInput}
        type="text"
        value={filteredName}
        onChange={searchInput}
      />
    </div>
  );
};
