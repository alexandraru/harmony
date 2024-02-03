import React from 'react';
import { useEffect, useState } from 'react';

function BackToTopButton (){
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
          {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "50px",
                background: "rgb(119, 197, 241)",
                borderRadius: "50%",
                border: "none"
            }} onClick={scrollUp}>^</button>
          )} 
    </>
    )
}

export default BackToTopButton