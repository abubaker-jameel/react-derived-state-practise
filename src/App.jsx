import React, { useState } from "react";
import Box from "./Box";
import data from "./data";

export default function App() {
  const [square, setSquare] = useState(data);

  function toggle(id) {
    console.log(id);
    setSquare((prevSquare) => {
      return prevSquare.map((newSquare) => {
        return newSquare.id === id
          ? { ...newSquare, on: !newSquare.on }
          : newSquare;
      });
    });
  }

  const box = square.map((item) => {
    return <Box key={item.id} on={item.on} toggle={() => toggle(item.id)} />;
  });

  return (
    <>
      <main>{box}</main>
    </>
  );
}
