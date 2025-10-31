document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Numerical Methods Web App",
            imageUrl: "images/numerical-methods.png",
            description: "An interactive web application designed to help students and professionals solve complex numerical methods problems, analyze and compare numerical root-finding algorithms. This tool enables users to input a custom function, f(x), and visualize its graph to identify roots. Key features include the ability to solve for the root using multiple methods simultaneously, including the Bisection, Newton-Raphson, and Secant algorithms. A dedicated convergence plot provides a clear, visual comparison of the performance and rate of convergence for each method, making it an ideal educational tool for students and engineers studying numerical methods.",
            technologies: ["JavaScript", "HTML", "CSS"],
            codeLink: "https://github.com/maaarynet/numerical-methods-webapp",
            demoLink: "https://maaarynet.github.io/numerical-methods-webapp/"
        },
        {
            title: "2D Game",
            imageUrl: "images/2dgame.png",
            description: "This 2D pixel-art platformer was developed in Unity as a focused project to build a strong foundation in C# and core gameplay programming. A central goal was to implement essential mechanics from the ground up, leading to the creation of a robust health system that provides clear visual feedback. This system manages all aspects of the player’s vitality — from damage and healing to death, and uses Mathf.Clamp to ensure health values are always valid. The project was also built for scalability, utilizing a modular prefab workflow for all game objects and carefully organized C# scripts to maintain a clean, designer-friendly Unity Inspector.",
            technologies: ["Unity", "C#", "Game Development"],
            codeLink: "https://github.com/maaarynet/2Dgame",
        },
        {
            title: "Android Calculator App",
            imageUrl: "images/calculator.png",
            description: "Developed a straightforward yet fully functional calculator app in Kotlin, showcasing proficiency with Android project structure and modern development practices. I implemented the core arithmetic logic and organized the code into clean modules for scalability and readability. The UI and UX reflect a polished, minimal design that focuses on user interaction and responsiveness. Through this project, I demonstrated the ability to initialize and configure an Android project from scratch, manage build configuration, and deliver a complete end-to-end app.",
            technologies: ["Android Studio", "Kotlin"],
            codeLink: "https://github.com/maaarynet/calculator",
        },
        {
            title: "Python attendance tracker",
            imageUrl: "images/python-attendance-tracker.png",
            description: "I built a Python desktop Attendance app with a simple GUI that loads a class roster and lets you record daily presence, then persists everything to a CSV file for easy export and review. The codebase is modular: a Student model, a Tracker for marking/checking status, a DataManager for reading/writing attendance.csv, and separate screen files for the splash, main interface, and table view. The UI includes custom imagery (students, classroom, clock) to make the experience friendlier and more visual. The logic evaluates attendance records to decide if a student qualifies for a scholarship, illustrating real-world decision automation.",
            technologies: ["Python"],
            codeLink: "https://github.com/maaarynet/Attendance-app",
        },
        {
            title: "Fruit Shop",
            imageUrl: "images/fruit-shop.png",
            description: "A Java application designed for inventory management that processes daily fruit transactions from a CSV file. The core of the project is built on the Strategy design pattern, which cleanly separates the logic for handling different operations like supply, purchase, and returns. This SOLID-inspired, modular architecture allows for easy extension—new transaction types can be added without modifying existing code. The program reads the data, processes all transactions to update stock levels, and generates a final inventory report, demonstrating practical skills in core Java, file I/O, and maintainable software design.",
            technologies: ["Java"],
            codeLink: "https://github.com/maaarynet/jv-fruit-shop",
        },
        {
            title: "Online Book Store",
            imageUrl: "images/book-store.png",
            description: "I developed an online book store application that allows users to browse, select, and purchase books. Built with Spring Boot, the system follows a clean architecture that separates the presentation, business logic, and data access layers for better maintainability and scalability. It features a dynamic catalog, user authentication, shopping cart functionality, and order processing, reflecting real-world e-commerce workflows. The RESTful backend efficiently manages state and data flow, providing a solid foundation for future frontend or mobile integrations.",
            technologies: ["Java", "Spring Boot"],
            codeLink: "https://github.com/maaarynet/online-book-store",
        },
    ];

    const projectsGrid = document.querySelector(".projects-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modal = document.querySelector(".modal");

    function displayProjects(filter) {
        projectsGrid.innerHTML = "";

        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.addEventListener("click", (e) => {
                if (!e.target.closest('a')) {
                    openModal(project);
                }
            });

            const maxLength = 100;
            const truncatedDescription = project.description.length > maxLength 
                ? project.description.substring(0, maxLength) + "..." 
                : project.description;

            const technologiesHtml = project.technologies.map(tech => `<span>${tech}</span>`).join("");

            const codeLinkHtml = project.codeLink ? `
                <a href="${project.codeLink}" target="_blank" class="project-link-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Code
                </a>` : '';

            const demoLinkHtml = project.demoLink ? `
                <a href="${project.demoLink}" target="_blank" class="project-link-btn demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><polyline points="15 3 21 3 21 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline><line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line></svg>
                    Demo
                </a>` : '';

            projectCard.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p class="project-description">${truncatedDescription}</p>
                    <div class="project-tags">${technologiesHtml}</div>
                    <div class="project-links">${codeLinkHtml}${demoLinkHtml}</div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    function openModal(project) {
        const technologiesHtml = project.technologies.map(tech => `<span>${tech}</span>`).join("");
        const codeLinkHtml = project.codeLink ? `<a href="${project.codeLink}" target="_blank" class="btn btn-secondary">Code</a>` : '';
        const demoLinkHtml = project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="btn btn-primary">Demo</a>` : '';

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${project.title}</h2>
                <!-- UPDATED: Replaced inline style with a class -->
                <img src="${project.imageUrl}" alt="${project.title}" class="modal-project-image">
                
                <h3>About This Project</h3>
                <p>${project.description}</p>
                
                <h3>Technologies Used</h3>
                <div class="tags" style="margin-bottom: 30px;">
                    ${technologiesHtml}
                </div>
                
                <div class="cta-buttons" style="justify-content: flex-start;">
                    ${codeLinkHtml}
                    ${demoLinkHtml}
                </div>
            </div>
        `;
        modalOverlay.style.display = "flex";

        const closeModalButton = modal.querySelector(".close-modal");
        closeModalButton.addEventListener("click", () => {
            modalOverlay.style.display = "none";
        });
    }

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    });

    displayProjects();
});

const timelineItems = document.querySelectorAll('.timeline-content');

timelineItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', () => {
        timelineItems.forEach(item => {
            if (item !== clickedItem) {
                item.classList.remove('active');
            }
        });
        clickedItem.classList.toggle('active');
    });
});

const cld = cloudinary.Cloudinary.new({ cloud_name: 'du1r5wmv6' });

const player = cld.videoPlayer('my-cloudinary-video', {
    publicId: 'Bridging_Code_and_Creativity_hyncum',
    fluid: true,
    controls: true,
    autoplay: false,
    muted: false,
    loop: true,
    logo: false,
    
    posterOptions: {
           publicId: 'thumbnail_ortexq'
    }
});