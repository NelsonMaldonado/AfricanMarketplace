import React from "react";

export default function Form_Add_Item(props) {

  return (
    <form class="flex-row">
      <label>
        Name:
        <input value=""/>
      </label>
      <label>
        Quanity:
        <input value="" />
      </label>
      <label>
        Description:
        <input value="" />
      </label>
      <label>
        Commodity Category:
        <input value="" />
      </label>
      <label>
        Sub-Category:
        <input value={props.input_object.subCategory} />
      </label>
      <label>
        Commodity Product:
        <input value={props.input_object.commodityCategory} />
      </label>
    </form>
  );
}
