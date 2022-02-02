import React from "react"



export const GetUser = () => {
    let user = sessionStorage.getItem("zchool_username")

    if (user) {
        return (
            <div className="get_user">
                <p>Welcome, {user}!</p>
            </div>
        )
    } else {
        return (
            null
        )
    }

}