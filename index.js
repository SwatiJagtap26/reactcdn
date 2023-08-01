const heading = document.createElement("h1");
heading.innerHTML= "hello using javascript manipulation";
const root = document.getElementById("root");
root.appendChild(heading)

// react using hello
const head = React.createElement("h1", {} ,"hello using react manipulation!!!!");
const rootElement =ReactDOM.createRoot(document.getElementById('reacthead'));
rootElement.render(head);

