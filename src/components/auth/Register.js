import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const Register = ({ setAuthUser }) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:5002/admins?email=${registerUser.email}`)
            .then(res => res.json())
            .then(admin => !!admin.length)
    }

    const handleCancel = () => {
        history.push("/login")
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch({
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form onSubmit={handleRegister}>
                <h1 >Create a Zkhool Account</h1>
                <fieldset>
                    <label htmlFor="firstName"></label>
                    <input type="text" name="firstName" id="firstName" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                </fieldset>
                <fieldset >
                    <label htmlFor="lastName"></label>
                    <input type="text" name="lastName" id="lastName" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                </fieldset>
                <fieldset >
                    <label htmlFor="inputEmail"></label>
                    <input type="email" name="email" id="email" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                </fieldset>
                <div>


                    <button type="submit"> Sign in </button>



                    <button onClick={handleCancel}> Cancel </button>


                </div>

            </form>
        </main>
    )
}

