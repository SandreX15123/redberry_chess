import { Link, useNavigate } from 'react-router-dom'
import Register from '../../img/register.png'
import Defaultperformance from '../../img/Defaultperformance.png'
import king from '../../img/king.png'
import Redsign from '../../img/redsign.png'
import Next from '../../img/next.png';
import { useState } from 'react'

const Registration = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: ''
    });
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    const onChange = (event) => {
        console.log(event, 'eve');
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    }
    function validatedate(dateString) {
        let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;

        // Match the date format through regular expression      
        if (dateString.match(dateformat)) {
            let operator = dateString.split('/');
            // Extract the string into month, date and year      
            let datepart = [];
            if (operator.length > 1) {
                datepart = dateString.split('/');
            }
            let month = parseInt(datepart[0]);
            let day = parseInt(datepart[1]);
            let year = parseInt(datepart[2]);

            // Create list of days of a month      
            let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (month == 1 || month > 2) {
                if (day > ListofDays[month - 1]) {
                    ///This check is for Confirming that the date is not out of its range      
                    return false;
                }
            } else if (month == 2) {
                let leapYear = false;
                if ((!(year % 4) && year % 100) || !(year % 400)) {
                    leapYear = true;
                }
                if ((leapYear == false) && (day >= 29)) {
                    return false;
                } else
                    if ((leapYear == true) && (day > 29)) {
                        console.log('Invalid date format!');
                        return false;
                    }
            }
        } else {
            console.log("Invalid date format!");
            return false;
        }
        return true;
    }

    const submit = () => {
        let errors = null;

        if (formState.name.length < 2) {
            errors = {
                name: true
            }
        }
        var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge/;
        if (!formState.email.match(email)) {
            errors = {
                ...errors,
                email: true
            }

        }
        if (formState.phoneNumber.length !== 9) {
            errors = {
                ...errors,
                phoneNumber: true
            }
        }
        if (!validatedate(formState.dateOfBirth)) {
            errors = {
                ...errors,
                dateOfBirth: true
            }
        }
        if (errors) {
            setErrors(errors);
        }
        else {
            console.log('hello')
            let urlEncoded = new URLSearchParams(formState)
            navigate("/registration_finish", { state: formState });
        }
        console.log(errors);
    }

    return (
        <>
            <div id="ULig">
                <img id="Ligtxt" src={king} />
            </div>
            <p id="TopText">Start creating your account</p>
            <div id="TopLine"></div>

            <img id="Lig" src={Register} />
            <img id="DefPer" src={Defaultperformance} />

            <p id="Personaltxt">Personal information</p>
            <p id="UnderPT">This is basic informaton fields</p>

            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form name="form1" action="#" className="sign-in-form">
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" name="name"
                                    onChange={onChange}
                                    minLength="2"
                                    placeholder='Name *' />
                            </div>
                            <div className="input-field">
                                <input type="text/javascript"
                                    onChange={onChange} name="email" placeholder="Email address *" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-login"></i>
                                <input type="number" name="phoneNumber"
                                    onChange={onChange}
                                    placeholder="Phone number" />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-login"></i>
                                <input type="datetime"
                                    onChange={onChange} name="dateOfBirth" placeholder="Date of birth *" />
                            </div>


                        </form>
                    </div>
                </div>

                <div className="panel-container"></div>
            </div>




            <Link to="/"><button className="button Back"><p id="BackBtn">Back</p></button></Link>

            <button className="button next" onClick={submit}><img id="B2Ctext" src={Next} /></button>


            <div id="blockName" className="block" style={{ display: errors.name ? 'block' : 'none' }}>
                <div id="blockUP">
                    <img id="redsign" src={Redsign} />
                    <p id="blocktxt">Error</p>
                    <button type="button" id="justX4" onClick={() => setErrors({ ...errors, name: false, })}>X</button>
                </div>
                <div id="blockLine"></div>
                <div id="blockBody"><p id="blockBodytxt">Please enter valid name</p></div>
            </div>

            <div id="blockEmail" className="block" style={{ display: errors.email ? 'block' : 'none' }}>
                <div id="blockUP">
                    <img id="redsign" src={Redsign} />
                    <p id="blocktxt">Error</p>
                    <button type="button" id="justX4" onClick={() => setErrors({ ...errors, email: false, })}>X</button>
                </div>
                <div id="blockLine"></div>
                <div id="blockBody"><p id="blockBodytxt">Please enter valid email address</p></div>
            </div>

            <div id="blockPhone" className="block" style={{ display: errors.phoneNumber ? 'block' : 'none' }}>
                <div id="blockUP">
                    <img id="redsign" src={Redsign} />
                    <p id="blocktxt">Error</p>
                    <button type="button" id="justX4" onClick={() => setErrors({ ...errors, phoneNumber: false, })}>X</button>
                </div>
                <div id="blockLine"></div>
                <div id="blockBody"><p id="blockBodytxt">Please enter valid phone number</p></div>
            </div>

            <div id="blockDate" className="block" style={{ display: errors.dateOfBirth ? 'block' : 'none' }}>
                <div id="blockUP">
                    <img id="redsign" src={Redsign} />
                    <p id="blocktxt">Error</p>
                    <button type="button" id="justX4" onClick={() => setErrors({ ...errors, dateOfBirth: false, })}>X</button>
                </div>
                <div id="blockLine"></div>
                <div id="blockBody"><p id="blockBodytxt">Please enter valid Date of birth (MM/DD/YYYY)</p></div>
            </div>
        </>
    )
}

export default Registration;
