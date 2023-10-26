import { Link } from "react-router-dom";
import vaultImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  // Toast 
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const handleLogin = (e) => {

    const { login } = useContext(AuthContext)
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const name = form.name.value;
    const email = form.get("email");
    const password = form.get("password");
    login(email, password)
    .then(res => {
      const user = res.user
      if(user){
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      }
      
    })
    .catch(err => {
      Toast.fire({
        icon: 'error',
        title: `Something went wrong ${err.message}`
      })
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
            <form className="card-body" onSubmit={handleLogin}>
              <h1 className="text-4xl text-center font-bold text-[#444]">
                Login
              </h1>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-[#FF3811] text-white "
                  value="Login"
                />
              </div>
              {/* Login Providers */}
              <div></div>
            </form>
            <p className="text-center font-semibold text-[#737373] pb-2">
              New to car Doctors ?{" "}
              <Link
                className="text-[#FF3811] hover:underline pl-2"
                to={"/register"}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
