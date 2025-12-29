import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Namaste React</h1>


const HeadingComponent  = () => (
    <div>
    <Title/>
     <Title></Title>
     {Title()}
 <h1 id="heading">Namaste React using Functional Component.</h1>
 </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
