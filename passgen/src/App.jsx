import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passsword, setPasssword] = useState("");
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
  }, [length, numberAllowed, charAllowed, setPasssword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Genrator</h1>
    </>
  );
}

export default App;
