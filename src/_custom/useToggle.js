import { useState } from "react";

export default function useToggle(defaultToggle) {
  const [toggle, setToggle] = useState(defaultToggle);

  function toggleState(toggle) {
    setToggle((currentToggle) => (typeof toggle === "boolean" ? toggle : !currentToggle));
  }

  return [toggle, toggleState];
}
