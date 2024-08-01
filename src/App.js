import "./styles.css";
import ProgressBar from "./Components/ProgressBar";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? <ProgressBar /> : ""}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}
