import "./../artCss/Home/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
    //for the button
    const nav = useNavigate;

    return(
        <div classname='Register-page'>
            <p>
                This is the end(in like a singing way gang)
            </p>

            {/*random button fuck nigga */}
            <button className="register-btn" onClick={() => nav('/')} >
                Go back
            </button>
        </div>
    )
} 

export default Register;