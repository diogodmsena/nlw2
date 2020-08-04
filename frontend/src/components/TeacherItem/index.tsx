import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/59977017?s=460&u=d325a44ecbbf380da68ea0f200fcea7e5b9be0ab&v=4" alt="Diogo Sena"/>
                <div>
                    <strong>Diogo Sena</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
            Meu lero lero
            <br/>
            O que temos que ter sempre em mente é que a consulta aos diversos
            militantes faz parte de um processo de gerenciamento do orçamento setorial.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Contact us
                </button>
            </footer>
        </article>
    );
}