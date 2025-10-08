import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/menu.css"

export default function Menu() {
    const [open, setOpen] = useState(false)
    const location = useLocation() // indica qual págin está ativa

    return (
        <div className="menu">
            <div className="container menu-container">
                <div className="menu-logo">
                    <a href="/">
                        <img
                            src="/assets/images/horizontal-logo.png"
                            alt="Logo ReAproveita na Horizontal"
                        />
                    </a>
                </div>
                <div className="menu-toggle" id="menu-toggle" onClick={() => setOpen(!open)}>☰</div>
                <div className={`menu-items ${open ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link
                                to="/sobre-nos"
                                className={location.pathname === '/sobre-nos' ? 'active' : ''}
                                onClick={() => setOpen(false)}
                            >
                                Quem Somos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/onde-estamos"
                                className={location.pathname === '/onde-estamos' ? 'active' : ''}
                                onClick={() => setOpen(false)}
                            >
                                Onde estamos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className={location.pathname === '/blog' ? 'active' : ''}
                                onClick={() => setOpen(false)}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fale-conosco"
                                className={location.pathname === '/fale-conosco' ? 'active' : ''}
                                onClick={() => setOpen(false)}
                            >
                                Fale Conosco
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
