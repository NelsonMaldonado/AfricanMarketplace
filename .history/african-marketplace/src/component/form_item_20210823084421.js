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
        Name:<input value={props.input_object.name}/>
      </label>
      <label>
        Quanity:<input value={props.input_object.quantity}/>
      </label>
      <label>
        Description:<input value={props.input_object.description}/>
      </label>
      <label>
        Commodity Category:<input>{props.input_object.commodityCategory}</input>
      </label>
      <label>
        Sub-Category:<input>{props.input_object.subCategory}</input>
      </label>
      <label>
        Commodity Product:<p>{props.input_object.commodityCategory}</p>
      </label>
    </form>
  );
}
