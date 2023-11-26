import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ForgetPassword from './ForgetPassword';
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import '../assets/css/form.css'


const LoginForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [forgetPasswordModalVisible, setForgetPasswordModalVisible] = useState(false);


    const showForgetPasswordModal = () => {
        setForgetPasswordModalVisible(true);
    };
    console.log(forgetPasswordModalVisible)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const onSubmit = () => {
        navigate("/")


    };

    return (
        <div className="container py-5">
            <div className='row py-5 justify-content-center align-items-center shadow-lg p-3 mb-5 bg-white rounded'>
                <div className='col-lg-6 my-2 d-none d-lg-block'>
                    <img src='images/login.jpg' className='img-fluid my-2 hover'></img>
                </div>
                <div className='col-lg-6 col-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <h2 className="text-md-center my-1">Welcome Back</h2>
                        <div>
                            <p className="text-start text-md-center text-muted mt-1 mt-md-4 mb-0">Doesn&apos;t have an account yet? <Link to="/signup"
                                className="fw-bold text-body  text-decoration-none underline d-inline-block"> Sign Up</Link></p>
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
                            <small className="text-muted position-absolute end-0 mt-1">
                                <Link to="#" className="text-decoration-none underline" onClick={showForgetPasswordModal}>
                                    Forget Password
                                </Link>
                            </small>
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
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                                {...register('rememberMe')}
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>


                        <div className='row flex-column flex-md-row justify-content-center align-items-center'>
                            <div className='col-md-4 text-start '>
                                <button type="submit" className="btn btn-primary my-3 py-2 px-5  fw-semibold scale">
                                    Login
                                </button>
                            </div>
                            <div className='col-12 col-md-8'>
                                <div className=" d-flex  justify-content-start justify-content-md-center align-items-center gap-3" >
                                    <p className='fw-semibold text-muted'>Login with: </p>
                                    <button type="button" className="btn btn-outline-primary">
                                        <FaFacebook />
                                    </button>
                                    <button type="button" className="btn btn-outline-danger mx-2">
                                        <FaGoogle />
                                    </button>
                                </div>
                            </div>

                        </div>

                    </form>

                </div>
            </div>


            {forgetPasswordModalVisible && <ForgetPassword show={forgetPasswordModalVisible} onHide={() => setForgetPasswordModalVisible(false)} />}
            



        </div>
    );
};

export default LoginForm;
