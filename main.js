// script.js

const data = {
    author: "Avinash Prajapati",
    contact: {
        email: "aviavi61107@gmail.com",
        twitter: "https://x.com/profile_avinash",
        linkedin: "https://www.linkedin.com/in/avinash-prajapati-296918188?",
        github: "https://github.com/AvinashPrajapati?tab=repositories"
    },
    skills: [
        {
            title: "Web Developement",
            techs: [
                {
                    type: 'Web Frameworks',
                    tools: [
                        'Python/Django',
                        'Flask',
                        'FastAPI',
                        'Tornado',
                    ]
                },
                {
                    type: 'Frontend Tools',
                    tools: [
                        'ReactJS',
                        'SolidJS',
                        'HTML5 & CSS3',
                        'JQuery',
                        'Ajax',
                    ]
                },
                {
                    type: 'Backend Tools',
                    tools: [
                        'Python',
                        'NodeJS',
                        'Javascript',
                    ]
                },
                
            ]
        },
        {
            title: "API Developement",
            techs: [
                {
                    type: 'API Framework',
                    tools: [
                        'FastAPI',
                        'Python(django)-DRF',
                        'Flask API',
                    ]
                }
            ]
        },
        {
            title: "Databases",
            techs: [
                {
                    type: 'Integration in Application',
                    tools: [
                        'Sqlite',
                        'Mangodb',
                        'Mysql',
                    ]
                }
            ]
        },
        {
            title: "Others",
            techs: [
                {
                    type: 'Server',
                    tools: [
                        'Web Deployment',
                        'Software Architechture and Planning',
                        'SaaS Development',
                        'Websocket/socketio',
                    ]
                },
                {
                    type: 'Desktop Applications',
                    tools: [
                        'Pyqt(Python) Desktop Software',
                        'Sqlite3',
                        'SQLAlchemy',
                        'Pydantic',
                        'Rust Tauri - Desktop App Dev Framework'
                    ]
                }
            ]
        },
        {
            title: "Communication",
            techs: [
                {
                    type: 'Language',
                    tools: [
                        'English - Fluent',
                        'Hindi - FLuent',
                    ]
                },
            ]
        },

    ],
    experience: [
        {
            title: "Fullstack Web Developer",
            company: "Onprice infotech Pvt Lmtd",
            location: "Bhopal,State - MP, Country - India",
            start: "8 Nov. 2024",
            end: "8 Feb. 2024",
            responsibilities: [
                "Component wise development of the application.", 
                "Created more than 3 <b><span class='noted'>SAAS Web Application</span>- [ Hospital Management, Matrimonial Website and Machine Learning Model integration ]</b> using Python's Django Web Framework.",
                'Data Flow Diagram generating using MySQL Workbench.',
                "<b><span class='noted'>Live Search</span></b> using AJAX and Django Rest Framework.",
                "Integrated the ML model (Leaves disease ditection) in Web application from scratch.",
            ],
            tools: ['Python', 'Django', 'ML Model Integration', 'Cache and in-memory Process', 'MySQL']
        },
        {
            title: "Volunteer Software Developer",
            company: "College Events",
            location: "BIET Jhansi, India",
            start: "Jan. 2023",
            end: "March. 2023",
            responsibilities: [
                'Component wise development of the application to avaoid redunded code.', 
                'Database connection and Database Model Design Using ORM',
                'Project Monitering to keep up with deadline schedule.',
            ],
            tools: ['Python','PyQT5 Python','Sqlite', 'SQLAlchemy', 'Pydantic']
        },
    ],
    projects: [
        {
            title: "E-commerce Project Store - Live",
            description: "An e-commerce platform built where I showcase my projects.",
            responsibilities: [
                'Designing project architecture, Dividing the whole project work on daily task basis to meet the schedule time.',
                'Implemeting the live search from scratch for better user experience.',
                'Optimized the SQL queries for fast seach results and Design the Database Table Model to maintain the ACID Properties of the Database.',
                'Implemented the CI/CD of a comment system package without affecting the project code in production.',
                'Implemented the integration of the stripe payment gateway.',
                'Third party API integration.'
            ],
            link: "zenith.pythonanywhere.com",
            start: "2 March 2024",
            end: "15 April 2024",
            tools: ['Django Python', 'Stripe Integration', 'MySQL', 'CI/CD', 'Query Optimization']
        },
        {
            title: "Personal Portfolio",
            description: "A responsive portfolio website showcasing my skills and projects using Github Pages.",
            responsibilities: [
                "Git CLI & Github Pages.",
                "Javascript's Filebase-storage as Database.",
                "Implemented the Modular design to maintain the project architecture in best practice.",
                "Used the Javascript to manipute the DOM and perform the CRUD oprations on the DOM elements on mouse events."
            ],
            link: "https://avinashprajapati.github.io/portfolio/",
            start: "2 oct. 2023",
            end: "15 dec. 2023",
            tools: ['Javascript', 'HTML & CSS']
        },
        
    ],
    education: {
        qualifications: [
            {
                degree: "Bachelor of Technology in Computer Science",
                college: "Bundelkhand institute of Egineering and Technology",
                years: "2019 - 2023",
            },
        ],
    },
    hobbies: ["Travel", "Yoga", "Music"],
};
//
document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("expert_name");
    const emailElement = document.getElementById("contact_mail");
    const twitterElement = document.getElementById("twitter");
    const linkedinElement = document.getElementById("linkedin");
    const githubElement = document.getElementById("github_repo");

    // Populate contact info
    nameElement.textContent = data.author;
    emailElement.innerHTML = `Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a>`;
    twitterElement.innerHTML = `Twitter: <a href="${data.contact.twitter}" target="_blank">Visit profile</a>`;
    linkedinElement.innerHTML = `LinkedIn: <a href="${data.contact.linkedin}" target="_blank">Visit profile</a>`;
    githubElement.innerHTML = `Github: <a href="${data.contact.github}" target="_blank">Visit Repo</a>`;


    // Populate experience
    const experienceSection = document.querySelector(".experience .exp_items");
    data.experience.forEach((job) => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("job");
        jobDiv.innerHTML = `<h3 style="margin-bottom: 5px;">${job.title} at ${job.company}</h3>
                            <p style="margin: 8px 0px;font-size: 12px;color: grey;">${job.location} | ${job.start} - ${job.end}</p>
                            <div class="used_tool"><ul><span><b>Tool used :</b></span>${job.tools.map(tool => `<li>${tool}</li>`).join('')}</ul></div>
                            <span><b>Achievements & Responsibilities :</b></span>
                            <ul class="responsibility_item">${job.responsibilities.map(tool => `<li>${tool}</li>`).join('')}</ul>`;
        experienceSection.appendChild(jobDiv);
    });

    // Populate projects
    const projectsList = document.querySelector(".projects .project_items");
    data.projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3 style="margin-bottom: 5px;">${project.title}</h3>
                                <p style="margin: 8px 0px;font-size: 12px;color: grey;">${project.start} → ${project.end}</p>
                                <div class="used_tool"><ul><span><b>Tool used :</b></span>${project.tools.map(tool => `<li>${tool}</li>`).join('')}</ul></div>
                                <p style="margin-top: 5px;margin-bottom:5px;">${project.description}</p>
                                <span><b>learnt & Achieved :</b></span>
                                <ul class="responsibility_item">${project.responsibilities.map(tool => `<li>${tool}</li>`).join('')}</ul>
                                
                                <a style="font-size: 12px; font-weight:bold;" href="${project.link}" target="_blank">View Project</a>`;
        projectsList.appendChild(projectDiv);
    });

    // Populate education
    const educationSection = document.querySelector(".education");
    data.education.qualifications.forEach((qualification) => {
        const eduDiv = document.createElement("div");
        eduDiv.classList.add("edu");
        eduDiv.style.marginTop = '30px'
        eduDiv.innerHTML = `<h3 style="margin-bottom:5px;">${qualification.degree}</h3>
                            <p style="margin-top:5px;">${qualification.college} → ${qualification.years}</p>`;
        educationSection.appendChild(eduDiv);
    });

    // Populate hobbies
    const hobbiesList = document.querySelector(".hobbies ul");
    data.hobbies.forEach((hobby) => {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbiesList.appendChild(li);
        hobbiesList.style.marginTop = '30px'

    });

    // 
    // Populate accordion based on the data
    // Populate skills
    const accordionContainer = document.querySelector('.accordion');
    data.skills.forEach(skill => {
        const item = document.createElement('div');
        item.classList.add('accordion-item');

        const title = document.createElement('div');
        title.classList.add('accordion-title');
        title.textContent = skill.title;

        const content = document.createElement('div');
        content.classList.add('accordion-content');

        skill.techs.forEach(tech => {
            const techType = document.createElement('h4');
            techType.textContent = tech.type;
            techType.style.marginBottom = '0px'

            const list = document.createElement('ul');
            list.style.marginTop = '0px'
            tech.tools.forEach(tool => {
                const listItem = document.createElement('li');
                listItem.textContent = tool;
                list.appendChild(listItem);
            });

            content.appendChild(techType);
            content.appendChild(list);
        });

        item.appendChild(title);
        item.appendChild(content);
        accordionContainer.appendChild(item);
    });

    const accordionTitles = document.querySelectorAll('.accordion-title');
    const accordionContents = document.querySelectorAll('.accordion-content');

    accordionTitles.forEach(title => {
        title.addEventListener('click', (event) => {
            const content = title.nextElementSibling;

            // Close all other accordion contents
            accordionTitles.forEach(otherTitle => {
                const otherContent = otherTitle.nextElementSibling;
                if (otherContent !== content) {
                    otherContent.style.height = null; // Collapse other content
                }
            });

            // Toggle the current content
            if (content.style.height) {
                content.style.height = null; // Collapse
            } else {
                content.style.height = content.scrollHeight + "px"; // Expand
            }

            event.stopPropagation(); // Prevent click from bubbling up
        });
    });

    // Close all accordions when clicking outside
    document.addEventListener('click', (event) => {
        if (!accordionContainer.contains(event.target)) {
            accordionContents.forEach(content => {
                content.style.height = null; // Collapse all contents
            });
        }
    });

    // Collapse all accordions on window resize
    window.addEventListener('resize', () => {
        accordionContents.forEach(content => {
            content.style.height = null; // Collapse all contents
        });
    });
});
//
// document.addEventListener("DOMContentLoaded", () => {
//     const accordionTitles = document.querySelectorAll('.accordion-title');
//     const accordionContents = document.querySelectorAll('.accordion-content');
//     const accordionContainer = document.querySelector('.accordion'); // Container for the accordion

//     accordionTitles.forEach(title => {
//         title.addEventListener('click', (event) => {
//             const content = title.nextElementSibling;

//             // Close all other accordion contents
//             accordionTitles.forEach(otherTitle => {
//                 const otherContent = otherTitle.nextElementSibling;
//                 if (otherContent !== content) {
//                     otherContent.style.height = null; // Collapse other content
//                 }
//             });

//             // Toggle the current content
//             if (content.style.height) {
//                 content.style.height = null; // Collapse
//             } else {
//                 content.style.height = content.scrollHeight + "px"; // Expand
//             }

//             event.stopPropagation(); // Prevent click from bubbling up
//         });
//     });

//     // Close all accordions when clicking outside
//     document.addEventListener('click', (event) => {
//         // Check if the click is outside the accordion
//         if (!accordionContainer.contains(event.target)) {
//             accordionContents.forEach(content => {
//                 content.style.height = null; // Collapse all contents
//             });
//         }
//     });
//     // Collapse all accordions on window resize
//     window.addEventListener('resize', () => {
//         accordionContents.forEach(content => {
//             content.style.height = null; // Collapse all contents
//         });
//     });
// });
