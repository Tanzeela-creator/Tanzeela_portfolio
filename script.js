const projects = [

    // ==========================================
    // UNIVERSITY / MAJOR PROJECTS
    // ==========================================

    {
        title: "AI-Based Facial Recognition Attendance System",
        description:
            "Developed a real-time computer vision attendance system with an interactive admin dashboard featuring live detection, manual attendance overriding, CSV report exports, and a student registration portal.",
        technologies:
            "Python | ArcFace | YuNet | OpenCV | Streamlit"
    },

    {
        title: "Full-Stack Banking Website",
        description:
            "Engineered a web application featuring secure login, account creation, transaction history, and balance inquiry modules using a PHP backend connected to MySQL.",
        technologies:
            "HTML | CSS | JavaScript | PHP | MySQL"
    },

    {
        title: "Restaurant Frontend Website",
        description:
            "Designed a responsive restaurant frontend interface with customized Home, Menu, and About sections.",
        technologies:
            "HTML | CSS | JavaScript | Responsive Design"
    },

    {
        title: "Wafer Fault Detection System",
        description:
            "Trained and deployed a Machine Learning model to detect manufacturing anomalies in silicon wafers.",
        technologies:
            "Python | TensorFlow | Keras | CNN | Machine Learning"
    },

    {
        title: "AI Fire Detection System",
        description:
            "Engineered a real-time fire detection application using digital image processing on Raspberry Pi with a camera module.",
        technologies:
            "Python | Computer Vision | Raspberry Pi | Image Processing"
    },

    {
        title: "Rocky Linux Server Hardening",
        description:
            "Implemented security protocols and configurations to protect a Rocky Linux server environment from vulnerabilities.",
        technologies:
            "Rocky Linux | Linux | Server Hardening"
    },

    {
        title: "MATLAB GUI Calculator",
        description:
            "Designed and programmed an interactive mathematical calculator using MATLAB GUI tools.",
        technologies:
            "MATLAB | GUI | Programming"
    },

    {
        title: "Smart Dustbin System",
        description:
            "Built an automated touchless waste disposal system using a microcontroller and ultrasonic sensors.",
        technologies:
            "Arduino | Ultrasonic Sensor | Embedded Systems"
    },

    {
        title: "AI Mask Detection System",
        description:
            "Developed a real-time computer vision pipeline to detect mask compliance in live camera feeds.",
        technologies:
            "Python | Computer Vision | TensorFlow | OpenCV"
    },

    {
        title: "C++ Calculator",
        description:
            "Programmed a calculator application in C++ using core Object-Oriented Programming concepts.",
        technologies:
            "C++ | OOP | Programming"
    },


    // ==========================================
    // INTERNSHIP / WEB DEVELOPMENT PROJECTS
    // ==========================================

    {
        title: "To-Do List",
        description:
            "Built an interactive task management application where users can add, manage, complete, and remove tasks.",
        technologies:
            "HTML | CSS | JavaScript | DOM Manipulation"
    },

    {
        title: "Weather Dashboard",
        description:
            "Created a responsive weather application that displays weather information through an interactive user interface.",
        technologies:
            "HTML | CSS | JavaScript | API"
    },

    {
        title: "Pricing Layout",
        description:
            "Designed a responsive pricing section with multiple pricing plans and modern card-based layouts.",
        technologies:
            "HTML | CSS | Responsive Design"
    },

    {
        title: "Notes App",
        description:
            "Developed a notes application that allows users to create, manage, and organize notes through an interactive interface.",
        technologies:
            "HTML | CSS | JavaScript | DOM"
    },

    {
        title: "Animated Landing Page",
        description:
            "Created a modern responsive landing page with attractive animations and interactive UI elements.",
        technologies:
            "HTML | CSS | JavaScript | CSS Animations"
    },

    {
        title: "Profile Card",
        description:
            "Designed a responsive personal profile card using modern HTML and CSS layout techniques.",
        technologies:
            "HTML | CSS | Flexbox"
    },

    {
        title: "GitHub Profile / Portfolio",
        description:
            "Created a developer profile interface to present personal information, skills, projects, and development work.",
        technologies:
            "HTML | CSS | JavaScript"
    },

    {
        title: "DOM Manipulation Project",
        description:
            "Practiced JavaScript DOM manipulation by dynamically creating, modifying, and interacting with webpage elements.",
        technologies:
            "HTML | CSS | JavaScript | DOM"
    },

    {
        title: "Flexbox & CSS Grid Layout",
        description:
            "Built responsive layouts while practicing CSS Flexbox and Grid techniques for different screen sizes.",
        technologies:
            "HTML | CSS | Flexbox | CSS Grid"
    },

    {
        title: "Responsive Portfolio Website",
        description:
            "Developed a multi-page responsive portfolio website with Home, Projects, About, and Contact pages.",
        technologies:
            "HTML | CSS | JavaScript | Responsive Design"
    }

];


// ==========================================
// DISPLAY PROJECTS DYNAMICALLY
// ==========================================

const projectContainer =
    document.getElementById("projectContainer");

if (projectContainer) {

    projects.forEach(function(project) {

        const card = document.createElement("div");

        card.classList.add("project-card");

        card.innerHTML = `

            <div class="project-icon">
                💻
            </div>

            <h2>${project.title}</h2>

            <p>${project.description}</p>

            <div class="technologies">
                ${project.technologies}
            </div>

        `;

        projectContainer.appendChild(card);

    });

}