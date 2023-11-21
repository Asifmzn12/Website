import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../assets/css/form.css'


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const onSubmit = (data) => {
        // Add your login logic here
        console.log(data)

    };

    return (
        <div className="container py-1">
            <div className='row py-5 shadow-lg p-3 mb-5 bg-white rounded' >
            <div className="col-lg-6 d-none d-lg-block text-end">
            <img src="images/Signup.jpg"
              alt="Sample photo" className="img-fluid"
               />
          </div>
                <div className='col-lg-6 col-md-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                    <label className='my-2' htmlFor="name">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''} py-3`}
                      id="name"
                      placeholder="Enter name"
                      {...register('name', {
                        required: 'Name is required',
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: 'Name should only contain letters',
                        },
                        minLength: {
                          value: 7,
                          message: 'Name should be at least 7 characters',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Name should not exceed 30 characters',
                        },
                      })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                  </div>

                        <div className="form-group my-2">
                            <label className='my-2' htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''} py-3`}
                                id="email"
                                placeholder="Enter email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>

                        <div className="form-group position-relative my-2">
                            <label className='my-2' htmlFor="password">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className={`form-control ${errors.password ? 'is-invalid' : ''} py-3`}
                                id="password"
                                placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password should be at least 8 characters',
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                        message:
                                            'Password should contain at least one uppercase letter, one digit, and one special character',
                                    },
                                })}
                            />
                            <div
                                className="input-group-append"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="input-group-text position-absolute end-0 top-50">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}

                        </div>

                        <div className="form-group my-2 position-relative">
                            <label className='my-2' htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''} py-3`}
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                {...register('confirmPassword', {
                                    required: 'Confirm Password is required',
                                    validate: (value) => value === watch('password') || 'Passwords do not match',
                                })}
                            />
                            <div
                                className="input-group-append"
                                onClick={toggleConfirmPasswordVisibility}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="input-group-text position-absolute end-0 top-50" >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {errors.confirmPassword && (
                                <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                            )}
                        </div>
                        <div className='row justify-content-center align-items-start'>
                        <div className='col-12 col-md-4'>                    
                          <button type="submit" className="btn btn-primary my-3 py-2 px-5 fw-semibold">
                            Register
                        </button>
                        </div>  
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                        className="fw-bold text-body"><u>Login here</u></a></p>
                        </div>

                    </form>

                </div>
            </div>



        </div>
    );
};

export default Signup;