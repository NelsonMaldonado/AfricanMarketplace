import React from "react";

export default function Form_Add_Item(props) {
  return (
    <form class="flex-column">
      <label>
        Name:
        <input value="" />
      </label>
      <label>
        Email:
        <input value="" />
      </label>
      <label>
        Phone Number:
        <input value="" />
      </label>
      <label>
        Address:
        <input value="" />
      </label>
      <label>
        Sub-Category:
        <input value="" />
      </label>
      <label>
        Commodity Product:
        <input value="" />
      </label>
      <br />

      <button>Submit</button>
    </form>
  );
}
