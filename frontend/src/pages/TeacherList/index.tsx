import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from "../../components/Input";
import Select from "../../components/Select";

import './styles.css';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available teachers.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Matematica", label: "Matematica" },
                            { value: "Ingles", label: "Ingles" },
                            { value: "Historia", label: "Historia" },
                            { value: "Fisica", label: "Fisica" },
                            { value: "Portugues", label: "Portugues" },
                            { value: "Quimica", label: "Quimica" },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" },
                        ]}
                    />

                    <Input name="time" label="Hora" type="time" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}