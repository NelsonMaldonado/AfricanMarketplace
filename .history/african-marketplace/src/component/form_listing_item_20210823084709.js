import React from "react";
import { sample_items } from "./constant";
import Form_Item from "../component/form_item";

export default function Form_Listing_Item(props) {
  return <div>
      {
          Array.from(sample_items).map(element)
      }
  </div>;
}
