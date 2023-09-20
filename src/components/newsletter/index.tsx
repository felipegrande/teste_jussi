import './styles.css';
import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState('')
    const [emailSucess, setEmailSucess] = useState(false)
    const handleSubmit = (event: any) => {
        event.preventDefault();
        emailValidation(email)
    }
    function emailValidation(field: string) {
        let user = field.substring(0, field.indexOf("@"));
        let domain = field.substring(field.indexOf("@") + 1, field.length);
        if ((user.length >= 1) &&
            (domain.length >= 3) &&
            (user.search("@") === -1) &&
            (domain.search("@") === -1) &&
            (user.search(" ") === -1) &&
            (domain.search(" ") === -1) &&
            (domain.search(".") !== -1) &&
            (domain.indexOf(".") >= 1) &&
            (domain.lastIndexOf(".") < domain.length - 1)) {
            setMsg("E-mail cadastrado com sucesso :)");
            setEmailSucess(true)
        }
        else {
            setMsg("E-mail invalido");
        }
    }
    return (
        <section className='newsletter_container'>
            <h3 className='newsletter_container_text'>receba novidades da nossa área <br />de produtos digitais.</h3>
            {
                !emailSucess && (
                    <form className='newsletter_container_form' >
                        <input className='newsletter_container_form_input' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Digite seu e-mail' />
                        <button className='newsletter_container_form_button' onClick={handleSubmit} >Cadastrar</button>
                    </form>
                )
            }
            <div className='newsletter_msg'>
                <span >{msg}</span>
            </div>
        </section>
    );
}
export default Newsletter;