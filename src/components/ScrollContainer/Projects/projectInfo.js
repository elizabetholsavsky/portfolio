import scriptlySpeakingAvif from '../images/project-img/avif/scriptly-speaking.avif';
import weatherDashboardAvif from '../images/project-img/avif/weather-dashboard.avif';
import fusionFablesAvif from '../images/project-img/avif/fusion-fables.avif';
import schedaddyAvif from '../images/project-img/avif/schedaddy.avif';

import scriptlySpeakingImg from '../images/project-img/img/scriptly-speaking.png';
import weatherDashboardImg from '../images/project-img/img/weather-dashboard.png';
import fusionFablesImg from '../images/project-img/img/fusion-fables.png';
import schedaddyImg from '../images/project-img/img/schedaddy.png';

export const projectInfo = [
    {
        id: 1,
        title:"Scriptly Speaking",
        url:"https://scriptlyspeaking.tech/",
        description: "CMS-style blog using express-session npm package for authentication. Users have the ability to create, edit, and delete both posts and comments while logged in. Non-members have the ability to view posts and comments and are prompted to log in if they would like to leave a comment or post.",
        demo_username: "demo",
        demo_password: "Password123!",
        tags: ["Node", "mySQL", "Sequelize", "Express", "Bcrypt", "Handlebars", "CSS"],
        deployLink:"https://scriptlyspeaking.tech/",
        githubLink:"https://github.com/elizabetholsavsky/scriptly-speaking",
        vscodeLink:"https://vscode.dev/github/elizabetholsavsky/scriptly-speaking",
        avif: scriptlySpeakingAvif,
        img: scriptlySpeakingImg,
    },
    {
        id: 2,
        title:"Weather Dashboard",
        url:"https://elizabetholsavsky.github.io/weather-dashboard/",
        description: "Retrieves real-time and forecasted weather conditions for the user's city by accessing the Open Weather API. Previous searches are stored in local storage and can be accessed again via dynamically-generated buttons.",
        tags: ["JavaScript", "Bulma", "CSS", "Server-Side API" ],
        deployLink:"https://elizabetholsavsky.github.io/weather-dashboard/",
        githubLink:"https://github.com/elizabetholsavsky/weather-dashboard",
        vscodeLink:"https://vscode.dev/github/elizabetholsavsky/weather-dashboard",
        avif: weatherDashboardAvif,
        img: weatherDashboardImg,
    },
    {
        id: 3,
        title:"Fusion Fables Team Project",
        url:"https://github.com/HunterHester/fusion-fables",
        description: "Blog-style writing platform for collaborative projects where users can share ideas and contribute to others. Worked collaboratively with teammates in agile workflow using GitHub projects and kanban board. Resolved git conflicts, pair-programmed, and problem-solved to surpass our MVP. Contributed to back end and routing.",
        demo_username: "demo",
        demo_password: "Password123!",
        tags: ["Node", "mySQL", "Sequelize", "Express", "Bcrypt", "Handlebars", "Bootstrap"],
        deployLink:"http://www.fusionfables.com/",
        githubLink:"https://github.com/HunterHester/fusion-fables",
        vscodeLink:"https://vscode.dev/github/HunterHester/fusion-fables",
        avif: fusionFablesAvif,
        img: fusionFablesImg,
    },
    {
        id: 4,
        title:"Schedaddy Team Project",
        url:"https://schedaddy-0dffdc6ab2cd.herokuapp.com/",
        description: "Schedaddy is a Customer relationship management (CRM) platform with the intent to streamline your scheduling for your company. Schedaddy offers the ability to manage employees, roles, and schedules with the greatest of ease.",
        demo_username: "demo@mail.com",
        demo_password: "Password123!",
        tags: ["Node", "Express", "React", "MongoDB", "Mongoose", "GraphQL", "Bootstrap", "Bcrypt", "JSON Web Tokens", "Faker-js"],
        deployLink:"https://schedaddy-0dffdc6ab2cd.herokuapp.com/",
        githubLink:"https://github.com/cmcnamara15/Schedaddy",
        vscodeLink:"https://vscode.dev/github/cmcnamara15/Schedaddy",
        avif: schedaddyAvif,
        img: schedaddyImg,
    },
];