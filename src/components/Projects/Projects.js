import React from 'react';
import './Projects.css';

const ProjectsList = [
    {
        projectName: 'University of Manitoba',
        cover: require('../../imgs/goBisons.png'),
        type: 'Web/Landing Page',
        technologies: 'HTML5, CSS3, JavaScript, Knockout, LESS',
        url: 'http://gobisons.ca/'
    },
    {
        projectName: 'Augsburg College',
        cover: require('../../imgs/Augsburg.jpg'),
        type: 'Web/ Landing Page',
        technologies: 'HTML5, CSS3, JavaScript, Knockout, Less ',
        url: 'http://athletics.augsburg.edu/index.aspx'
    },
    {
        projectName: 'PantherSuite',
        cover: require('../../imgs/panthersuite.jpg'),
        type: 'Web/Landing Page',
        technologies: 'HTML5, CSS3, SASS, React, Firebase, styled-components ',
        url: 'https://panthersuit-2cf64.firebaseapp.com/#/'
    },
    {
        projectName: 'Venus Concept',
        cover: require('../../imgs/venusconcept.jpg'),
        type: 'Web/Landing Page',
        technologies: 'HTML5, CSS3, JavaScript, WordPress',
        url: 'https://venusconcept.network/template-1-demo-1/'
    },
    {
        projectName: 'Ink Tattoo',
        cover: require('../../imgs/inktattoo.jpg'),
        type: 'Web/Landing Page',
        technologies: 'HTML5, CSS3, React, Firebase ',
        url: 'https://goo.gl/4zia5B'
    },
    {
        projectName: 'All The Money in the World',
        cover: require('../../imgs/allthemoney.jpg'),
        type: 'Web/Banner',
        technologies: 'HTML5, CSS3, JavaScript, GreenSock ',
        url: 'https://goo.gl/Dn9a5R'
    },
    {
        projectName: 'MoonPig',
        cover: require('../../imgs/moonpig.jpg'),
        type: 'Web/Banner',
        technologies: 'HTML5, CSS3, JavaScript, GreenSock ',
        url: 'https://goo.gl/EBje45'
    },
    {
        projectName: 'Mark',
        cover: require('../../imgs/mark.jpg'),
        type: 'Web/Banner',
        technologies: 'HTML5, CSS3, JavaScript, GreenSock',
        url: 'https://goo.gl/BAPVQC'
    },

];
const Projects = props => {

    const projectItems = ProjectsList.map((item, idx) => {
        return (
            <li className="Projects__project" key={idx}>
                <a className="Project__inner" target="_blank" href={item.url}>
                    <div className="Project__bg" style={{ backgroundImage: `url(${item.cover})` }}></div>
                    <div className="Project__info">
                        <span className="Project__title">{item.projectName}</span>
                        <div className="Project__info-row">
                            <span className="Project__subtitle">Project Type:</span>
                            <div>
                                <span>{item.type}</span>
                            </div>
                        </div>
                        <div className="Project__info-row">
                            <span className="Project__subtitle">Technologies:</span>
                            <div>
                                <span>{item.technologies}</span>
                            </div>
                        </div>
                    </div>

                </a>
            </li>
        );
    });

    return (
        <div className="Projects">
            <div className="Projects__wrapper">
                <ul className="Projects--list">
                    {projectItems}

                </ul>

            </div>

        </div>
    );
};

export default Projects;