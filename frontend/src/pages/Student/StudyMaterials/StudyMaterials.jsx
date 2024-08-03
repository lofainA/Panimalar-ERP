import React from "react";
import StudentSidebar from "../../../components/Student/Sidebar/StudentSidebar";

function StudyMaterials() {

    const details = {
        semester: 5,
        department: "CSE"
    };

    const subs = [
        {
            subject: "Theory of Computation",
            units: [
                {
                    name: "Automata Fundamentals",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Regular Expressions And Languages",
                    link: "https://drive.google.com/file/d/1phTSxEflLvzwSAkLwLDjcYvl5e-fIN7v/view"
                },
                {
                    name: "Context Free Grammar and Language",
                    link: "https://drive.google.com/file/d/1UeS2DbyTO_cJKZowBgWNxWek5Jjr_2P7/view"
                },
                {
                    name: "Properties of Context Free Languages",
                    link: "https://drive.google.com/file/d/1-K1Qp3scK_ZuJrw8Id-L7hFXrY-ma1Yw/view"
                },
                {
                    name: "Undecidability",
                    link: "https://drive.google.com/file/d/1hY6tuF-_EuXfPtl9KNOX0MnMLFkL76Wm/view"
                },
            ]
        },
        {
            subject: "Algebra and Number Theory",
            units: [
                {
                    name: "Automata Fundamentals",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Regular Expressions And Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Context Free Grammar and Language",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Properties of Context Free Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Undecidability",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
            ]
        },
        {
            subject: "Oragnizational and Behavioural Practices",
            units: [
                {
                    name: "Automata Fundamentals",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Regular Expressions And Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Context Free Grammar and Language",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Properties of Context Free Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Undecidability",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
            ]
        },
        {
            subject: "Object Oriented Analysis and design",
            units: [
                {
                    name: "Automata Fundamentals",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Regular Expressions And Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Context Free Grammar and Language",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Properties of Context Free Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Undecidability",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
            ]
        },
        {
            subject: "Internet Programming",
            units: [
                {
                    name: "Automata Fundamentals",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Regular Expressions And Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Context Free Grammar and Language",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Properties of Context Free Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Undecidability",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
            ]
        },
        {
            subject: "Ethical Hacking",
            units: [
                {
                    name: "Automata Fundamentals",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Regular Expressions And Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Context Free Grammar and Language",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Properties of Context Free Languages",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
                {
                    name: "Undecidability",
                    link: "https://drive.google.com/file/d/1ubVantT08lmHtuxW5o4srJmVdX4T5gd3/view"
                },
            ]
        },
    ]

    /* 
    const units = [
        "Automata Fundamentals",
        "Regular Expressions And Languages",
        "Context Free Grammar and Language",
        "Properties of Context Free Languages",
        "Undecidability"
    ]; */


    return(
        <div class="container">
            <div class="d-flex flex-column p-4 w-100 h-100">
                <div class="mx-4">
                    <h3>{details.department} Semester {details.semester} Notes</h3>
                    <hr/>
                </div>  
                <div class="px-4 d-flex flex-column" style={{gap:"1rem"}}>
                    <div class="fs-4">Subjects</div>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        {subs.map(sub => (
                            <button type="button" class="btn btn-outline-secondary">
                                <a href={`#`+sub.subject} style={{color:"inherit", textDecoration: "none"}}>
                                    { sub.subject }
                                </a>
                            </button>
                        ))}
                    </div>
                </div>
                {subs.map(sub => (
                    <div class="mx-4  d-flex flex-column gap-4 mt-5" id={sub.subject}>
                        <div style={{width:"fit-content"}}>
                            <div class="fs-4">{sub.subject}</div>
                            <hr class="p-0 m-1"/>
                        </div>
                        <div class="d-flex flex-wrap" style={{gap:"1.5rem"}}>
                            {sub.units.map((unit, index) => (
                                <div class="card " style={{width: "18rem"}}>
                                        <div class="card-body d-flex flex-column justify-content-between" key={index}>
                                            <h5 class="card-title">Unit {index+1}</h5>
                                            <h6 class="card-text">{unit.name}</h6>
                                            <div class="d-flex" style={{gap: "1rem"}}>
                                                <a href={unit.link} target="_blank" rel="noopener noreferrer"><button class="btn btn-success">Download<i class="ps-2 bi bi-download"></i></button></a>
                                                <a href={unit.link} target="_blank" rel="noopener noreferrer"><button href="#" class="btn btn-danger">Videos<i class="ps-2 bi bi-play-btn"></i></button></a>
                                            </div> 
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudyMaterials