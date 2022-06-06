import Example1 from "./components/Example1";
import Example2 from "./components/Example2";



function App(props) {
  return  (
    <div className="App">
     <Example1/>
     <Example2/>
     
     {props.children}

    </div>
  );
}

export default App;