import './styles.css';
import React, { useState } from 'react';

function Search() {
    const resultEmpty = {
        bairro: "",
        cep: "",
        complemento: "",
        ddd: "",
        gia: "",
        ibge: "",
        localidade: "",
        logradouro: "",
        siafi: "",
        uf: ""
    }
    const [cep, setCep] = useState("");
    const [result, setResult] = useState(resultEmpty);
    const [error, setError] = useState(false);
    const queryCEP = () => {
        let isNumeric = /^\d+(?:\.\d+)?$/.test(cep)
        if (cep.length === 8 && isNumeric) {
            searchAddress(cep)
        } else {
            setError(true);
        }
    }
    const closeModal = () => {
        setResult(resultEmpty)
    }
    async function searchAddress(cep: any) {
        try {
            let searchCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            let cepJson = await searchCEP.json()
            if (cepJson.erro) {
                setResult(resultEmpty);
                setError(true);
                throw Error("cep não existe!")
            }
            setError(false)
            setResult(cepJson)
        } catch (erro) {
            console.log('Erro de cominicação da API: ', erro)
        }
    }
    const lupa = require('../../assets/image/search.png')
    const { logradouro, localidade, uf } = result;
    return (
        <section className='searchArea'>
            <div className={`${error ? 'searchArea_container--error' : ''} searchArea_container`}>
                <input className="searchArea__input" type='text' placeholder='Digite seu CEP' maxLength={8} minLength={8} onChange={(e) => setCep(e.target.value)} />
                <button className='searchArea_button' onClick={queryCEP}><img src={lupa} alt='icone da lupa' /></button>
            </div>
            {
                result && logradouro && !error && (
                    <section className='searchArea_dropdown'>
                        <div className='searchArea_dropdown-close' onClick={closeModal}>
                            x
                        </div>
                        <div className='searchArea_dropdown-content' >
                            <p className='searchArea_dropdown-title' >Dados do Endereço:</p>
                            <p className='searchArea_dropdown-text' > {logradouro}  </p>
                            <p className='searchArea_dropdown-text'> {localidade}/{uf}</p>
                        </div>
                    </section>
                )
            }
        </section>
    );
}
export default Search;