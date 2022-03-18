import React from "react";

export default function Form({ item }) {
  //   console.log(item);
  return (
    <div>
      <form action={item[0]} target="_blank">
        <img src={item[1]} alt="" />

        <label htmlFor={item[2]}>{item[2]}:</label>
        <input type="text" required id={item[2]} name={item[3]} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
