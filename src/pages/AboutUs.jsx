import { useNavigate } from "react-router-dom"
import Numbers from "../components/Numbers"
import "../styles/about-us.css"

export default function AboutUs() {
    const navigate = useNavigate()

    return (
        <>
            {/* Seção Hero */}
            <section className="hero pd-20">
                <div className="container two-column">
                    <div className="col col-text">
                        <h1 className="title wd-80">Transformando desperdício em oportunidade</h1>
                        <p className="description wd-80">
                            Conectamos supermercados e consumidores para evitar perdas e gerar impacto
                        </p>
                        <button className="btn green big" type="button" onClick={() => navigate('/fale-conosco')}>Fale conosco</button>
                    </div>
                    <div className="col col-img">
                        <img
                            src="/assets/images/app-person.png"
                            alt="Celular com uma pessoa segurando uma sacola de compras"
                        />
                    </div>
                </div>
            </section>


            {/* Seção Sobre nós */}
            <section className="pd-20">
                <div className="container two-row">
                    <h2 className="title wd-100">Sobre nós</h2>
                    <p className="description" style={{textAlign: 'center'}}>
                        A Reaproveita é uma plataforma digital — disponível em app e versão web — que conecta
                        supermercados e consumidores para combater o desperdício de alimentos. Nosso foco é
                        transformar produtos próximos do vencimento em oportunidades de economia e impacto positivo,
                        tanto para quem vende quanto para quem compra. Inspirada na ODS 2 da ONU (Fome Zero e
                        Agricultura Sustentável), nossa solução promove um ciclo sustentável: supermercados reduzem
                        perdas, consumidores têm acesso a alimentos mais acessíveis, e o meio ambiente agradece.
                    </p>
                </div>
            </section>

             { /* Seção Missão, Visão e Valores */}
            <section className="values pd-20">
                <div className="container values-grid">
                    <div className="value-card pd-20">
                        <img className="value-icon" src="assets/icons/mission.png" alt="Icone de foguete"></img>
                        <h3 className="value-title">Missão</h3>
                        <p className="value-description">
                            Reduzir o desperdício e conectar pessoas a alimentos acessíveis.
                        </p>
                    </div>

                    <div className="value-card pd-20">
                        <img className="value-icon" src="assets/icons/vision.png" alt="Icone de olho com indicador de gráfico"></img>
                        <h3 className="value-title">Visão</h3>
                        <p className="value-description">
                            Ser a principal plataforma de reaproveitamento alimentar do Brasil.
                        </p>
                    </div>

                    <div className="value-card pd-20">
                        <img className="value-icon" src="assets/icons/values.png" alt="Diamante"></img>
                        <h3 className="value-title">Valores</h3>
                        <p className="value-description">
                            Sustentabilidade, inclusão e impacto social.
                        </p>
                    </div>
                </div>
            </section>

            <Numbers isBackgroundOrange={false} />
        </>
    )
}