import { useNavigate } from "react-router-dom"
import "../styles/where-we.css"

export default function WhereWe() {
    const navigate = useNavigate()
    return (
        <>
            { /* Seção Hero */ }
            <section className="hero pd-20">
                <div className="container two-column">
                    <div className="col col-text">
                        <h1 className="title wd-80">Onde já estamos fazendo a diferença?</h1>
                        <p className="description wd-80">
                            Veja onde o ReAproveita já está ajudando a reduzir o desperdício 
                            e onde chegaremos em breve.
                        </p>

                        <ul className="states-legend">
                            <li>
                                <span className="dot active"></span>
                                <p>Atuação atual</p>
                            </li>
                            <li>
                                <span className="dot soon"></span>
                                <p>Em breve</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-img">
                        <img src="/assets/images/map.svg" alt="Mapa do Brasil interativo" />
                    </div>
                </div>
            </section>

            { /* Seção Timeline */}
            <section className="timeline-section pd-20">
                <div className="container two-row">
                    <h1 className="title wd-100">Nossa jornada</h1>

                    <div className="timeline-horizontal">

                        <div className="timeline-step">
                            <div className="icon-wrapper">
                                <p className="date">2023</p>
                            </div>

                            <div className="timeline-card">
                                <h3>Início</h3>
                                <p>Início das operações em São Paulo.</p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="icon-wrapper">
                                <p className="date">2024</p>
                            </div>

                            <div className="timeline-card">
                                <h3>Expansão</h3>
                                <p>Primeiros parceiros e expansão regional.</p>
                            </div>
                        </div>

                        <div className="timeline-step">
                            <div className="icon-wrapper">
                                <p className="date">2025</p>
                            </div>

                            <div className="timeline-card">
                                <h3>Novos Estados</h3>
                                <p>Planejada expansão para RJ e MG.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            { /* Seção Estado */}
            <section className="state pd-20">
                <div className="container two-column">
                    <div className="col col-img">
                        <img src="/assets/images/market.png" alt="Barraca de venda de alimentos" />
                    </div>

                    <div className="col col-text">
                        <h2 className="title wd-80">Quer levar o ReAproveita para o seu estado?</h2>
                        <p className="description wd-80">
                            Entre em contato com a gente e vamos juntos combater o desperdício.
                        </p>
                        <button
                            className="btn green big"
                            type="button"
                            onClick={() => navigate('/fale-conosco')}
                        >
                            Fale conosco
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}