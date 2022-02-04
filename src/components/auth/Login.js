import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";



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

        <main>
          
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
                <form onSubmit={handleLogin}>
                    <div>
                    
                    </div>

                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input type="email"
                            id="email"
                            className="form-control-login"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />

                    </fieldset>

                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input type="password"
                            id="password"
                            className="form-control-login"
                            placeholder="password"
                            required autoFocus
                            value={loginUser.password}
                            onChange={handleInputChange} />

                    </fieldset>
                    <div>
                        <button type="submit">
                            Sign in
                        </button>
                    </div>

                    <section>

                        <div>
                            {/* <div><h6>not signed up?</h6></div>
                            <div>
                                <Link to="/register"><h6>Register for an account</h6></Link>
                            </div> */}
                        </div>
                    </section>
                </form>
            </section>
        </div>


        </main>
    )
}

