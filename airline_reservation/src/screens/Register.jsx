import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  const onSignup = async () => {
    if (firstName.length == 0) {
      toast.warn("Please enter first name");
    } else if (lastName.length == 0) {
      toast.warn("Please enter last name");
    } else if (email.length == 0) {
      toast.warn("Please enter email");
    } else if (phone.length == 0) {
      toast.warn("Please enter phone number");
    } else if (password.length == 0) {
      toast.warn("Please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warn("Please confirm password");
    } else if (password != confirmPassword) {
      toast.warn("Password does not match");
    } else {
      const result = await onSignup(
        firstName,
        lastName,
        email,
        password,
        dob,
        phone,
        country
      );
      if (result["status"] == "success") {
        toast.success("Successfully registered a new admin");

        // go back
        navigate(-1);
      } else {
        toast.error(result["error"]);
      }
    }
  };
  return (
    <div
      className="card shadow-lg p-4 rounded"
      style={{
        width: "60%",
        marginTop: "50px",
        marginLeft: "20%",
        marginRight: "20%",
      }}
    >
      <h2 className="header text-center">🛫 Airline Reservation Register</h2>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="dob"
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  placeholder="Date of Birth"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <input
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-4">
              Already have an account? <Link to="/login">Signin here</Link>
            </div>
            <button onClick={onSignup} className="mt-3 btn btn-success">
              Signup
            </button>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>

    //---------------------------------------------------------------------------------------------
    // <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    // <div
    //   className="card shadow-lg p-4 rounded"
    //   style={{
    //     width: "60%",
    //     marginTop: "50px",
    //     // marginBottom: "50px",
    //     marginLeft: "20%",
    //     marginRight: "20%",
    //   }}
    // >
    //   <h2 className="header text-center">Register</h2>

    //   <div className="row">
    //     <div className="col-md-1"></div>
    //     <div className="col">
    //       {/* First Name and Last Name */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="firstName">First Name</label> */}
    //             <input
    //               id="firstName"
    //               onChange={(e) => setFirstName(e.target.value)}
    //               type="text"
    //               placeholder="First Name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="lastName">Last Name</label> */}
    //             <input
    //               id="lastName"
    //               onChange={(e) => setLastName(e.target.value)}
    //               type="text"
    //               placeholder="Last Name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Email and Phone */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="email">Email</label> */}
    //             <input
    //               id="email"
    //               onChange={(e) => setEmail(e.target.value)}
    //               type="email"
    //               placeholder="Email"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="phone">Phone Number</label> */}
    //             <input
    //               id="phone"
    //               onChange={(e) => setPhone(e.target.value)}
    //               type="tel"
    //               placeholder="Phone Number"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Password and Confirm Password */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="password">Password</label> */}
    //             <input
    //               id="password"
    //               onChange={(e) => setPassword(e.target.value)}
    //               type="password"
    //               placeholder="Password"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
    //             <input
    //               id="confirmPassword"
    //               onChange={(e) => setConfirmPassword(e.target.value)}
    //               type="password"
    //               placeholder="Confirm Password"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Date of Birth and Country */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="dob">Date of Birth</label> */}
    //             <input
    //               id="dob"
    //               onChange={(e) => setDob(e.target.value)}
    //               type="date"
    //               placeholder="Date of Birth"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-4">
    //             {/* <label htmlFor="country">Country</label> */}
    //             <input
    //               id="country"
    //               onChange={(e) => setCountry(e.target.value)}
    //               type="text"
    //               placeholder="Country"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Signup Button and Signin Link */}
    //       <div className="text-center">
    //         <div className="mb-4">
    //           Already have an account? <Link to="/login">Signin here</Link>
    //         </div>
    //         <button onClick={onSignup} className="mt-3 btn btn-success">
    //           Signup
    //         </button>
    //       </div>
    //     </div>
    //     <div className="col-md-1"></div>
    //   </div>
    // </div>

    //--------------------------------------------------------------
    // <div className="container">
    //   <h2 className="header text-center mb-4">Register</h2>

    //   <div className="row justify-content-center">
    //     <div className="col-md-6">
    //       <div className="mb-3">
    //         <label htmlFor="firstName">First Name</label>
    //         <input
    //           id="firstName"
    //           onChange={(e) => setFirstName(e.target.value)}
    //           type="text"
    //           placeholder="Enter first name"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="lastName">Last Name</label>
    //         <input
    //           id="lastName"
    //           onChange={(e) => setLastName(e.target.value)}
    //           type="text"
    //           placeholder="Enter last name"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="email">Email</label>
    //         <input
    //           id="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           type="email"
    //           placeholder="Enter email"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="phone">Phone Number</label>
    //         <input
    //           id="phone"
    //           onChange={(e) => setPhone(e.target.value)}
    //           type="tel"
    //           placeholder="Enter phone number"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           id="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //           type="password"
    //           placeholder="Enter password"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="confirmPassword">Confirm Password</label>
    //         <input
    //           id="confirmPassword"
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           type="password"
    //           placeholder="Confirm password"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="dob">Date of Birth</label>
    //         <input
    //           id="dob"
    //           onChange={(e) => setDob(e.target.value)}
    //           type="date"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="country">Country</label>
    //         <input
    //           id="country"
    //           onChange={(e) => setCountry(e.target.value)}
    //           type="text"
    //           placeholder="Enter country"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="d-flex justify-content-between mb-3">
    //         <div>
    //           Already have an account? <Link to="/login">Signin here</Link>
    //         </div>
    //         <button onClick={onSignup} className="btn btn-success">
    //           Signup
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // -------------------------------------------------------------------
    // <div>
    //   <h2 className="header">Register</h2>

    //   <div className="row">
    //     <div className="col-md-3"></div>
    //     <div className="col">
    //       {/* First Name and Last Name */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="firstName">First Name</label>
    //             <input
    //               id="firstName"
    //               onChange={(e) => setFirstName(e.target.value)}
    //               type="text"
    //               placeholder="firstname"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="lastName">Last Name</label>
    //             <input
    //               id="lastName"
    //               onChange={(e) => setLastName(e.target.value)}
    //               type="text"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Email and Phone */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="email">Email</label>
    //             <input
    //               id="email"
    //               onChange={(e) => setEmail(e.target.value)}
    //               type="email"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="phone">Phone Number</label>
    //             <input
    //               id="phone"
    //               onChange={(e) => setPhone(e.target.value)}
    //               type="tel"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Password and Confirm Password */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="password">Password</label>
    //             <input
    //               id="password"
    //               onChange={(e) => setPassword(e.target.value)}
    //               type="password"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="confirmPassword">Confirm Password</label>
    //             <input
    //               id="confirmPassword"
    //               onChange={(e) => setConfirmPassword(e.target.value)}
    //               type="password"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Date of Birth and Country */}
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="dob">Date of Birth</label>
    //             <input
    //               id="dob"
    //               onChange={(e) => setDob(e.target.value)}
    //               type="date"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="country">Country</label>
    //             <input
    //               id="country"
    //               onChange={(e) => setCountry(e.target.value)}
    //               type="text"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Signup Button and Signin Link */}
    //       <div className="center">
    //         <div className="mb-3">
    //           <div>
    //             Already have an account? <Link to="/login">Signin here</Link>
    //           </div>
    //           <button onClick={onSignup} className="mt-3 btn btn-success">
    //             Signup
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-3"></div>
    //   </div>
    // </div>

    // ----------------------------------
    // <div>
    //   <h2 className="header">Register</h2>

    //   <div className="row">
    //     <div className="col"></div>
    //     <div className="col">
    //       <div className="mb-3">
    //         <label htmlFor="">First Name</label>
    //         <input
    //           onChange={(e) => setFirstName(e.target.value)}
    //           type="text"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="">Last Name</label>
    //         <input
    //           onChange={(e) => setLastName(e.target.value)}
    //           type="text"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="">Email</label>
    //         <input
    //           onChange={(e) => setEmail(e.target.value)}
    //           type="email"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="">Phone Number</label>
    //         <input
    //           onChange={(e) => setPhone(e.target.value)}
    //           type="tel"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="">Password</label>
    //         <input
    //           onChange={(e) => setPassword(e.target.value)}
    //           type="password"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="">Confirm Password</label>
    //         <input
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           type="password"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="">Date of Birth</label>
    //         <input
    //           onChange={(e) => setDob(e.target.value)}
    //           type="datetime-local"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="">country</label>
    //         <input
    //           onChange={(e) => setCountry(e.target.value)}
    //           type="text"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <div>
    //           Already have an account? <Link to="/login">Signin here</Link>
    //         </div>
    //         <button onClick={onSignup} className="mt-3 btn btn-success">
    //           Signup
    //         </button>
    //       </div>
    //     </div>
    //     <div className="col"></div>
    //   </div>
    // </div>
    //--------------------------------------------------------------
    // <div>
    //   <h2 className="header">Register</h2>

    //   <div className="row">
    //     <div className="col"></div>
    //     <div className="col">
    //       <div className="row">
    //         {/* First Name and Last Name Side by Side */}
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="firstName">First Name</label>
    //             <input
    //               id="firstName"
    //               onChange={(e) => setFirstName(e.target.value)}
    //               type="text"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="mb-3">
    //             <label htmlFor="lastName">Last Name</label>
    //             <input
    //               id="lastName"
    //               onChange={(e) => setLastName(e.target.value)}
    //               type="text"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Other Inputs */}
    //       <div className="mb-3">
    //         <label htmlFor="email">Email</label>
    //         <input
    //           id="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           type="email"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="phone">Phone Number</label>
    //         <input
    //           id="phone"
    //           onChange={(e) => setPhone(e.target.value)}
    //           type="tel"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           id="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //           type="password"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="confirmPassword">Confirm Password</label>
    //         <input
    //           id="confirmPassword"
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           type="password"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="dob">Date of Birth</label>
    //         <input
    //           id="dob"
    //           onChange={(e) => setDob(e.target.value)}
    //           type="datetime-local"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="country">Country</label>
    //         <input
    //           id="country"
    //           onChange={(e) => setCountry(e.target.value)}
    //           type="text"
    //           className="form-control"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <div>
    //           Already have an account? <Link to="/login">Signin here</Link>
    //         </div>
    //         <button onClick={onSignup} className="mt-3 btn btn-success">
    //           Signup
    //         </button>
    //       </div>
    //     </div>
    //     <div className="col"></div>
    //   </div>
    // </div>
  );
}

export default Register;
