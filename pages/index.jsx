// import Nav from "../components/nav";
import { useState } from "react";

export default function IndexPage() {
  const [name, setName] = useState("stranger");
  const [color, setColor] = useState("pink-700");

  return (
    <div>
      {/* <Nav /> */}
      <div className="py-20">
        <h1 className="text-5xl text-center text-indigo-700">
          Hi my name is Ian! :)
        </h1>
        <h3 className="text-xl text-center pt-20 font-bold text-purple-700">
          What is your name?
        </h3>
        <form className="text-center pt-20">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </form>
        <h1 className={`text-5xl text-center text-${color}`}>
          Hi, {name}, nice to meet you!
        </h1>
      </div>
    </div>
  );
}
