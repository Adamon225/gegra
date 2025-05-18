import {useState} from "react";
function Guess(props)
{
    let [displayvar,setDis] = useState("block");
    let rar = {position:"absolute",top:props.top,left:props.left,padding:"6px",backgroundColor: "black",display:displayvar};
    let raar = (e)=>
    {
        if(e.target.value.toUpperCase() == props.name.toUpperCase())
            {
                setDis("none");
            }
    }
    let rev = ()=>
    {
        setDis("none");
    }
    return(
    <div className="Guess" background="black" style={rar}>
        <input type="text" onChange={raar} size={props.name.length}></input>
        <button onClick={rev}> reveal</button>
    </div>)

}

export default Guess;