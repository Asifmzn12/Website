/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { RiLockPasswordLine } from "react-icons/ri";



function MyVerticallyCenteredModal(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className='row py-4 gy-4'>


                        <div className=' d-flex flex-column gap-3 justify-content-center align-items-center'>
                        <RiLockPasswordLine size={50} />
                        <h3>Let&apso;s Reset Password</h3>
                        <p>Please enter email or phone </p>
                         </div>
                            <div className='col-12 form-group'>
                                <input
                                    placeholder='Email or Phone Number'
                                    className={`form-control ${errors.emailOrPhone ? 'is-invalid' : ''} `}

                                    {...register('emailOrPhone', {
                                        required: 'This field is required',
                                        validate: (value) => {
                                            if (!value) {
                                                return 'This field is required';
                                            }

                                            // Check if it's a valid email or phone number
                                            const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
                                            const isPhoneNumber = /^\d{10}$/.test(value);

                                            if (!isEmail && !isPhoneNumber) {
                                                return 'Invalid email or phone number';
                                            }

                                            return true;
                                        },
                                    })}
                                    type="text"
                                />
                                <span>{errors.emailOrPhone && errors.emailOrPhone.message}</span>

                            </div>
                            <div className='col-12'>
                                <button type="submit " className='btn btn-primary'>Submit</button>
                            </div>

                        </div>
                    </div>

                </form>

            </Modal.Body>

        </Modal>
    );
}


function ForgetPassword({ show, onHide }) {


    return (
        <>


            <MyVerticallyCenteredModal show={show} onHide={onHide} />

        </>
    );
}
export default ForgetPassword
