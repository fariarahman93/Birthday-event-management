import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-pink-100">
  <div className="hero-content flex-col">
  <div >
    <h1 className="text-5xl font-bold  text-purple-500 ">Please Register</h1>
    
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form className="card-body ">
      <div className="form-control">
        <label className="label">
          <span className="label-text  text-purple-500 font-semibold">Your Name</span>
        </label>
        <input type="text" placeholder="Your Name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text  text-purple-500 font-semibold">Your Email</span>
        </label>
        <input type="email" placeholder="Your Email" className="input input-bordered" required />
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text  text-purple-500 font-semibold">Your Phone</span>
          </label>
          <input type="number" placeholder="Your Phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-purple-500 font-semibold">Photo URL</span>
          </label>
          <input type="photo" placeholder="Your Photo URL" className="input input-bordered" required />
        </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text  text-purple-500 font-semibold">Your Password</span>
        </label>
        <input type="password" placeholder="Your Password" className="input input-bordered" required />
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
            <Footer></Footer>
        </div>
    );
};

export default Register;
  