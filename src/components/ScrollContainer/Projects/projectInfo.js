import scriptlySpeakingImg from '../images/project-img/scriptly-speaking.png';
import weatherDashboardImg from '../images/project-img/weather-dashboard.png';
import fusionFablesImg from '../images/project-img/fusion-fables.png';

export const projectInfo = [
    {
        id: 1,
        title:"Scriptly Speaking",
        url:"https://scriptlyspeaking.herokuapp.com/",
        description: "CMS-style blog using express-session npm package for authentication. Users have the ability to create, edit, and delete both posts and comments while logged in. Non-members have the ability to view posts and comments and are prompted to log in if they would like to leave a comment or post.",
        demo_username: "demo",
        demo_password: "Password123!",
        tags: ["Node", "mySQL", "Sequelize", "Express", "Bcrypt", "Handlebars", "CSS"],
        deployLink:"https://scriptlyspeaking.herokuapp.com/",
        githubLink:"https://github.com/elizabetholsavsky/scriptly-speaking",
        vscodeLink:"https://vscode.dev/github/elizabetholsavsky/scriptly-speaking",
        img: scriptlySpeakingImg,
    },
    {
        id: 2,
        title:"Weather Dashboard",
        url:"https://elizabetholsavsky.github.io/weather-dashboard/",
        description: "Retrieves real-time and forecasted weather conditions for the user's city by accessing the Open Weather API. Previous searches are stored in local storage and can be accessed again via dynamically-generated buttons.",
        tags: ["JavaScript", "Bulma", "CSS", "Server-Side", "API" ],
        deployLink:"https://elizabetholsavsky.github.io/weather-dashboard/",
        githubLink:"https://github.com/elizabetholsavsky/weather-dashboard",
        vscodeLink:"https://vscode.dev/github/elizabetholsavsky/weather-dashboard",
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
        img: fusionFablesImg,
    },
];