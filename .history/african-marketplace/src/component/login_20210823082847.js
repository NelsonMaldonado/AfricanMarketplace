import React from "react";

export default function Form_Login(props) {
  return (
    <form>
      <div>
        <label>
          User Name: <input></input>
        </label>
        <p>(Validation Text)</p>
      </div>
      <div>
        <label>
          Password<input></input>
        </label>
        <p>(Validation Text)</p>
      </div>
      <button>Login</button>
    </form>
  );
}
