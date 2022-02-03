import React from "react"



export const GetUserHome = () => {
    let user = sessionStorage.getItem("zkhool_username")
    console.log(user)
    if (user) {
        return (
            <div className="get_user">
                <h1>Hello, {user}!</h1>
            </div>
        )
    } else {
        return (
            null
        )
    }

}