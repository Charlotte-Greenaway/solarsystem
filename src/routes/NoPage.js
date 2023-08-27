import space from '../images/space.gif'
import {Link} from "react-router-dom";

const NoPage = () => {
    document.querySelector("body").style.backgroundImage= "url("+space+")";
    return(
        <p id="tilttext">Lost?<br/> There is no place like <Link style={{color:"white"}} to="/">home</Link>!</p>
    )
}

export default NoPage;