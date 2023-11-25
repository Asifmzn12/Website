import { useForm, useWatch } from 'react-hook-form';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../assets/css/form.css'
import { Link } from 'react-router-dom';


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
    const agreedTerms = useWatch({
        name: 'agreedTerms',
        control,
        defaultValue: false, // Set a default value for the checkbox
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onSubmit = (data) => {
        if (agreedTerms) {
            // Proceed with registration logic
            console.log(data);
        } else {
            // Display an error or alert indicating that terms and conditions must be agreed to proceed
            console.log('Please agree to the terms and conditions');
        }
    };


    return (
        <div className="container py-1 py-lg-5">

            <div className='row py-5 shadow-lg p-3 mb-5 bg-white rounded' >
                <div className="col-lg-6 d-none d-lg-block text-end">
                    <img src="images/Signup.jpg"
                        alt="Sample photo" className="img-fluid hover"
                    />
                </div>
                <div className='col-lg-6 col-md-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center my-1">Signup Form</h2>

                        <div className="form-group my-4">
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''} py-3`}
                                id="name"
                                placeholder="Enter name"
                                {...register('name', {
                                    required: 'Name is required',
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
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

                        <div className="form-group my-4">
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

                        <div className="form-group position-relative my-4">
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

                        <div className="form-group my-4 position-relative">
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

                        <div className="form-check my-4">
                            <input
                                type="checkbox"
                                className={`form-check-input ${errors.agreedTerms ? 'is-invalid' : ''}`}
                                id="agreedTerms"
                                {...register('agreedTerms', { required: 'Required' })}
                            />
                            <label className="form-check-label" htmlFor="agreedTerms">
                                I agree to the terms and conditions
                            </label>
                            {errors.agreedTerms && <div className="invalid-feedback">{errors.agreedTerms.message}</div>}
                        </div>

                        <div className='row mt-4 justify-content-start justify-content-lg-center align-items-start'>
                            <div className='col-12 col-md-4'>
                                <button type="submit" className="btn btn-primary  py-2 px-5 fw-semibold scale">
                                    Register
                                </button>
                            </div>
                            <p className="text-start text-lg-center text-muted mt-4 mb-0">Have already an account? <Link to='/login'
                                className="fw-bold text-body text-decoration-none underline">Login here</Link></p>
                        </div>

                    </form>

                </div>
            </div>



        </div>
    );
};

export default Signup;
