import React from 'react'

function NavLink(props) {

    return (
        <div className="NavLink" style={{ backgroundColor: props.mode.color4 }}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
