import { useState } from "react"
import "../styles/contact.css"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const validateEmail = (email) => email.includes('@') && email.includes('.')
    const validateFullName = (name) => name.trim().split(' ').length >= 2;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData
        const newErrors = {}
        let isValid = true

        if (!name) {
            newErrors.name = 'O campo nome é obrigatório.'
            isValid = false
        } else if (!validateFullName(name)) {
            newErrors.name = 'Digite seu nome completo (nome e sobrenome).'
            isValid = false
        }

        if (!email) {
            newErrors.email = 'O campo email é obrigatório.'
            isValid = false
        } else if (!validateEmail(email)) {
            newErrors.email = 'Insira um email válido.'
            isValid = false
        }

        if (!subject) {
            newErrors.subject = 'O campo assunto é obrigatório.'
            isValid = false;
        }

        if (!message) {
            newErrors.message = 'O campo mensagem é obrigatório.'
            isValid = false
        } else if (message.length < 30) {
            newErrors.message = 'A mensagem deve ter pelo menos 30 caracteres.'
            isValid = false
        } else if (message.length > 500) {
            newErrors.message = 'A mensagem não pode passar de 500 caracteres.'
            isValid = false
        }

        if (!isValid) {
            setErrors(newErrors)
            return
        }

        alert('Mensagem enviada com sucesso! Aguarde respostas no email escrito.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
    };

    return (
        <section className="contact pd-20">
            <div className="container two-column">
                <div className="col col-text">
                    <h1 className="title">Vamos conversar?</h1>
                    <p className="description">
                        Se você é representante de supermercado ou quer saber mais sobre o
                        Reaproveita, preencha o formulário ou fale diretamente com a gente.
                    </p>
                    <div className="contact-methods">
                        <div className="method-item">
                            <h4 className="text-upper">Email</h4>
                            <a href="mailto:contato@reaproveita.com.br">
                                contato@reaproveita.com.br
                            </a>
                        </div>
                        <div className="method-item">
                            <h4 className="text-upper">Telefone p/ contato</h4>
                            <p>(11) 99999-9999</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h3 className="subtitle orange text-upper">Nos mande uma mensagem</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <small className="error-message">{errors.name}</small>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <small className="error-message">{errors.email}</small>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Assunto"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <small className="error-message">{errors.subject}</small>
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Mensagem"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <small className="error-message">{errors.message}</small>
                        </div>
                        <button className="btn green big" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}