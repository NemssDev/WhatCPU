import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import { auth, db } from "../lib/firebase";

function SignUpForm() {
  const [state, setState] = React.useState({
    username: "", // Changed from name to username
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleAvatar = () => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = state; // Use username

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        username, // Use username here
        email,
        id: res.user.uid,
        blocked: [],
        friends: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        username, // Use username here
        email,
        id: res.user.uid,
        blocked: [],
        friends: [],
      });
      toast.success("Welcome CPUer, Enjoy the Experience");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 style={{ color: 'black' }}>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-apple" />
          </a>
        </div>
        <span style={{ color: 'black' }}>or use your email for registration</span>
        <input
          type="text"
          name="username" // Use username
          value={state.username} // Use username
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
