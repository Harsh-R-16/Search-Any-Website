import React from "react";
import Form from "./Form";
import { data } from "./data";
export default function Main() {
  return (
    <main>
      <h1>Search in Any Website</h1>
      <section>
        {data.map((i, index) => (
          <Form item={i} />
        ))}
      </section>
    </main>
  );
}
