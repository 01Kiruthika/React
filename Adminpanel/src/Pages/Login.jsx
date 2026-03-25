import { useRef } from "react";
import './Login.css'



function Login({ setName, setIsLoggedIn }) {


    const usernameRef = useRef();
    const userPassRef = useRef();
    const roleRef = useRef();

    let handleSubmit = (e) => {
        debugger;
        // alert("hi")
        e.preventDefault();

        const username = usernameRef.current.value;
        const role = roleRef.current.value;

    
        if (role === "Admin") {
            setName("Admin");
        } else {
            setName(username);
        }

        setIsLoggedIn(true);
    };

    return (
        <div className="login-page">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input type="text" ref={usernameRef} placeholder="Username" required />
                <input type="Password" ref={userPassRef} placeholder="Password" required />

                <select ref={roleRef} required>
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;