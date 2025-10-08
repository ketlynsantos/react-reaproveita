import { Link } from "react-router-dom"
import "../styles/components/footer.css"

export default function Footer() {
    return (
        <footer>
            <section className="two-row footer-content">
                <div className="container">
                    <div className="footer-container">
                        <div className="col col-info">
                                <Link to="/">
                                    <img src="/assets/images/horizontal-logo.png" alt="Logo reaproveita" />
                                </Link>
                                <p>
                                    Juntos, transformamos o desperdício em oportunidade, promovendo economia, sustentabilidade e acesso para todos.
                                </p>
                        </div>
                        <div className="col col-links">
                            <h3>Links Rápidos</h3>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/sobre-nos">Sobre Nós</Link>
                                </li>
                                <li>
                                    <Link to="/onde-estamos">Onde Estamos</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/fale-conosco">Fale Conosco</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-contact">
                            <h3>Contato</h3>
                            <ul>
                                <li>
                                    <span>contato@reaproveita.com.br</span>
                                </li>
                                <li><span>(11) 99999-9999</span></li>
                                <li><span>São Paulo, SP</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="footer-info">
                        &copy; 2025. ReAproveita | Todos os
                        direitos reservados.
                    </p>
                </div>
            </section>
        </footer>
    )
}
