const quizData = {
    easy: [
        {
            question: "What does HTML stands for??",
            choices: ["HypeTip Markup Language", "Hyper time Logic", "Hyper Text Markup Language", "Hyper Text Makeup Language"],
            correctAnswer: 2,
            explanation: "HTML stands for Hyper Text Markup Language. It is a standard language used for creating and structuring web pages. HTML uses tags to define elements within a document, such as headings, paragraphs, links, images, and more. These tags provide instructions to web browsers on how to display the content. HTML is the backbone of every web page and is essential for creating and formatting the content that users see on websites."
        },
        {
            question: "What does DNS stand for?",
            choices: ["Domain Name System", "Deliver Next Server", "Domain Number System", "Decimal Number System"],
            correctAnswer: 0,
            explanation: "DNS stands for Domain Name System. It is a decentralized naming system for computers, services, or any resources connected to the internet or a private network. It translates domain names (such as www.example.com) into IP addresses, allowing users to access websites and other online resources using easily memorable names instead of numerical IP addresses. The DNs system also provides other important functionalities such as domain registration, management, and resolution of domain name conflicts."
        },
        {
            question: "What does CMS stands for?",
            choices:["Content Mashup Service", "Control Main Service", "Central Management Server", "Content Management System"],
            correctAnswer: 4,
            explanation: "A Content Management System (CMS) is a software application that allows users to create, manage, and modify digital content on a website without the need for technical knowledge. It provides a user-friendly interface for organizing and publishing content, making it easier for individuals or organizations to maintain and update their websites. Content Monitoring System, Content Managed Storage, and Content Maniac Sausage are not valid explanations for the acronym CMS.",
        },
        {
            question: "What is the logo for Linux?",
            choices: ["Rabbit", "Flag", "Penguin", "Tortoise"],
            correctAnswer: 2,
            explanation: "The logo for Linux is a penguin. The penguin, named Tux, was chosen as the logo for Linux because it represents the mascot of the Linux kernel. Tux has become a symbol for the Linux operating system and is widely recognized by the community. The choice of a penguin as the logo is a playful and unique representation of the open-source nature of Linux.",
        },
        {
            question: "Who owns MySQL?",
            choices: ["Linux", "Ruby", "Open Source", "Microsoft"],
            correctAnswer: 2,
            explanation: "MySQL is owned by the community of developers and users who contribute to its development and use it freely. It is an open source database management system, which means that its source code is available to the public and can be modified, distributed, and used by anyone.",
        },
        {
            question: "What type of license does PHP fall under?",
            choices: ["Open Source", "Drivers License", "Closed Source", "Creative Commons"],
            correctAnswer: 0,
            explanation: "PHP falls under the category of open source license. Open source refers to a type of software license that allows users to freely use, modify, and distribute the software. This means that PHP is available for anyone to use, study, and modify without any restrictions.",
        },
        {
            question: "What does ISP mean?",
            choices: ["Internet system processor", "Internal service program", "Internet service program", "Internet service provider"],
            correctAnswer: 3,
            explanation: "ISP stands for Internet Service Provider. An ISP is a company or organization that provides access to the internet for individuals or other organizations. They offer various services such as internet connectivity, email services, web hosting, and virtual private networks (VPNs).",
        },
        {
            question: "What does a web host do?",
            choices: ["Give you information about your website", "Provide a place for you to store your website", "Provide you with IP address", "Give you information on programming"],
            correctAnswer: 1,
            explanation: "A web host provides you with a location to store your website. This means that they offer server space where you can upload and store all the files and data that make up your website. This allows your website to be accessible to users on the internet. The web host will also ensure that your website remains online and accessible to visitors at all times.",
        },
        {
            question: "Which of these is an Internet Protocol (IP) resource?",
            choices: ["Google", "Internet", "File", "Computer"],
            correctAnswer: 3,
            explanation: "Your computer is a correct answer because it is an Internet Protocol (IP) resource, and servers, is assigned a unique IP address. This IP address allows the device to communicate with other devices on the internet and access various resources and services. Therefore, your computer can be considered as an IP resource.",
        },
        {
            question: "Which of the following is not a graphic format you would use on a website?",
            choices: ["BMP", "GIF", "PNG", "JPEG"],
            correctAnswer: 0,
            explanation: "BMP (Bitmap) is not a graphics format that is commonly used on websites. BMP files are typically larger in size compared to other graphics formats, such as JPEG, GIF, and PNG. They do not support compression, which makes them unsuitable for web use as they can slow down the loading time of a webpage. Therefore, BMP is not a recommended graphics format for websites",
        },
        {
            question: "What is the most common video format on the web?",
            choices: ["Flash", "Viral", "Realtime", "WebM"],
            correctAnswer: 0,
            explanation: "Flash is the most common video format on the web because it is widely supported by web browsers and platforms. It allows for high-quality video playback and interactive features, making it a popular choice for streaming videos, online games, and animations.",
        },
        {
            question: "If we did not have domain names how would we get to websites?",
            choices: ["Newsgroups", "IP address", "Borrowed domain", "Google"],
            correctAnswer: 1,
            explanation: "If we did not have domain names, we would still be able to access websites by using IP addresses. An IP address is a unique numerical label assigned to each device connected to a computer network and it serves as the address for communication between devices on the internet.",
        },
        {
            question: "What is it important to have to assist an end customer with their website needs?",
            choices: ["Fast Servers", "Uninterrupted network", "Knowledge on hosting and web design", "Handouts"],
            correctAnswer: 2,
            explanation: "To assist an end customer with their website needs, it is important to have knowledge of hosting and web design. This is because understanding hosting allows the customers website to be properly set up and maintained on a server, ensuring it is accessible to visitors. Additionally, having knowledge of web design enables the customers website to be visually appealing, user-friendly, and optimized for search engines. Both of these skills are crucial in providing effective assistance and ensuring the customers website meets their needs and goals.",
        },
        {
            question: "What does TLD stands for?",
            choices: ["Time Land Dunk", "Top Level Domain", "Top Land Domain", "Top List Domain"],
            correctAnswer: 3,
            explanation: "A TLD stands for Top Level Domain. It is the highest level in the hierarchical domain name system of the internet. TLDs are the last segment of a domain name, following the dot (e.g., .com, .org, .net). They represent the purpose or type of organization associated with the website. Examples of TLDs include .com (commercial), .org (organization), and .gov (government).",
        },
        {
            question: "What does FTP stand for?",
            choices: ["File Transfer Protocol", "File Transmission Program", "Fix Touch Program", "Flip Top Protocol"],
            correctAnswer: 0,
            explanation: "FTP stands for File Transfer Protocol. It is a standard network protocol used to transfer files from one host to another over a TCP based network, such as the internet. FTP allows users to upload, download, and manipulate files on a remote server. It provides a set of rules and commands for the secure and efficient transfer of files between computers.",
        }
    ],
    medium: [
        {
            question: "What file would you use to override some of your servers basic settings?",
            choices: [".exe", ".htaccess", ".ride", ".ovr"],
            correctAnswer: 1,
            explanation: "The .htaccess is commonly used to override or modify the basic settings of a server. It allows users to make specific configurations for their website without having to modify the main server configuration files. By placing a .htaccess file in the root directory of a website, users can control various aspects such as URL rewriting, access control, error handling, and more. This file is widely used in Apache web servers to customize the behavior of individual directories and files."
        },
        {
            question: "The following defines what?, “Domain names are organized in subordinate levels of the DNS root domain”",
            choices: ["DNS", "Subordination", "SubDomain", "Domain"],
            correctAnswer: 2,
            explanation: "A subdomain is a division or subdivision of a larger domain. In the context of domain names being organized in subordinate levels of the DNS root domain, a subdomain refers to a domain that is part of a larger domain. It is created by adding a prefix to the original domain name, typically separated by a dot. Subdomains allow for further categorization and organization of websites or resources within a domain. "
        },
        {
            question: "Your customer wishes to build a dynamic message board which programming language would be best to use?",
            choices: ["CGI", "Java", "PHP", "Pearl"],
            correctAnswer: 2,
            explanation: "PHP would be the best programming language to use for building a dynamic message board. PHP is a widely used scripting language that is specifically designed for web development. It has built-in functions and libraries that make it easy to handle dynamic content and interact with databases. PHP also has a large and active community, which means there are plenty of resources and support available for developers. Additionally, PHP is compatible for building web applications."
        },
        {
            question: "Define the following “the amount of data transfer your web host allots to run through your website.”",
            choices: ["Bandwidth", "Data Transfer", "Data Allocation", "Transfer"],
            correctAnswer: 0,
            explanation: "Bandwidth refers to the amount of data that can be transmitted over a network or through a web host. It represents the capacity or speed at which data can be transferred. In the context of a webhost, bandwidth refers to the amount of data transfer allotted to run through a website. It determines how much data can be sent or received by the website within a certain period of time."
        },
        {
            question: "What is the billing frequency for Rhodium hosting?",
            choices: ["Every seven months", "Every year", "Every three months", "Every six months"],
            correctAnswer: 0,
            explanation: "The billing frequency for Rhodium hosting is every three months. This means that customers will be billed for their hosting services every three months."
        },
        {
            question: "What is the billing frequency for gold hosting?",
            choices: ["Every six months", "Every three months", "Every week", "Everyday"],
            correctAnswer: 0,
            explanation: "The billing frequency for gold hosting is every 3 months. This means that the customer will be charged for the hosting service every three months."
        },
        {
            question: "What does ASP stand for?",
            choices: ["Accurate Server Posting", "Active Sending Pager", "Accurate Serving Program", "Active Server Pages"],
            correctAnswer: 3,
            explanation: "ASP stands for Active Server Pages. Active Server Pages is a server side scripting language developed by Microsoft. It is used to create dynamic web pages and web applications."
        },
        {
            question: "What is a much needed feature for a successful website that many free hosting companies forget?",
            choices: ["CSS Support", "POP Email accounts", "PHP Support", "HTML accounts"],
            correctAnswer: 1,
            explanation: "Many free hosting companies often overlook the importance of offering POP email accounts as a feature for a successful website. POP email accounts allow users to have personalized email addresses with their domain name, enhancing the professionalism and credulity of the website."
        },
        {
            question: "What is the monthly fee for advanced hosting?",
            choices: ["135.99", "155.99", "174.99", "199.99"],
            correctAnswer: 2,
            explanation: "The monthly fee for advanced hosting is 174.99. This can be inferred from the given options where 174.99 is the only price mentioned for advanced hosting."
        },
        {
            question: "What is the billing frequency for osmium hosting?",
            choices: ["Weekly", "Every 6 months", "Yearly", "Two years"],
            correctAnswer: 2,
            explanation: "The billing frequency of osmium hosting is yearly. This means that customers are billed once a year for their hosting services."
        },
        {
            question: "What does open source mean?",
            choices: ["Free", "Unencrypted", "Open windows", "Created by a group of volunteer programmers not for profit"],
            correctAnswer: 3,
            explanation: "Open source refers to software that is developed and made available to the public by a group of volunteer programmers who are not motivated by profit. This means that the source code of the software is openly accessible, allowing anyone to view, modify, and distribute it."
        },
        {
            question: "What type of hosting would you advice for a video sharing site?",
            choices: ["Private hosting", "Server Hosting", "Shared hosting", "Dedicated hosting"],
            correctAnswer: 3,
            explanation: "For a video sharing site, dedicated hosting would be the best option. This is because dedicated hosting provides a dedicated server solely for the use of one website, ensuring high performance and reliability."
        },
        {
            question: "What does POP stands for?",
            choices: ["Post office protocol", "Post out program", "Processed office program", "Post office program"],
            correctAnswer: 0,
            explanation: "POP stands Post Office Protocol. It is a standard protocol used for receiving email from a mail server. It allows an email client to retrieve messages from a mail server and download them to the clients device."
        },
        {
            question: "Which of the following is not a payment schedule available in pcguys hosting?",
            choices: ["Annually", "Monthly", "Bi-annually", "Semi-annually"],
            correctAnswer: 1,
            explanation: "The right option is “Monthly” because the question asks for a payment schedule that is not available in pcguys hosting. Since “Monthly” is listed as one of the options, it means that it is not a payment schedule available in pcguys hosting."
        },
        {
            question: "Which of the following can also be called disk space?",
            choices: ["Dropbox", "Webspace", "Hard disks", "Bandwidth"],
            correctAnswer: 1,
            explanation: "Webspace can also be called disk space because it refers to the amount of storage space available on a server to store website files, databases, and other data. It is similar to the concept of hard drive space, as both represent the capacity to store digital files."
        }
    ],
    hard: [
        {
            question: "A customer needs to set up a video sharing site, they are expecting 100 video views a day what package would you advise?",
            choices: ["Professional", "Ultimate", "Gold", "Platinum"],
            correctAnswer: 0,
            explanation: "The professional hosting package would be the recommended choice for the customer setting up a video sharing site with an expected 100 views a day. This package is likely to provide sufficient resources and bandwidth to handle the daily video views and ensure smooth playback for the users."
        },
        {
            question: "Which of the following hosting packages come with free broadband?",
            choices: ["Silver", "Premium", "None of the above", "All of the above"],
            correctAnswer: 3,
            explanation: "All of the hosting packages mentioned (PROFESSIONAL, ADVANCED, and PREMIUM) come with free broadband."
        },
        {
            question: "What is the monthly for pro hosting?",
            choices: ["99.99", "197.89", "149.99", "500.99"],
            correctAnswer: 2,
            explanation: "The monthly fee for pro hosting is 149.99"
        },
        {
            question: "What naming convention does PCGuys use for their shared hosting platform?",
            choices: ["Solid Materials", "Worlds most valuable metals", "Scientific Terms", "Precious Minerals"],
            correctAnswer: 1,
            explanation: "PCGuys uses the naming convention of “Worlds most valuable metals” for their shared hosting platform"
        },
        {
            question: "What is PCguys hosting uptime?",
            choices: ["80%", "100%", "95%", "99%"],
            correctAnswer: 3,
            explanation: "The right option is 99%. Uptime refers to the amount of time a website or server is operational and accessible to users. A 99% uptime means that the website or server is expected to be up and running for 99% of the time. This indicates a high level of reliability and availability for PCGuys Hostings, as it ensures that their services are accessible to users for the majority of the time."
        },
        {
            question: "How do you cater for many hosting needs as possible?",
            choices: ["Dedicated Servers", "A wide variety of hosting options", "A bumper package that contains all a site can want", "Available Services"],
            correctAnswer: 1,
            explanation: "By offering a wide variety of hosting options, you can cater to different needs and preferences of users. This allows you to provide solutions for various requirements such as shared hosting, virtual private servers, cloud hosting, or dedicated servers."
        },
        {
            question: "What is the monthly fee for gold hosting?",
            choices: ["12.99", "24.99", "13.99", "112.99"],
            correctAnswer: 2,
            explanation: "The right option is 13.99 because it is the only option that matches the question asking for the monthly fee for gold hosting. The other options do not match the given question."
        },
        {
            question: "When would you use SSI?",
            choices: ["When the website is partially static", "When the website is partially dynamic", "When the website is static", "When the website is fully dynamic"],
            correctAnswer: 1,
            explanation: "SSI (Server Side Includes) are used when a website is partially dynamic. This means that certain parts of the website need to be updated or changed frequently, while other parts remain static. By using SSI, the dynamic elements can be easily maintained and updated, while the static content remains unchanged."
        },
        {
            question: "What does URL stands for?",
            choices: ["Uniform Resource Locator", "Unified Random List", "Universal Random Locator", "Universal Resource List"],
            correctAnswer: 0,
            explanation: "A URL stands for Uniform Resource Locator. It is a string of characters that provides the address of a specific resource on the internet. It is used to locate and access resources such as web pages, images, videos, e.t.c. The term “uniform” implies that URLs follow a standardized format and structure, making it easier for users and browsers to understand and navigate to the desired resource."
        },
        {
            question: "A customer wants a free additional domain name that they can set up to simply point at their current site with a simple HTML redirect, which site would you advise them to use?",
            choices: ["Co.cc", "Co.uk", "Co.nr", "Co.ng"],
            correctAnswer: 2,
            explanation: "The customer should use Co.nr because it allows them to set up a free additional domain name and easily direst it to their current site using a simple HTML redirect."
        },
        {
            question: "Which of the packages includes free broadband?",
            choices: ["Platinum", "Premium", "Rhenium", "Gold"],
            correctAnswer: 0,
            explanation: "The Platinum package includes free broadband."
        },
        {
            question: "“This will enable you to send encrypted and authenticated information over the web ensuring client security” this is defined as what?",
            choices: ["Post Forwarding", "Encryption", "SSL", "Firewall"],
            correctAnswer: 2,
            explanation: " SSL (Secure Sockets Layer) is a cryptographic protocol that provides secure communication over the internet. SSL encrypts the data to prevent unauthorized access and verifies the identity of the server to ensure that the information is being sent to the intended recipient."
        },
        {
            question: "What is cron used for?",
            choices: ["Handling open source", "Programming a dynamic script", "Setting up a timed event", "Running a script every time a page is loaded"],
            correctAnswer: 2,
            explanation: "A cron is used for setting up times events. It allows users to schedule specific tasks or scripts to run at predetermined intervals. This can be useful for automating repetitive tasks, such as backups or system maintenance, without requiring manual intervention."
        },
        {
            question: "What is the monthly fee for advanced hosting?",
            choices: ["199.49", "174.99", "300.99", "199.99"],
            correctAnswer: 1,
            explanation: "The monthly fee for advanced hosting is 174.99. This can be inferred from the given options where 174.99 is the only price mentioned for advanced hosting."
        },
        {
            question: "A customer wants a free domain name with DNS capability which site would you advise them to use?",
            choices: ["Co.nr", "Co.com", "Co.cc", "Co.org"],
            correctAnswer: 2,
            explanation: "The right option is Co.cc. Co.cc is a domain name registration service that offers free domain names along with DNS capability. It allows customers to register a domain name without any cost and provides DNS management tools to easily set up and manage their domain."
        },
        {
            question: "How much bandwidth would be considered reasonable for a flash free start up website?", 
            choices: ["Unlimited", "9-10GB", "100GB", "Up to 5GB"],
            correctAnswer: 3,
            explanation: "For a flash-free website, up to 5GB of bandwidth would be considered reasonable. This is because flash-free websites typically have less multimedia content and therefore require less bandwidth to load and function properly."
        }
    ]
};

let currentQuestion = 0;
let score = 0;
let difficultyLevel;
let quizContainer = document.getElementById('quiz-container');

const landingContainer = document.querySelector('.landing-container');
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const quizForm = document.getElementById("quiz-form");
const returnButton = document.getElementById("return-button");

let submitButton;
function startQuiz(level) {
    difficultyLevel = level;
    landingContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuizData = quizData[difficultyLevel][currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQuizData.question}`;
   
    choicesElement.innerHTML = "";
    currentQuizData.choices.forEach((choice, index) => {
        const choiceLabel = document.createElement("label");
        choiceLabel.setAttribute("class", "choice-label");
        const radioButton = document.createElement("input");
        radioButton.setAttribute("type", "radio");
        radioButton.setAttribute("name", "choice");
        radioButton.setAttribute("value", index);
        choiceLabel.appendChild(radioButton);
        choiceLabel.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(choiceLabel);
    });

    feedbackElement.textContent = "";
    if (!submitButton) {
        submitButton = document.createElement("button");
        submitButton.textContent = "Submit Answer";
        submitButton.setAttribute("type", "button");
        quizForm.appendChild(submitButton);
        submitButton.addEventListener("click", handleButton);
    } else {
        submitButton.textContent = "Submit Answer";
        submitButton.removeEventListener("click", handleButton);
        submitButton.addEventListener("click", handleButton);
    }
}

function handleButton() {
    if (submitButton.textContent === "Submit Answer") {
        checkAnswer();
    } else {
        currentQuestion++;
        if (currentQuestion < quizData[difficultyLevel].length) {
            showQuestion();
        } else {
            displayScore();
        }
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="choice"]:checked');
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an option";
        return;
    }

    const answer = parseInt(selectedOption.value);
    const correctAnswerIndex = quizData[difficultyLevel][currentQuestion].correctAnswer;


    if (answer === correctAnswerIndex) {
        score++;
        feedbackElement.textContent = "Correct! " + quizData[difficultyLevel][currentQuestion].explanation;
    } else {
        feedbackElement.textContent = "Incorrect. " + quizData[difficultyLevel][currentQuestion].explanation;
    }

    submitButton.textContent = "Next";
}

function displayScore() {
    quizForm.style.display = "none";
    feedbackElement.textContent = `Quiz finished. Your score is ${score}/${quizData[difficultyLevel].length}`;
    returnButton.style.display = "block";
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = "none";
    returnButton.style.display = "none";
    landingContainer.style.display = "block";
}

returnButton.addEventListener("click", function() {
    resetQuiz();
});

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

// startQuiz('easy');

// Event listener for difficulty level buttons
const difficultyButtons = document.querySelectorAll('.difficulty-button');
difficultyButtons.forEach(button => {
    button.addEventListener('click', function() {
        startQuiz(button.getAttribute('data-difficulty'));
    });
});