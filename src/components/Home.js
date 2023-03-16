import { Fragment } from "react";
import "./style.css";

function Home1()
{
    return <h1 className="first">welcome to react js</h1>
}
export default Home1




export const About = ()=>{
    return(
        <Fragment>
            <h1 className="second">this is first element</h1>
            <h2>this is second heading</h2>
       </Fragment> 
    )

}
