import React, {useState, useEffect} from 'react'
import './topBtn.css'

function TopBtn() {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        console.log(window.scrollY)
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])


  return showButton && (
    <div className="scroll__container">
        <button id="top" onClick={scrollToTop} type="button" >
            <img
              src="./images/top.png"
              alt="탑버튼"
            />
            
        </button>
    </div>
  )
}

export default TopBtn
