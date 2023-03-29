import React from 'react'
import NavLink from './NavLink'

function Nav(props) {

    return (
        <div className="Nav" style={{ backgroundColor: props.mode.color3 }}>
            <NavLink content="Blog" mode={props.mode} />
            <NavLink content="About Me" mode={props.mode} />
            <NavLink content="Projects" mode={props.mode} />
            <NavLink content="Other" mode={props.mode} />
        </div>
    )
}

export default Nav
