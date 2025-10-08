import { useNavigate } from "react-router-dom"
import Numbers from "../components/Numbers"
import HowItWorks from "../components/HowItWorks"
import '../styles/home.css'
import Partners from "../components/Partners"
import BlogCarousel from "../components/BlogCarousel"

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            {/* Hero */}
            <section className="hero pd-20">
                <div className="container two-column">
                    <div className="col col-text">
                        <h1 className="title wd-80">Salve alimentos. Economize de Verdade.</h1>
                        <p className="description wd-80">
                            No aplicativo ReAproveita, você encontra produtos próximos da validade com até 70% de
                            desconto. Baixe agora e ajude a reduzir o desperdício de alimentos.
                        </p>

                        <div className="btn-content">
                            <button className="btn green" type="button">
                                <img src="assets/icons/play-store.png" alt="Ícone Google Play" />
                                <div className="btn-text">
                                    <span>Disponível no</span>
                                    <strong>Google Play</strong>
                                </div>
                            </button>
                            <button className="btn orange" type="button">
                                <img src="assets/icons/apple.png" alt="Ícone App Store" />
                                <div className="btn-text">
                                    <span>Disponível na</span>
                                    <strong>App Store</strong>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col col-img">
                        <img src="assets/images/basket.png" alt="Cesta de alimentos" />
                    </div>
                </div>
            </section>

            {/* Missão */}
            <section className="mission pd-20">
                <div className="container two-column">
                    <div className="col col-img">
                        <img src="assets/images/person.png" alt="Pessoa com sacolas de compras" />
                    </div>

                    <div className="col col-text">
                        <h2 className="title wd-80">Nossa Missão</h2>
                        <p className="description wd-80">
                            Promover o consumo consciente e acessível, conectando pessoas a alimentos próximos da
                            validade que ainda podem ser aproveitados com qualidade. Acreditamos que é possível
                            economizar, evitar o desperdício e gerar impacto positivo — tudo ao mesmo tempo.
                        </p>
                        <button
                            className="btn green big"
                            type="button"
                            onClick={() => navigate('/sobre-nos')}
                        >
                            Saiba mais
                        </button>
                    </div>
                </div>
            </section>

            <HowItWorks />
            <Partners />
            <Numbers />
            <BlogCarousel />
        </>
    )
}