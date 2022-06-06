import Example3 from "./Example3";

function Example2(props) {
  


  
  return (
    <div className="Example2"> 
   
      
       <Example3 number={props.number} onIncrement={props.onIncrement}/>
       </div>
  )

}
export default Example2;