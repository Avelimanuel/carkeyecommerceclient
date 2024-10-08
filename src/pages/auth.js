import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/register", {
        username,
        password,
      });

      setUsername("");
      setPassword("");

      setError(null);
      setSuccessMessage("Registration successfully");
    } catch (error) {
      if (error) {
        setUsername("");
        setPassword("");
        setError("Username already exists");
      } else {
        setError("Something went wrong");
      }
    }
  };
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <form
        onSubmit={handleSubmit}
        className="relative w-[220px] flex flex-col items-center justify-center bg-white p-[30px] shadow-[0px_0px_40px_rgba(0,0,0,0.062)] overflow-hidden"
      >
        <div className="absolute w-[300px] h-[300px] transform rotate-45 left-[-180px] bottom-[30px] z-[1] rounded-[30px] shadow-[5px_5px_10px_rgba(0,0,0,0.082)]"></div>
        <p className="text-2xl text-[#2e2e2e] font-bold my-[10px] z-[2]">
          Register
        </p>
        <div className="w-full relative flex items-center justify-center z-[2]">
          <svg
            className="absolute left-1 w-4 h-4 fill-[#2e2e2e]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>

          <input
            type="text"
            className="w-full h-[30px] bg-transparent border my-[10px] text-black text-[0.8em] font-medium box-border pl-[30px] focus:outline-none focus:border-[#c772ff]"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="w-full relative flex items-center justify-center z-[2]">
          <svg
            className="absolute left-1 w-4 h-4 fill-[#2e2e2e]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input
            type="password"
            className="w-full h-[30px] bg-transparent border-4 my-[10px] text-black text-[0.8em] font-medium box-border pl-[30px] focus:outline-none focus:border-[#c772ff]"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full border-none bg-[#a268ff] h-[30px] text-white text-[0.8em] font-medium tracking-[1px] my-[10px] cursor-pointer hover:bg-[#7e54ff] z-[2] relative"
        >
          Register
        </button>
        {error && (
          <div>
            <h1 className="text-red-500 font-bold text-center">{error}</h1>
          </div>
        )}
        {successMessage && (
          <div className="text-green-500 font-bold text-center">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });
      setCookies("access_token", response.data.token);
      localStorage.setItem("userId", response.data.id);
      setSuccessMessage("You are now logged in")
      navigate("/")
     
    } catch (error) {
        if(error){
            setError("Invalid username or password")
        }else{
            setError("Something went wrong")
        }
    }
  };

  return (
    <div className="flex justify-center items-center mt-[20px] p-5">
      <form onSubmit={handleLoginSubmit} className=" bg-slate-400 p-5 rounded">
        <h2 className="text-center font-bold text-2xl ">Login</h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="text-center mt-3  border-4"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            className="text-center mt-3 border-4"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="w-full border-none bg-[#a268ff] h-[30px] text-white text-[0.8em] font-medium tracking-[1px] my-[10px] cursor-pointer hover:bg-[#7e54ff] z-[2] relative">
            Login
          </button>
        </div>
        {error && (
          <div>
            <h1 className="text-red-500 font-bold text-center">{error}</h1>
          </div>
        )}
        {successMessage && (
          <div className="text-green-500 font-bold text-center">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};
