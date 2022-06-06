import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";


function App(props) {
  return  (
    <div className="App">
     <Example1/>
     <Example2/>
     <Example3/>
     {props.children}
     
    </div>
  );
}

export default App;