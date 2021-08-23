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
    <div>
      <label>
        Name:<p>{ props.input_object.name}</p>
      </label>
      <label>
        Quanity:<p>{ props.input_object.quantity}</p>
      </label>
      <label>
        Description:<p>{ props.input_object.name}</p>
      </label>
      <label>
        Commodity Category:<p></p>
      </label>
      <label>
        Sub-Category:<p></p>
      </label>
      <label>
        Commodity Product:<p></p>
      </label>
    </div>
  );
}
