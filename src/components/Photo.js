import React from 'react'
function Photo(props) {
    return (
        <div className="Photo" style={{margin: "0 0 0 20px"}}>
            <img src={props.photo} alt="author" />
        </div>
    )
}

export default Photo
