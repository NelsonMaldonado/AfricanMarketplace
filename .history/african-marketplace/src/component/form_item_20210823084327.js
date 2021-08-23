import React from "react";

export default function Form_Item(props) {
  const {
    name,
    quantity,
    description,
    commodityCategory,
    subCategory,
    commodityProduct,
  } = props.input_object;
  return (
    <form>
      <label>
        Name:<input>{props.input_object.name}</input>
      </label>
      <label>
        Quanity:<input>{props.input_object.quantity}</input>
      </label>
      <label>
        Description:<input>{props.input_object.description}</input>
      </label>
      <label>
        Commodity Category:<input>{props.input_object.commodityCategory}</input>
      </label>
      <label>
        Sub-Category:<p>{props.input_object.subCategory}</p>
      </label>
      <label>
        Commodity Product:<p>{props.input_object.commodityCategory}</p>
      </label>
    </form>
  );
}
