import React, { useContext } from "react";
import Style from "./login.module.scss";
import { useRef } from "react";
import { login } from "../../../Context_Api/AuthContext/apiCalls";
import { AuthContext } from "../../../Context_Api/AuthContext/AuthContext";

export default function Login() {
  const formRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const { isFetching, sender } = useContext(AuthContext);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    login(sender, {
      email: emailRef.current.value,
      password: passRef.current.value,
    });

    formRef.current.reset();
  };
  return (
    <div className={Style.login}>
      <form onSubmit={handleSubmit} ref={formRef} action="">
        <input
          id="mail"
          ref={emailRef}
          type="email"
          placeholder="Input Email"
        />
        <input ref={passRef} type="password" placeholder="Input Password" />
        <button disabled={isFetching} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
