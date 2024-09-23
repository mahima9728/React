// ReactElement(object)=> Html(Browser understand)
const parent = React.createElement("div", { id: "parent" },
  
  React.createElement("div", { id: "child" },
  [React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),]), 
  
  React.createElement("div", { id: "child2" },
  [React.createElement("h3", {}, "I am an h3 tag"),
 React.createElement("h4", {}, "I am an h4 tag"),] )
); 

// JSX



const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
 
console.log(heading);


    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(parent);