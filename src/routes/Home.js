import space from '../images/space.gif'
import './css/home.css';
import {Link} from "react-router-dom";

const Home = ({setusername}) =>{
    document.querySelector("body").style.backgroundImage= "url("+space+")";
    const setValue = (event) => {
        setusername(event.target.value);
    }
    return(
        <>
        <div id="home">
        <h1 id="hometitle">Embark on an Interplanetary Trek</h1>
        <input id="username" type="text" placeholder='Enter your name...' onChange={setValue}/>
        <Link to="/space"><div id="arrow"></div></Link>
        </div>
        </>
    )
}
export default Home;