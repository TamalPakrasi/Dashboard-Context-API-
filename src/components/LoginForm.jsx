import React, { useState } from "react";
import useAuth from "../contexts/Auth.context.js";
import { Link } from "react-router";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticate, setIsAuthenticate } = useAuth();

  const [passwordType, setPasswordType] = useState(true);

  const handleInput = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLogIn = (e) => {
    const isFilled = Object.values(formData).every((val) => val.trim() !== "");
    isFilled ? setIsAuthenticate(true) : alert("Fill Up properly");
  };

  return (
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 relative">
      <div>
        <img
          src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
          className="w-32 mx-auto"
        />
      </div>
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-extrabold">Log in</h1>
        <div className="w-full flex-1 mt-8">
          <div className="mx-auto max-w-xs">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={formData.email}
              onInput={handleInput}
            />
            <div className="relative">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type={passwordType ? "password" : "text"}
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={formData.password}
                onInput={handleInput}
              />
              <button
                className="absolute right-5 top-[50%] cursor-pointer outline-none focus:outline-none"
                onClick={() => setPasswordType((prev) => !prev)}
              >
                {passwordType ? (
                  <img src="/hideEye.png" alt="Hidden" />
                ) : (
                  <img src="/showEye.png" alt="Shown" />
                )}
              </button>
            </div>
            <Link
              to={isAuthenticate ? "" : "/dashboard"}
              className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              onClick={handleLogIn}
            >
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Log in</span>
            </Link>
            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by templatana's
              <span className="border-b border-gray-500 border-dotted">
                Terms of Service
              </span>
              and its
              <span className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
