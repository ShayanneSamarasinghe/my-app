import React from 'react'

const Header = (props) => {
    return (
        <div>
            This is {props.name}'s header!
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default Header;
