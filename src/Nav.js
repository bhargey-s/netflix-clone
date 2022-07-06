import React, {useState, useEffect} from 'react'

function Nav() {
    const [show,handleShow] = useState(false) ;
    const scrollEvent = () => {
        if(window.scrollY>100)
                handleShow(true) ;
            else
                handleShow(false) ;
    }

    useEffect(() => {
        window.addEventListener("scroll",scrollEvent());

        return () => {window.removeEventListener("scroll",scrollEvent())} ;
    },[]) ;
    return (
        <nav className={`navBar ${show && "navBlack"}`}>
            <img className="navLogo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix_logo" />
            <img className="navAvatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_avatar_logo" />
        </nav>
    )
}

export default Nav