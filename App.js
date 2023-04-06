import React from "react";
import Entry from "./Day 6/Entry";
import List from "./Day 6/List";
//import Day7 from "./Day 7";
import Home from "./Day 9/Home";
import Singers from "./Day 9/Singer";
import Albums from "./Day 9/Album";
import Day8 from "./Day 8";
import Day7 from "./Day 7.js/Day 7";

function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
      <Albums/>
      <Singers/>
      <Home/>
      <Day7/>
      <Day8/>
      
    </div>
  );
}

export default App;


