import React, { useState } from "react"

const stepsData = [
    {
        title: 'Encontre um mercado pertinho de você',
        description:
            'Ao abrir o app, você verá uma lista de mercados parceiros próximos da sua localização. Assim, fica fácil escolher onde comprar com praticidade e sem precisar sair do seu bairro.',
        color: 'red'
    },
    {
        title: 'Garanta suas ofertas favoritas',
        description:
            'Navegue pelas ofertas disponíveis e encontre alimentos próximos da validade com até 70% de desconto. Dá pra economizar muito e ainda evitar o desperdício. Mas corre — os produtos são limitados!',
        color: 'orange'
    },
    {
        title: 'Paque rapidinho pelo app',
        description:
            'Adicione os itens ao carrinho, finalzie o pedido e escolha a melhor forma de pagamento. tudo é feito direto pelo app, com segurança e em poucos cliques.',
        color: 'yellow'
    },
    {
        title: 'Ajude o planeta com uma atitude simples',
        description:
            'Ao comprar pelo ReAproveita, você não só economiza, como também contribui para um mundo com menos desperdício. É bom para você, para o seu bolso e para o meio ambiente.',
        color: 'yellow-light'
    }
]

export default function HowItWorks() {
    const [currentStep, setCurrentStep] = useState(0)

    return (
        <section className="bg-orange how-work">
            <div className="container two-column">
                <div className="col col-text">
                    <h2 className="title wd-80">Como Funciona</h2>
                    <div className="steps">
                        {stepsData.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`step ${step.color} ${currentStep === index ? 'active' : ''}`}
                                    onClick={() => setCurrentStep(index)}
                                >
                                    { index + 1}
                                </div>
                                {index < stepsData.length - 1 && <div className="line"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                    <h4 className={`subtitle ${stepsData[currentStep].color}`}>
                        { currentStep + 1 }. { stepsData[currentStep].title }
                    </h4>
                    <p className="description wd-80">{ stepsData[currentStep].description }</p>
                    <div className="dots green">
                        {stepsData.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentStep ? 'active' : ''}`}
                                onClick={() => setCurrentStep(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="col col-img">
                    <img src="assets/images/app-hand.png" alt="Mão segurando um celular" />
                </div>
            </div>
        </section>
    )
}