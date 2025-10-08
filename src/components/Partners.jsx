const partnerLogos = [
    { src: "/assets/images/company-1.png", alt: "Logo da Empresa 1" },
    { src: "/assets/images/company-2.png", alt: "Logo da Empresa 2" },
    { src: "/assets/images/company-3.png", alt: "Logo da Empresa 3" },
    { src: "/assets/images/company-4.png", alt: "Logo da Empresa 4" },
    { src: "/assets/images/company-5.png", alt: "Logo da Empresa 5" },
    { src: "/assets/images/company-6.png", alt: "Logo da Empresa 6" },
]

export default function Partners() {
    return (
        <section className="partners pd-20">
            <div className="container two-row">
                <h2 className="title wd-100">Parceiros</h2>
                <div className="companies-content">
                    {partnerLogos.map((partner, index) => (
                        <img key={index} src={partner.src} alt={partner.alt} />
                    ))}
                </div>
            </div>
        </section>
    )
}
