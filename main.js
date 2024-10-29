// script.js

const data = {
    author: "Avinash Prajapati",
    contact: {
        email: "avinash@example.com",
        twitter: "https://twitter.com/yourprofile",
        linkedin: "https://linkedin.com/in/yourprofile"
    },
    skills: [
            {
                title: "Web Developement",
                techs: [
                    {
                        type:'Frontend Tools',
                        tools:[
                            'Javascript',
                            'ReactJS'
                        ]
                    },
                    {
                        type:'Backend Tools',
                        tools:[
                            'Javascript',
                            'ReactJS'
                        ]
                    }
                ]
            },
            {
                title: "API Developement",
                techs: [
                    {
                        type:'Tech Tools',
                        tools:[
                            'FastAPI',
                            'Python(django)-DRF',
                            'Flask API',
                            'NodeJS API'
                        ]
                    }
                ]
            },
         
        ],
    experience: [
        {
            title: "Frontend Developer",
            company: "Tech Solutions",
            location: "City, Country",
            start: "2 oct. 2023",
            end: "15 dec. 2023",
            responsibilities: "Developing responsive user interfaces using React.",
        },
        {
            title: "Intern",
            company: "Web Innovations",
            location: "City, Country",
            start: "2 oct. 2023",
            end: "15 dec. 2023",
            responsibilities:
                "Assisted in developing web applications and gained experience in front-end technologies.",
        },
    ],
    projects: [
        {
            title: "Personal Portfolio",
            description:
                "A responsive portfolio website showcasing my skills and projects.",
            link: "https://yourportfolio.com",
            start: "2 oct. 2023",
            end: "15 dec. 2023",
        },
        {
            title: "E-commerce Site",
            description: "An e-commerce platform built with React and Node.js.",
            link: "https://yourproject.com",
            start: "2 oct. 2023",
            end: "15 dec. 2023",
        },
    ],
    education: {
        qualifications: [
            {
                degree: "Bachelor of Science in Computer Science",
                college: "ABC University",
                years: "2018 - 2022",
            },
        ],
    },
    hobbies: ["Coding", "Reading", "Traveling", "Photography"],
};
//
document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("expert_name");
    const emailElement = document.getElementById("contact_mail");
    const twitterElement = document.getElementById("twitter");
    const linkedinElement = document.getElementById("linkedin");

    // Populate contact info
    nameElement.textContent = data.author;
    emailElement.innerHTML = `Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a>`;
    twitterElement.innerHTML = `Twitter: <a href="${data.contact.twitter}" target="_blank">Visit profile</a>`;
    linkedinElement.innerHTML = `LinkedIn: <a href="${data.contact.linkedin}" target="_blank">Visit profile</a>`;


    // Populate experience
    const experienceSection = document.querySelector(".experience");
    data.experience.forEach((job) => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("job");
        jobDiv.style.marginTop = '30px';
        jobDiv.innerHTML = `<h3 style="margin-bottom: 5px;">${job.title} at ${job.company}</h3>
                            <p style="margin: 8px 0px;font-size: 12px;color: grey;">${job.location} | ${job.start} - ${job.end}</p>
                            <p style="margin-top: 5px;margin-bottom: 25px;">${job.responsibilities}</p>`;
        experienceSection.appendChild(jobDiv);
    });

    // Populate projects
    const projectsList = document.querySelector(".projects");
    data.projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.style.marginTop = '30px';
        projectDiv.innerHTML = `<h3 style="margin-bottom: 5px;">${project.title}</h3>
                                <p style="margin: 8px 0px;font-size: 12px;color: grey;">${project.start} → ${project.end}</p>
                                <p style="margin-top: 5px;margin-bottom:5px;">${project.description}</p>
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
                            <p style="margin-top:5px;">${qualification.college} | ${qualification.years}</p>`;
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
