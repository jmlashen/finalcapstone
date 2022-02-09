import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Input, Label } from "reactstrap";
import logo from "../../images/logo.svg"
import "../../styles/custom.scss";



export const Login = ({ setAuthUser }) => {
    const [loginUser, setLoginUser] = useState({ email: "", password: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {

        return fetch(`http://localhost:5002/admins?email=${loginUser.email}`)
            .then(res => res.json())
            .then(admin => admin.length ? admin[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    history.push("/home")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (

        <main className="login-main">

            <div className="login-logo-contain">
                <img className="login-logo" src={logo} alt="logo" />
                <h1>ZKHOOL</h1>
            </div>



            <dialog open={existDialog}>
                <div>
                    User does not exist
                </div>
                <button onClick={e => setExistDialog(false)}>
                    Close
                </button>
            </dialog>

            <div >
                <section>
                    <Form onSubmit={handleLogin}>
                        <div>

                        </div>

                        <div className="login-form">
                            <Label htmlFor="inputEmail"></Label>
                            <Input type="email"
                                id="email"
                                className="form-control-login"
                                placeholder="Email address"
                                required autoFocus
                                value={loginUser.email}
                                onChange={handleInputChange} />




                            <Label htmlFor="inputEmail"></Label>
                            <Input type="password"
                                id="password"
                                className="form-control-login"
                                placeholder="Password"
                                required autoFocus
                                value={loginUser.password}
                                onChange={handleInputChange} />

                        </div>


                        <div className="login-button-contain">
                            <Button type="submit">
                                Login
                            </Button>
                        </div>

                        <section>

                            <div>
                                {/* <div><h6>not signed up?</h6></div>
                            <div>
                                <Link to="/register"><h6>Register for an account</h6></Link>
                            </div> */}
                            </div>
                        </section>
                    </Form>
                </section>
                <div className="login-button-contain">
                <Link to="/contacts">
                            <Button>View Emergency Contacts
                                
                                
                                
                            </Button>
                            </Link>
                        </div>
            </div>


        </main>
    )
}

