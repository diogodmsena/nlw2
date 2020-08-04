import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

export default function teacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available teachers.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subjects</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Week day</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </main>
        </div>
    );
}