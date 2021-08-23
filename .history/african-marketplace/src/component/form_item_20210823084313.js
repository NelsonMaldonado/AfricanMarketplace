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
        Quanity:<p>{props.input_object.quantity}</p>
      </label>
      <label>
        Description:<p>{props.input_object.description}</p>
      </label>
      <label>
        Commodity Category:<p>{props.input_object.commodityCategory}</p>
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
