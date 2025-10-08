import { useNavigate } from "react-router-dom"

export default function WhereWe() {
    const navigate = useNavigate()
    return (
        <>
            { /* Seção Hero */ }
            <section class="hero pd-20">
                <div className="container two-column">
                    <div class="col col-text">
                        <h1 class="title wd-80">Onde já estamos fazendo a diferença?</h1>
                        <p class="description wd-80">
                            Veja onde o ReAproveita já está ajudando a reduzir o desperdício.
                        </p>
                    </div>
                    <div class="col col-img">
                        <img src="/assets/images/map.png" alt="Mapa do Brasil com o estado de SP pintado" />
                    </div>
                </div>
            </section>

            { /* Seção Estado */}
            <section class="state pd-20">
                <div className="container two-column">
                    <div class="col col-img">
                        <img src="/assets/images/market.png" alt="Barraca de venda de alimentos" />
                    </div>

                    <div class="col col-text">
                        <h2 class="title wd-80">Quer levar o ReAproveita para o seu estado?</h2>
                        <p class="description wd-80">
                            Entre em contato com a gente e vamos juntos combater o desperdício.
                        </p>
                        <button
                            class="btn green big"
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