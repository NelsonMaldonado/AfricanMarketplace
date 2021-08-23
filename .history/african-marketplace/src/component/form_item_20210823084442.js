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
        Commodity Category:<input value={props.input_object.commodityCategory}/>
      </label>
      <label>
        Sub-Category:<input value={props.input_object.subCategory}/>
      </label>
      <label>
        Commodity Product:<p>{props.input_object.commodityCategory}</p>
      </label>
    </form>
  );
}
