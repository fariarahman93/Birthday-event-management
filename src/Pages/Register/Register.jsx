import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";


const Register = () => {
  const { createUser,logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const phone = form.get('phone');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
  
    console.log(name, phone, photo, email, password);
  
    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Password Error',
        text: 'Password must be at least 6 characters long.',
      });
      return;
    }
  
    if (!password.match(/[A-Z]/)) {
      Swal.fire({
        icon: 'error',
        title: 'Password Error',
        text: 'Password must contain at least one capital letter.',
      });
      return;
    }
  
    if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      Swal.fire({
        icon: 'error',
        title: 'Password Error',
        text: 'Password must contain at least one special character.',
      });
      return;
    }
  
    try {
      const result = await createUser(email, password);
      console.log(result.user);
      if (result.user) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
        await logOut();
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <div className="hero min-h-screen bg-pink-100">
        <div className="hero-content flex-col">
          <div >
            <h1 className="text-5xl font-bold  text-purple-500 ">Please Register</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-purple-500 font-semibold">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-purple-500 font-semibold">Your Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-purple-500 font-semibold">Your Phone</span>
                </label>
                <input type="number" name="phone" placeholder="Your Phone" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-purple-500 font-semibold">Photo URL</span>
                </label>
                <input type="photo" name="photo" placeholder="Your Photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-purple-500 font-semibold">Date</span>
                </label>
                <input type="date" name="date" placeholder="Your Date" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-500 font-semibold">Service</span>
                </label>
                <select name="service" className="select select-bordered" required>
                  <option value="" disabled selected>
                    Select your service
                  </option>
                  <option value="service1">Basic Package</option>
                  <option value="service2">Standard Package</option>
                  <option value="service3">Premium Package</option>
                  <option value="service4">Deluxe Package</option>
                  <option value="service5">Ultimate Package</option>
                  <option value="service6">Ultimate Premium Package</option>
                  
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-500 font-semibold">Decoration</span>
                </label>
                <select name="decoration" className="select select-bordered" required>
                  <option value="" disabled selected>
                    Select decoration
                  </option>
                  <option value="decoration1">Standard Birthday Bliss</option>
                  <option value="decoration2">Basic Celebration Delight</option>
                  <option value="decoration3">Premium Party Extravaganza</option>
                  <option value="decoration4">Economy Birthday Bash</option>
                  <option value="decoration5">Luxury Jubilee Celebration</option>
                  <option value="decoration6">Sweet and Simple Soiree</option>
                  
                  
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-purple-500 font-semibold">Your Password</span>
                </label>
                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover  text-purple-500 ">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className=" p-3 rounded-lg bg-pink-200 text-xl text-purple-500 font-semibold">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


