import React from "react";
import "./Searchbar.css"


export default function Searchbar() {
  return (
    <form class="form-inline my-8 my-lg-0">
      <input
        class="form-control mr-lg-6"
        type="search"
        placeholder="Search City"
        aria-label="Search"
      />
    </form>
  );
}
