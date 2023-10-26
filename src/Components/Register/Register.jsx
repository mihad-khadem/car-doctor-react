import React, { useContext } from "react";
import { Link } from "react-router-dom";
import vaultImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    // const name = form.name.value;
    const email = form.get('email')
    const password = form.get('password')
    console.log( email, password);
    createUser(email, password)
    .then(res => {
      const user = res.user;
      console.log(user);
    })
    .catch(err => {
      console.log(err);
    })
    
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center  lg:mr-10  w-1/2">
            <img src={vaultImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  border-2">
            <form className="card-body" onSubmit={handleRegister}>
              <h1 className="text-4xl text-center font-bold text-[#444]">
                Register
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-[#FF3811] text-white "
                  value="Register"
                />
              </div>
              <div>
                <p className="text-center font-semibold text-[#737373] pb-2">
                  Already have an account
                  <Link
                    className="text-[#FF3811] hover:underline pl-2"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </p>
                {/* Login Providers */}
                <div className="flex justify-center  gap-5">
                  <button className="btn btn-circle text-4xl"><FcGoogle/></button>
                  <button className="btn btn-circle">G</button>
                  <button className="btn btn-circle">G</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
