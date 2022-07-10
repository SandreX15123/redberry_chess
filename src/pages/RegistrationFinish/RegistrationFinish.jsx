import { Link, useLocation, useNavigate } from 'react-router-dom'
import halfdoneprogress from '../../img/halfdoneprogress.png'
import secondstep from '../../img/secondstep.png'
import king from '../../img/king.png'
import Redsign from '../../img/redsign.png'
import Next from '../../img/next.png';
import Select from 'react-select'
import { useEffect, useState } from 'react'

const CustomOption = (props) => {
    console.log(props);
    const { innerProps, innerRef } = props;
    return (
        <div ref={innerRef} {...innerProps} style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <img style={{ width: 50, height: 50, borderRadius: 25, }} src={`https://chess-tournament-api.devtest.ge/${props.data.image}`} />
            <span>{props.data.label}</span>
        </div>
    )
}

const Registration = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: ''
    });
    const [grandmasters, setGrandmasters] = useState({});
    const [level, setLevel] = useState(null);
    const [master, setMaster] = useState(null);
    const [partc, setPartic] = useState(null);
    const { state } = useLocation();
    let navigate = useNavigate();

    console.log(state, 'state');

    const options = [
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'professional', label: 'Professional' }
    ]

    useEffect(() => {
        fetch("https://chess-tournament-api.devtest.ge/api/grandmasters").then((res) => {
            res.json().then((data) => setGrandmasters(data.map((el) => ({
                value: el.id,
                label: el.name,
                image: el.image,
            }))));
        })
    }, [])

    const register = () => {
        fetch("https://chess-tournament-api.devtest.ge/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name: state.name,
                email: state.email,
                phone: state.phoneNumber,
                date_of_birth: state.dateOfBirth,
                experience_level: level.value,
                already_participated: partc,
                character_id: master.value
            })
        }).then((res) => {
            navigate('/landed')
        })
    }

    return (
        <>
            <div id="ULig">
                <img id="Ligtxt" src={king} />
            </div>

            <p id="TopText">Start creating your account</p>
            <div id="TopLine"></div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1 }}>
                    <img id="Lig" src={secondstep} alt="" />
                </div>
                <div style={{ flex: 1 }}>
                    <img style={{ width: 366, height: 65 }} src={halfdoneprogress} />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div class="custom-select" style={{ flex: 1 }}>
                            <Select options={options} onChange={(option) => setLevel(option)} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <Select options={grandmasters} onChange={(option) => setMaster(option)} components={{ Option: CustomOption }} />
                        </div>
                    </div>
                    <span>Have you participated in the Redberry Championship? *</span>
                    <div>
                        <input type="radio" id="contactChoice1"
                            name="contact" value="true" onClick={() => setPartic(true)} />
                        <span>Yes</span>

                        <input type="radio" id="contactChoice1"
                            name="contact" value="false" onClick={() => setPartic(false)} />
                        <span>No</span></div>
                    <Link to="/registration"><button class="button Back"><p id="BackBtn">Back</p></button></Link>
                    <button class="button next"><img id="B2Ctext" src={Next} onClick={register} /></button>
                    <div id="block"></div>

                </div>
            </div>
        </>
    )
}

export default Registration;
