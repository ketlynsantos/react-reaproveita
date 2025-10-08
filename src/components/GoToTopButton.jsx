import { useEffect, useState } from "react"
import "../styles/go-to-top-button.css"

export default function GoToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`btn-go-to-top ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            arial-label="Vá para o topo"
        >
            ↑
        </button>
    )
}