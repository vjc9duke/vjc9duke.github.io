/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vincent Chen",
  title: "Hi all, I'm Vincent",
  subTitle: emoji(
    "I am a senior at Duke University majoring in Electrical and Computer Engineering and Computer Science. In addition to my interest in software and hardware development, I also enjoy CAD and working across disciplines."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1HiTrKVw_JnTEp43E7gvRgV-PF-PPQtx2?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vjc9duke",
  linkedin: "https://www.linkedin.com/in/vincent-j-chen/",
  gmail: "vzchen12@gmail.com",
  phone: "440-318-4013",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate about mechanical, electrical, and software development and everything in between | Experienced across CAD, low-level languages, high-level languages, and cloud technologies",
  skills: [
    emoji(
      "🖥 Develop apps and scripts in high level languages like Java, Python, and MATLAB among others"
    ),
    emoji(
      "📟 Program for microcontrollers and FPGAs in C, Assembly, and Verilog"
    ),
    emoji(
      "📱 Develop web and mobile apps using Flutter, Swift, TypeScript, JavaScript, and others"
    ),
    emoji("☁️ Utilize Cloud Technologies like AWS, Salesforce, and Azure"),
    emoji(
      "💽 Configure and Ran Databases using Firebase, PostgreSQL, MonogDB, and XQuery"
    ),
    emoji("🔩 Design parts and products in SolidWorks, Fusion 360, and AutoCAD")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  programmingLanguages: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
      targetID: ["Java Chess Application"]
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      targetID: [
        "Picasso Intelligence",
        "Library Patron Counter",
        "ACkER Lab",
        "Laser Tag Kit",
        "Assembly Autotester",
        "Picasso Intelligence Website"
      ]
    },
    {
      skillName: "C#/C++/C",
      fontAwesomeClassname: "fab fa-cuttlefish",
      targetID: [
        "Ecolab",
        "Onto Innovation",
        "Library Patron Counter",
        "Laser Tag Kit",
        "Auto Turntable",
        "Mini Laptop"
      ]
    },
    {
      skillName: "Assembly",
      fontAwesomeClassname: "fas fa-robot",
      targetID: [
        "Electrical and Computer Engineering Teaching Assistant",
        "Candy Tank",
        "Assembly Autotester"
      ]
    },
    {
      skillName: "Verilog",
      fontAwesomeClassname: "fas fa-v",
      targetID: [
        "Electrical and Computer Engineering Teaching Assistant",
        "Candy Tank",
        "Assembly Autotester"
      ]
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-scroll",
      targetID: ["nCino", "UChat Anonymous Chatting App"]
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      targetID: [
        "Picasso Intelligence",
        "nCino",
        "Picasso Intelligence Website"
      ]
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
      targetID: ["Picasso Intelligence", "Picasso Intelligence Website"]
    },
    {
      skillName: "Flutter/Dart",
      fontAwesomeClassname: "fas fa-dove",
      targetID: ["E-Sentience"]
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift",
      targetID: ["ACkER Lab"]
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-square-root-alt",
      targetID: ["ACkER Lab"]
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database",
      targetID: ["UChat Anonymous Chatting App"]
    }
  ],
  technologies: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      targetID: ["nCino"]
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce",
      targetID: ["nCino"]
    },
    {
      skillName: "DynamoDB",
      fontAwesomeClassname: "fas fa-database",
      targetID: ["nCino"]
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
      targetID: ["UChat Anonymous Chatting App"]
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      targetID: [
        "Ecolab",
        "Picasso Intelligence",
        "Onto Innovation",
        "nCino",
        "E-Sentience",
        "Library Patron Counter",
        "Laser Tag Kit",
        "Candy Tank",
        "Assembly Autotester",
        "Java Chess Application",
        "Computer Science Teaching Assistant",
        "ACkER Lab",
        "Picasso Intelligence Website",
        "UChat Anonymous Chatting App"
      ]
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-simple",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "fas fa-calculator",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    }
  ],
  software: [
    {
      skillName: "XCode",
      fontAwesomeClassname: "fas fa-mobile-screen-button",
      targetID: ["ACkER Lab", "UChat Anonymous Chatting App"]
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fas fa-mobile-screen",
      targetID: ["E-Sentience"]
    },
    {
      skillName: "Fusion 360",
      fontAwesomeClassname: "fas fa-cube",
      targetID: [
        "Library Patron Counter",
        "Auto Turntable",
        "Mini Laptop",
        "Candy Tank",
        "Fidget Cube",
        "Desk Hook",
        "Google Home Mount",
        "CNC'd Laptop Stand",
        "Watch Charging Station"
      ]
    },
    {
      skillName: "SolidWorks",
      fontAwesomeClassname: "fas fa-cube",
      targetID: ["Duke Robotics"]
    },
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "fas fa-vector-square",
      targetID: ["Ecolab"]
    },
    {
      skillName: "KiCad",
      fontAwesomeClassname: "fas fa-microchip",
      targetID: ["Library Patron Counter", "Laser Tag Kit", "Auto Turntable"]
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-image",
      targetID: ["Picasso Intelligence"]
    },
    {
      skillName: "Illustrator",
      fontAwesomeClassname: "fas fa-image",
      targetID: ["Duke Robotics"]
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma",
      targetID: ["Picasso Intelligence", "E-Sentience"]
    }
  ],
  handson: [
    {
      skillName: "3D Printing",
      fontAwesomeClassname: "fas fa-print",
      targetID: [
        "Library Patron Counter",
        "Duke Robotics",
        "Auto Turntable",
        "Mini Laptop",
        "Candy Tank",
        "Fidget Cube",
        "Desk Hook",
        "Google Home Mount",
        "Watch Charging Station"
      ]
    },
    {
      skillName: "Laser Cutting",
      fontAwesomeClassname: "fas fa-scissors",
      targetID: [
        "Library Patron Counter",
        "Duke Robotics",
        "Auto Turntable",
        "Mini Laptop",
        "Candy Tank",
        "Desk Hook"
      ]
    },
    {
      skillName: "CNC Milling",
      fontAwesomeClassname: "fas fa-bore-hole",
      targetID: ["CNC'd Laptop Stand"]
    },
    {
      skillName: "Soldering",
      fontAwesomeClassname: "fas fa-pen",
      targetID: ["Library Patron Counter", "Laser Tag Kit", "Auto Turntable"]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Duke University",
      logo: require("./assets/images/dukeLogo.png"),
      subHeader:
        "Master of Engineering in Electrical and Computer Engineering (Upcoming)",
      duration: "May 2025 - December 2025",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
      id: "duke-grad"
    },
    {
      schoolName: "Duke University",
      logo: require("./assets/images/dukeLogo.png"),
      subHeader:
        "BSE in Electrical and Computer Engineering, BS in Computer Science, Latin Minor",
      duration: "August 2021 - May 2025",
      // desc: "Description of what I did here",
      descBullets: [
        "GPA: 4.0/4.0",
        "Dean's List with Distinction",
        "🏅🏅 2x Outstanding Undergraduate TA (Computer Science)",
        "🏅 Outstanding Undergraduate TA (Electrical and Computer Engineering)"
      ],
      id: "duke-undergrad"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "95%"
    },
    {
      Stack: "3D Modeling and Building",
      progressPercentage: "87%"
    },
    {
      Stack: "Computer Hardware Design",
      progressPercentage: "83%"
    },
    {
      Stack: "Frontend/App Development",
      progressPercentage: "72%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "59%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern - Global Engineering",
      company: "Ecolab",
      companylogo: require("./assets/images/ecolabLogo.png"),
      date: "May 2024 – August 2024",
      desc: "I first designed, built, and wired a custom control panel to emulate a polymer activation system. Then, I developed simulation software to enable remote analysis of customer equipment.,",
      mainSkills: [
        "C: PLC programming",
        "B&R Studio: PLC development and deployment",
        "Git: version control and collaboration",
        "AutoCAD: electrical and mechanical layout"
      ]
    },
    {
      role: "Intern - Robotics Engineer",
      company: "Picasso Intelligence",
      companylogo: require("./assets/images/piLogo.png"),
      date: "August 2023 - May 2024",
      desc: "I developed actuator control software, worked on cooling vest hardware, and refactored the company website. I also aided in team development activities like interviewing candidates and creating a product catalog.",
      mainSkills: [
        "C: actuator app development",
        "Python: actuator app development",
        "JavaScript: custom functionality",
        "HTML: website structure",
        "CSS: website styling",
        "Git: version control and collaboration",
        "Figma: promotional materials",
        "Photoshop: promotional materials"
      ]
    },
    {
      role: "Intern - Software Engineering",
      company: "Onto Innovation",
      companylogo: require("./assets/images/ontoLogo.png"),
      date: "May 2023 - August 2023",
      desc: "I developed a solution to eliminate a distributed computing error for AI Diffract, a refraction simulation software, and added a couple QOL UI features. I also helped refactor some legacy C++ code to improve maintainability and decrease the possibility of memory leaks.",
      mainSkills: [
        "C++: software development",
        "Git: version control and collaboration"
      ]
    },
    {
      role: "Intern - Software Engineering",
      company: "nCino",
      companylogo: require("./assets/images/ncinoLogo.png"),
      date: "May 2022 – January 2023",
      desc: "I leveraged AWS services such as Lambda, DynamoDB, and API Gateway to build a data-sharing system integrated with nCino's core MTRANS data mapping service. I also composed documentation for future developers and developed comprehensive testing suites.",
      mainSkills: [
        "AWS: cloud development and management",
        "Salesforce: core app integration",
        "DynamoDB: database management",
        "TypeScript: AWS Lambda development",
        "JavaScript: core app development",
        "Git: version control and collaboration",
        "Jest: testing framework",
        "Postman: API testing"
      ]
    },
    {
      role: "Intern - Software Engineering",
      company: "E-Sentience",
      companylogo: require("./assets/images/esentLogo.png"),
      date: "May 2022 – August 2022",
      desc:"I first developed a UI mockup for a cross-platform fitness app in Figma. Then, I developed the core part of the app in Flutter, using Git to manage version control and track tasks.",
      mainSkills: [
        "Flutter/Dart: app development",
        "Git: version control and collaboration",
        "Android Studio: app testing and deployment",
        "Figma: UI mockup"
      ]
    }
  ]
};

const otherExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Electrical and Computer Engineering Teaching Assistant",
      company: "Duke University",
      companylogo: require("./assets/images/dukeLogo.png"),
      date: "August 2023 - Present",
      descBullets: ["Lead a lab section for Duke's Digital Systems course,  covering concepts such as Verilog, FPGA programming, and electromechanical integration ", "🏅 Outstanding Undergraduate TA Award"]
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "Duke University",
      companylogo: require("./assets/images/dukeLogo.png"),
      date: "August 2022 – May 2024",
      descBullets: [
        "Individually mentored students for Duke's Advanced Software Design course, covering topics such as OOP design principles, design patterns, and best Git practices",
        "🏅🏅 2x Outstanding Undergraduate TA Award"
      ]
    },
    {
      role: "Undergraduate Researcher (Software Engineering)",
      company: "ACkER Lab",
      companylogo: require("./assets/images/ackerLogo.png"),
      date: "January 2023 – May 2024",
      desc: "I built an iPadOS app that administers and automatically scores cognitive tests and led the first round of validation trials for.  I also worked on a MATLAB preprocessing script that filters out noisy heart rate data and an automatic data import script that eliminated hours of manual input.",
      mainSkills: [
        "MATLAB: data preprocessing",
        "Python: script development",
        "Swift: app development",
        "Git: version control and collaboration",
        "XCode: app testing and deployment",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Recent projects that showcase a diverse range of skills",
  projects: [
    {
      image: require("./assets/images/thumbnails/library.png"),
      projectName: "Library Patron Counter",
      projectDesc:
        "I designed, fabricated, and programmed a patron counter for the Duke Libraries, containing low-power sensing components and an edge server.",
      mainSkills: [
        "Python: edge server programming",
        "C: sensing node programming",
        "Git: version control",
        "Fusion 360: 3D modeling",
        "KiCad: PCB design",
        "3D printing: custom part fabrication",
        "Soldering: PCB assembly"
      ],
      footerLink: [
        {
          name: "Under Construction",
          url: "https://www.google.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laser.png"),
      projectName: "Laser Tag Kit",
      projectDesc:
        "Working with a team of engineers, I led the PCB design and software development of an at-home laser tag kit.",
      mainSkills: [
        "Python: control hub programming",
        "C: microcontroller programming",
        "Git: version control and collaboration",
        "KiCad: PCB design",
        "Soldering: circuit assembly"
      ],
      footerLink: [
        {
          name: "Under Construction",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/robot.png"),
      projectName: "Duke Robotics",
      projectDesc:
        "As the mechanical lead, I manage overarching decisions regarding the physical assembly of the robot, delegation of tasks, and the onboarding of new mechanical members.",
      mainSkills: [
        "Leadership: onboarding, training, and task delegation",
        "SolidWorks: 3D modeling"
      ],
      footerLink: [
        {
          name: "Under Construction",
          url: ""
        },
        {
          name: "Team Website",
          url: "https://duke-robotics.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const multiDiscProjects = {
  title: "Multidisciplinary Projects",
  subtitle: "Projects that span mechanical, electrical, and software work",
  projects: [
    {
      image: require("./assets/images/thumbnails/turn.png"),
      projectName: "Auto Turntable",
      projectDesc:
        "I modeled, built, and programmed a small turntable with a stepper motor, LEDs, and surface mount resistors.",
      mainSkills: [
        "C: microcontroller programming",
        "Fusion 360: 3D modeling",
        "KiCad: PCB design",
        "Surface-mount soldering: circuit assembly",
        "3D printing: custom part fabrication",
        "Laser cutting/engraving: custom part fabrication"
      ],
      footerLink: [
        {
          name: "Under construction",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laptop.png"),
      projectName: "Mini Laptop",
      projectDesc:
        "I created and programmed a custom Arduino-based laptop with a working display and keyboard.",
      mainSkills: [
        "C: microcontroller programming",
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication",
        "Laser cutting/engraving: custom part fabrication"
      ],
      footerLink: [
        {
          name: "Under construction",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/350.png"),
      projectName: "Candy Tank",
      projectDesc:
        "In a team of two, I interfaced my five-stage pipelined Verilog processor with various I/O devices (stepper motors, PWM servos, gyroscope, joystick) to create a controllable tank.",
      mainSkills: [
        "Verilog: FPGA hardware design and layout",
        "Assembly: FPGA instructions",
        "Xilinx Vivado: Verilog synthesis and deployment",
        "Git: version control and collaboration",
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication",
        "Laser cutting/engraving: custom part fabrication",
        "Circuit wiring: project assembly"
      ],
      footerLink: [
        {
          name: "Under construction",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const softwareProjects = {
  title: "Software Projects",
  subtitle: "Projects focused on software design and programming",
  projects: [
    {
      image: require("./assets/images/thumbnails/autotester.png"),
      projectName: "Assembly Autotester",
      projectDesc:
        "As a Digital Systems teaching assistant, I wrote a Python program that allows MIPS assembly files to be automatically tested against Verilog processors to facilitate the development of new test cases and assist student debugging.",
      mainSkills: [
        "Python: software development",
        "Assembly: test cases",
        "Verilog: processor testing",
        "Git: version control"
      ],
      footerLink: [
        {
          name: "Git Repository",
          url: "https://github.com/vjc9duke/assembly-autotester"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/chess.png"),
      projectName: "Java Chess Application",
      projectDesc:
        "I, along with seven other team members, developed a Java chess app with a focus on using OOP design principles. I led the implementation of chess variation and user-defined variation support.",
      mainSkills: [
        "Java: software development",
        "Git: version control and collaboration",
        "Design principles: application of MVC, design patterns, etc."
      ],
      footerLink: [
        {
          name: "Git Repository (My Contributions)",
          url: "https://gitfront.io/r/user-4226062/8eBccXDeUwHx/308-final/tree/src/main/java/oogasalad/GamePlayer/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/pi.png"),
      projectName: "Picasso Intelligence Website",
      projectDesc:
        "I refactored and documented the codebase for Picasso Intelligence's product website, drastically reducing duplicated code and providing a no-code way to add new products via JSON files.",
      mainSkills: [
        // eslint-disable-next-line
        "JavaScript: custom functionality",
        "HTML: website structure",
        "CSS: website styling",
        "Git: version control"
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://picassointelligence.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/database.png"),
      projectName: "UChat Anonymous Chatting App",
      projectDesc:
        "In a team of five, I developed a proof-of-concept anonymous chatting app using React and Firebase.",
      mainSkills: [
        "TypeScript: software development",
        "React: app framework",
        "Firebase: backend database",
        "Git: version control and collboration",
        "XCode: iOS testing and deployment"
      ],
      footerLink: [
        {
          name: "Git Repository",
          url: "https://github.com/Ydz0616/UChat"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const mechProjects = {
  title: "Mechanical Projects",
  subtitle: "Projects focused on CAD and fabrication",
  projects: [
    {
      image: require("./assets/images/thumbnails/cube.png"),
      projectName: "Fidget Cube",
      projectDesc:
        "3D printed cube with inserts for low profile mechanical switches",
      footerLink: [
        {
          name: "Gallery (Under Construction)",
          url: ""
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication"
      ]
    },
    {
      image: require("./assets/images/thumbnails/hook.png"),
      projectName: "Desk Hook",
      projectDesc:
        "Bespoke hook fitted to my desk; holes headphones, hats, etc. and can be modified to support different use cases",
      footerLink: [
        {
          name: "Gallery (Under Construction)",
          url: ""
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication",
        "Laser cutting/engraving: custom part fabrication"
      ]
    },
    {
      image: require("./assets/images/thumbnails/home.png"),
      projectName: "Google Home Mount",
      projectDesc:
        "Custom mounting bracket for speaker system in my garage gym",
      footerLink: [
        {
          name: "Gallery (Under Construction)",
          url: ""
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication"
      ]
    },
    {
      image: require("./assets/images/thumbnails/laptopstand.png"),
      projectName: "CNC'd Laptop Stand",
      projectDesc:
        "Wooden, angled laptop stand fabricated using a CNC router. Also sanded, painted, and polished.",
      footerLink: [
        {
          name: "Gallery (Under Construction)",
          url: ""
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "CNC milling: custom part fabrication",
        "Woodworking: assembly and finish"
      ]
    },
    {
      image: require("./assets/images/thumbnails/rook.png"),
      projectName: "Watch Charging Station",
      projectDesc:
        "3D printed casing for my Galaxy Watch charger in the shape of a rook. Comes with an attachment on top for an Apple Watch charger.",
      footerLink: [
        {
          name: "Gallery (Under Construction)",
          url: ""
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication"
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+1 (440) 318-4013",
  email_address: "vzchen12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  otherExperiences,
  openSource,
  bigProjects,
  multiDiscProjects,
  softwareProjects,
  mechProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
