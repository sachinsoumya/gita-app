import React from 'react'
import './Contact.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Contact() {

    const history = useHistory();
    return (
        <div>

            <div id="scrollspyHeading3" className="my-5  px-auto pt-3" >
                <div className="display-6 fw-bold text-danger text-center text-uppercase py-3 ">
                    Contact Us
                </div>
                <div className="fs-5 text-center fw-normal px-2 px-lg-0 text-danger">Reach out with any questions you have</div>


                <div className="my-5 wide mx-md-auto">
                    <form name="myForm" action="mailto:pandasoumyasachin@gmail.com" method="post"
                        encType="text/plain" className="was-validated" novalidate>
                        <div className="form-floating mb-5 mx-2 mx-md-0 ">
                            <input type="text" className="form-control border border-top-0 border-end-0 border-start-0 " id="floatingInput1"
                                placeholder="your name" name="name" required />

                            <label htmlFor="floatingInput1" className=" text-secondary">Full Name</label>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback one"></div>

                        </div>
                        <div className="form-floating mb-5 mx-2 mx-md-0">
                            <input type="email" className="form-control border border-top-0 border-end-0 border-start-0" id="floatingInput2"
                                placeholder="name@example.com" name="mail" required />
                            <label htmlFor="floatingInput2" className=" text-secondary">Email address</label>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback two"></div>
                        </div>
                        <div className="form-floating mb-5 mx-2 mx-md-0">
                            <input type="tel" className="form-control border border-top-0 border-end-0 border-start-0" id="floatingPassword"
                                placeholder="phone" name="phone" required />
                            <label htmlFor="floatingPassword" className=" text-secondary">Phone number</label>

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback three"></div>
                        </div>
                        <div className="form-floating mb-5 mx-2 mx-md-0">
                            <input type="text" className="form-control border border-top-0 border-end-0 border-start-0" id="floatingInput3"
                                aria-describedby="inputGroupPrepend2" placeholder="message" name="message" required />
                            <label htmlFor="floatingInput3" className=" text-secondary">Message</label>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className=" invalid-feedback four"></div>
                        </div>
                        <div className=" mb-5 mx-3 mx-md-0 text-center">
                            <button type="submit" className="btn btn-danger btn-lg " value="Send">Send</button>
                        </div>

                    </form>










                </div>

                <button type="button" className="btn btn-dark mx-3 my-0 btn-sm " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Back" onClick={() => history.push('/')} > Back to Home</button>


            </div>
        </div>
    )
}
