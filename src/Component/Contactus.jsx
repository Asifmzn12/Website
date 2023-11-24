import { useForm } from "react-hook-form";
import { socialIcons, contactApi } from "../config/Contactapi";
import "../assets/css/contact.css";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `Name: ${data.name}, Email: ${data.email}, Contact Number: ${data.contactNumber}, Message: ${data.message}`
    );
  };
  console.log(contactApi);

  return (
    <div className="container-fluid contact-section g-0">
    <div className=" container-fluid bg-wheat g-0">
        <div className="container">
        <div className="row py-5 Contactus position-relative justify-content-center align-items-center ">
          <div className="col-md-6 col-xl-9">
            <div className="d-flex flex-column gap-2">
              <p>How can we help you?</p>
              <h2>Contact us</h2>
              <p>
                We’re here to help and answer any questions you <br></br> might
                have. We look forward to hearing from you!{" "}
              </p>
              <p className=" fw-bold">Follow us</p>
              <div className="social-icons d-flex">
                {socialIcons.map((Social, index) => (
                  <span key={index} className=" d-inline-block me-4 icons">
                    <Social.icons size={20} />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 top-section">
            <img src="images/contactus.webp" className="img-fluid"></img>
          </div>
        </div>
      </div>
      </div>
      <div className=" container-lg py-lg-5 container-fluid">
        <div className="row my-2 py-3  shadow-lg  bg-white rounded">
          <div className="col-lg-6 d-flex justify-content-center align-items-lg-stretch">
            <div className="row gy-3 py-4 ">
              {contactApi.map((data) => (
                <div key={data.id} className="col-lg-6 col-md-6 gap-1   ">
                  <div className="card info p-3 p-md-1 p-xl-4 p-lg-1 p-md-3">
                    <data.icons size={40} />
                    <div className="my-2 address-content d-flex flex-column gap-2">
                      <h4>{data.title}</h4>
                      <p>{data.content}</p>
                      <p>{data.content2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-12 mt-3 mt-md-0 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-center">Get in touch</h3>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    errors.name ? "is-invalid" : ""
                  } py-3`}
                  id="name"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 6,
                      message: "Min length should be 6",
                    },
                    maxLength: {
                      value: 30,
                      message: "max length should be 30",
                    },

                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only letters and white spaces are allowed",
                    },
                  })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              <div className="form-group my-4">
                <input
                  type="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  } py-3`}
                  id="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="form-group my-4">
                <input
                  type="text"
                  className={`form-control ${
                    errors.subject ? "is-invalid" : ""
                  } py-3`}
                  id="subject"
                  placeholder="Enter your Subject"
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 10,
                      message: "Subject should not be less then 30",
                    },
                  })}
                />
                {errors.subject && (
                  <div className="invalid-feedback">
                    {errors.subject.message}
                  </div>
                )}
              </div>

              <div className="form-group my-4">
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  } py-3`}
                  id="message"
                  placeholder="Enter your message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 50,
                      message: "Min length should be 6",
                    },
                  })}
                />
                {errors.message && (
                  <div className="invalid-feedback">
                    {errors.message.message}
                  </div>
                )}
              </div>

              <div className="row flex-column flex-md-row  align-items-center">
                <div className="col-md-4 text-start">
                  <button
                    type="submit"
                    className="btn btn-primary mt-1 py-2 px-5 mx-2 mx-md-0 fw-semibold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=thokar%20no%204%20abul%20fazal%20enclave&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              style={{ width: "100%", height: "410px" }}
            ></iframe>
            <style>
              {`
                .mapouter {
                  position: relative;
                  background: #fff;
                }
                .maprouter a {
                  color: #fff !important;
                  position: absolute !important;
                  top: 0 !important;
                  z-index: 0 !important;
                }
              `}
            </style>
            <style>
              {`
                .gmap_canvas {
                  overflow: hidden;
                 
                }
                .gmap_canvas iframe {
                  position: relative;
                  z-index: 2;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
