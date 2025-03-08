/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: Math.floor(Math.random() * 2000) + 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vincent Chen",
  title: "Hello, I'm Vincent",
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
    "Passionate about mechanical, electrical, software development, and everything in between | Experienced across CAD, low-level languages, high-level languages, and cloud technologies",
  skills: [
    emoji(
      "🖥 Develop apps and scripts in high level languages like Java, Python, MATLAB, etc."
    ),
    emoji(
      "📟 Program for microcontrollers and FPGAs in C, Assembly, and Verilog"
    ),
    emoji(
      "📱 Develop web and mobile apps using Flutter, Swift, TypeScript, JavaScript, and others"
    ),
    emoji("☁️ Leverage cloud technologies like AWS, Salesforce, and Azure"),
    emoji(
      "💽 Configure and run databases using PostgreSQL, MongoDB, and XQuery"
    ),
    emoji(
      "🔩 Design and manufacture parts using SolidWorks, Fusion 360, and AutoCAD"
    )
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
        "Head Electrical and Computer Engineering Teaching Assistant",
        "Candy Tank",
        "Assembly Autotester"
      ]
    },
    {
      skillName: "Verilog",
      fontAwesomeClassname: "fas fa-v",
      targetID: [
        "Head Electrical and Computer Engineering Teaching Assistant",
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
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
      targetID: ["UChat Anonymous Chatting App"]
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "pandas",
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
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "SimpleScalar",
      fontAwesomeClassname: "fas fa-microchip",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "Gem5",
      fontAwesomeClassname: "fas fa-microchip",
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
    },
    {
      skillName: "Unreal Engine 5",
      fontAwesomeClassname: "fas fa-gears",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
    },
    {
      skillName: "PSpice",
      fontAwesomeClassname: "fas fa-pepper-hot",
      targetID: ["duke-undergrad"],
      targetBlock: "center"
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
    },
    {
      skillName: "Oscilloscope",
      fontAwesomeClassname: "fas fa-microscope",
      targetID: [
        "duke-undergrad",
        "Head Electrical and Computer Engineering Teaching Assistant",
        "Candy Tank"
      ],
      targetBlock: "center"
    },
    {
      skillName: "Waveform Generator",
      fontAwesomeClassname: "fas fa-wave-square",
      targetID: [
        "duke-undergrad",
        "Head Electrical and Computer Engineering Teaching Assistant",
        "Candy Tank"
      ],
      targetBlock: "center"
    },
    {
      skillName: "Power Supply",
      fontAwesomeClassname: "fas fa-plug",
      targetID: [
        "duke-undergrad",
        "Head Electrical and Computer Engineering Teaching Assistant",
        "Candy Tank"
      ],
      targetBlock: "center"
    },
    {
      skillName: "LCR Meter",
      fontAwesomeClassname: "fas fa-spinner",
      targetID: [
        "duke-undergrad",
        "Head Electrical and Computer Engineering Teaching Assistant",
        "Candy Tank"
      ],
      targetBlock: "center"
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
        "GPA: 3.99/4.0",
        "Dean's List with Distinction",
        "🏅🏅 2x Outstanding Undergraduate TA Award (Computer Science)",
        "🏅🏅 2x Outstanding Undergraduate TA Award (Electrical and Computer Engineering)"
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
      Stack: "General Software Engineering",
      progressPercentage: "95%"
    },
    {
      Stack: "Computer Hardware Design",
      progressPercentage: "92%"
    },
    {
      Stack: "3D Modeling and Building",
      progressPercentage: "87%"
    },
    {
      Stack: "Backend/Cloud Development",
      progressPercentage: "82%"
    },
    ,
    {
      Stack: "Machine Learning",
      progressPercentage: "71%"
    },
    {
      Stack: "Frontend/App Development",
      progressPercentage: "62%"
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
      desc: "I designed, built, and wired a custom control panel to emulate four PLC-based water treatment systems. I also developed software that supports mocking of inputs and outputs, allowing IT to more effectively assist customers. ",
      mainSkills: [
        "C: PLC programming",
        "B&R Studio: PLC development and deployment",
        "Git: version control and collaboration",
        "AutoCAD: electrical and mechanical layout"
      ]
    },
    {
      role: "Intern - Robotics and Software Engineering",
      company: "Picasso Intelligence",
      companylogo: require("./assets/images/piLogo.png"),
      date: "August 2023 - May 2024",
      desc: "I developed actuator control software, worked on cooling vest hardware, and refactored the company website, reducing the overhead of adding new products by 80%. I also aided in team development activities such as interviewing candidates and creating a product catalog.",
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
      desc: "I developed a solution to eliminate a distributed computing error for AI Diffract, a 3D modeling software for semiconductor optics. In addition, I helped refactor some legacy C++ code to improve maintainability and increase memory safety.",
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
      desc: "I leveraged AWS services such as Lambda, DynamoDB, and API Gateway to build a data-sharing system integrated with nCino's core MTRANS data mapping service, supporting thousands of times more records than the existing system. I also composed detailed documentation and developed comprehensive testing suites to support future development.",
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
      desc: "I used Figma to create a UI mockup for a cross-platform fitness app. I also developed the core part of the app in Flutter, using Git for task management and version control.",
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
      role: "Head Electrical and Computer Engineering Teaching Assistant",
      company: "Duke University",
      companylogo: require("./assets/images/dukeLogo.png"),
      date: "August 2023 - Present",
      descBullets: [
        "I lead a lab section of 12 studentsfor Duke's Digital Systems course, covering concepts such as Verilog, FPGA programming, and electromechanical integration.",
        "I develop new course materials, such as lab exercises and a toolchain that automates manual test setup for students.",
        "🏅🏅 2x Outstanding Undergraduate TA Award"
      ],
      mainSkills: [
        "Lab instruction: guidance on computer architecture concepts and FPGA programming",
        "Project mentorship: assistance on Verilog programming and electromechanical integration"
      ]
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "Duke University",
      companylogo: require("./assets/images/dukeLogo.png"),
      date: "August 2022 – Present",
      descBullets: [
        "I individually mentor 3-5 students per semester for Duke's Advanced Software Design course, covering topics such as OOP design principles, design patterns, and best Git practices",
        "🏅🏅 2x Outstanding Undergraduate TA Award"
      ],
      mainSkills: [
        "Mentorship: individual student guidance",
        "Grading: qualitative feedback for student code, Git practices, and teamwork"
      ]
    },
    {
      role: "Undergraduate Researcher (Software Engineering)",
      company: "ACkER Lab",
      companylogo: require("./assets/images/ackerLogo.png"),
      date: "January 2023 – May 2024",
      desc: "I built an iPadOS app that administers and automatically scores cognitive tests, streamlining the test scoring process. I also developed a MATLAB preprocessing script that filters out noisy heart rate data, as well as an automatic data import script that eliminated hours of manual input.",
      mainSkills: [
        "MATLAB: data preprocessing",
        "Python: script development",
        "Swift: app development",
        "Git: version control and collaboration",
        "XCode: app testing and deployment"
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
      image: require("./assets/images/lpc/render1.png"),
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
          name: "Gallery",
          pics: [
            {
              pic: require("./assets/images/lpc/rw1.png"),
              caption: "Finished product"
            },
            {
              pic: require("./assets/images/lpc/rw2.png"),
              caption: "Finished product (close up)"
            },
            {
              pic: require("./assets/images/lpc/rw3.png"),
              caption: "Finished product (powered on)"
            },
            {
              pic: require("./assets/images/lpc/dashboard.png"),
              caption: "Dashboard"
            },
            {
              pic: require("./assets/images/lpc/PCB.png"),
              caption: "PCB (model)"
            },
            {
              pic: require("./assets/images/lpc/rwc3.png"),
              caption: "PCB (product)"
            },
            {
              pic: require("./assets/images/lpc/chassis.png"),
              caption: "IR sensor chassis (model)"
            },
            {
              pic: require("./assets/images/lpc/rwc6.png"),
              caption: "IR sensor chassis (product)"
            },
            {
              pic: require("./assets/images/lpc/sensorholder.png"),
              caption: "IR sensor wall mount (model)"
            },
            {
              pic: require("./assets/images/lpc/rwc4.png"),
              caption: "IR sensor wall mount (product)"
            },
            {
              pic: require("./assets/images/lpc/rwc5.png"),
              caption: "IR sensor wall mount (product)"
            },
            {
              pic: require("./assets/images/lpc/arduinoenclosure.png"),
              caption: "Microcontroller enclosure (model)"
            },
            {
              pic: require("./assets/images/lpc/rwc1.png"),
              caption: "Microcontroller power case (product)"
            },
            {
              pic: require("./assets/images/lpc/rwc2.png"),
              caption: "Microcontroller enclosure (product)"
            }
          ]
        },
        {
          name: "Code Repository",
          url: "https://gitfront.io/r/vzchen12/UNpA3DKFZE8x/patron-counter/"
        },
        {
          name: "Project Reports",
          url: "https://drive.google.com/drive/folders/1YfgzoODL0tuZnu1O9ZjlZLNMBajfBd_y?usp=drive_link"
        }
      ]
    },
    {
      image: require("./assets/images/laser/thumbnail.png"),
      projectName: "Laser Tag Kit",
      projectDesc:
        "Working in a team of four engineers, I led the PCB design and software development of an at-home laser tag kit.",
      mainSkills: [
        "Python: control hub programming",
        "C: microcontroller programming",
        "Git: version control and collaboration",
        "KiCad: PCB design",
        "Soldering: circuit assembly"
      ],
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/laser/finished.png"),
              caption: "Finished glove prototype"
            },
            {
              pic: require("./assets/images/laser/vestfinal.png"),
              caption: "Finished vest prototype"
            },
            {
              pic: require("./assets/images/laser/pcbs.png"),
              caption: "Milled PCBs"
            },
            {
              pic: require("./assets/images/laser/pcbproto.png"),
              caption: "Soldered PCB prototype"
            },
            {
              pic: require("./assets/images/laser/POC.png"),
              caption: "PCB schematic (proof of concept)"
            },
            {
              pic: require("./assets/images/laser/vest.png"),
              caption: "PCB schematic (vest)"
            },
            {
              pic: require("./assets/images/laser/attiny.png"),
              caption: "PCB schematic (ATTINY-based)"
            },
            {
              pic: require("./assets/images/laser/hub.png"),
              caption: "Smart hub"
            },
            {
              pic: require("./assets/images/laser/main.png"),
              caption: "Main screen"
            },
            {
              pic: require("./assets/images/laser/code.png"),
              caption: "Defuse game mode"
            }
          ]
        },
        {
          name: "Control Hub Repository",
          url: "https://github.com/vjc9duke/laser-tag-hub"
        },
        {
          name: "Microcontroller Repository",
          url: "https://drive.google.com/drive/folders/11wB_0B5jFPhh-wsaUemmA5tbX7PcPUwa?usp=sharing"
        },
        {
          name: "Project Site",
          url: "https://sites.google.com/view/quantum-quest/"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnails/robot.png"),
      projectName: "Duke Robotics",
      projectDesc:
        "As the mechanical lead, I manage overarching decisions regarding the physical assembly of the robot, delegation of tasks, and the onboarding of new mechanical members (around 10-20 per year).",
      mainSkills: [
        "Leadership: onboarding, training, and task delegation",
        "SolidWorks: 3D modeling"
      ],
      footerLink: [
        {
          name: "Gallery",
          pics: [
            {
              pic: require("./assets/images/robot/rw1.png"),
              caption: "At competition"
            },
            {
              pic: require("./assets/images/robot/rw2.png"),
              caption: "At the pool"
            },
            {
              pic: require("./assets/images/robot/rw3.png"),
              caption: "Underside"
            },
            {
              pic: require("./assets/images/robot/render1.png"),
              caption: "Full assembly render"
            },
            {
              pic: require("./assets/images/robot/stack.png"),
              caption: "Electrical stack render"
            },
            {
              pic: require("./assets/images/robot/camera.png"),
              caption: "Camera mount render"
            }
          ]
        },
        {
          name: "Team Website",
          url: "https://duke-robotics.com/"
        },
        {
          name: "Competition Website",
          url: "https://robonation.org/about/"
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
      image: require("./assets/images/autoturn/render1.png"),
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
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/autoturn/rw1.png"),
              caption: "Finished product"
            },
            {
              pic: require("./assets/images/autoturn/rw2.png"),
              caption: "Finished product (powered on)"
            },
            {
              pic: require("./assets/images/autoturn/render2.png"),
              caption: "Model render"
            },
            {
              pic: require("./assets/images/autoturn/render3.png"),
              caption: "Model render (internals)"
            },
            {
              pic: require("./assets/images/autoturn/render4.png"),
              caption: "Model render (enclosure)"
            },
            {
              pic: require("./assets/images/autoturn/pcb.png"),
              caption: "Custom PCB"
            }
          ]
        },
        {
          name: "Project Repository",
          url: "https://drive.google.com/drive/folders/1h6wmmpmsol9Kt3RwvbTfrpdYKEORiaBt?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/minilaptop/render4.png"),
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
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/minilaptop/rw1.png"),
              caption: "Finished product"
            },
            {
              pic: require("./assets/images/minilaptop/rw2.png"),
              caption: "Finished product (alternate angle)"
            },
            {
              pic: require("./assets/images/minilaptop/rw3.png"),
              caption: "Lid closed"
            },
            {
              pic: require("./assets/images/minilaptop/render1.png"),
              caption: "Model render (battery tray out)"
            },
            {
              pic: require("./assets/images/minilaptop/render2.png"),
              caption: "Model render (closed)"
            },
            {
              pic: require("./assets/images/minilaptop/render3.png"),
              caption: "Model render (chassis)"
            }
          ]
        },
        {
          name: "Project Repository",
          url: "https://drive.google.com/drive/folders/1SCvuaQmR-wGKt6g1g63BmEzOezEiuqll?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tank/render1.png"),
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
          name: "Gallery",
          pics: [
            {
              pic: require("./assets/images/tank/rw1.png"),
              caption: "Physical build (tank)"
            },
            {
              pic: require("./assets/images/tank/rw2.png"),
              caption: "Physical build (tank)"
            },
            {
              pic: require("./assets/images/tank/rw3.png"),
              caption: "Physical build (joysticks)"
            },
            {
              pic: require("./assets/images/tank/render2.png"),
              caption: "Model render (front)"
            },
            {
              pic: require("./assets/images/tank/render3.png"),
              caption: "Model render (side)"
            },
            {
              pic: require("./assets/images/tank/render4.png"),
              caption: "Model render (back)"
            },
            {
              pic: require("./assets/images/tank/render5.png"),
              caption: "Model render (firing)"
            },
            {
              pic: require("./assets/images/tank/render6.png"),
              caption: "Model render (firing)"
            },
            {
              pic: require("./assets/images/tank/render7.png"),
              caption: "Model render (chassis)"
            },
            {
              pic: require("./assets/images/tank/render8.png"),
              caption: "Model render (joysticks)"
            },
            {
              pic: require("./assets/images/tank/render9.png"),
              caption: "Model render (joysticks)"
            }
          ]
        },
        {
          name: "Final Report",
          url: "https://drive.google.com/drive/folders/1_Z2xYIUV9wx06B4IwAvXH5mowS1NROVu?usp=sharing"
        },
        {
          name: "Project Repository",
          url: "https://gitfront.io/r/vzchen12/TtpPNDatzmQ7/candy-tank-software/"
        },
        {
          name: "Processor Repository",
          url: "https://gitfront.io/r/user-4226062/xhqb4TY5mNGB/processor/"
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
      image: require("./assets/images/thumbnails/proctoolchain.png"),
      projectName: "Verilog Processor Testing Toolchain",
      projectDesc:
        "As the head Digital Systems teaching assistant, I wrote a Python app that allows students to view and debug their Verilog code through an autogenerated webpage, automating 100% of the test setup process. This toolchain is also coupled with a laboratory exercise I developed that teaches students debugging strategies.",
      mainSkills: [
        "Python: software development",
        "HTML/CSS: software development",
        "Assembly: test cases",
        "Verilog: processor testing",
        "Git: version control"
      ],
      footerLink: [
        {
          name: "Student-Facing Build",
          url: "https://github.com/ece350TA/proc-toolchain/tree/main"
        },
        {
          name: "Demo Video",
          url: "https://youtu.be/kMTHl1as6HY"
        },
        {
          name: "Presentation Slides",
          url: "https://drive.google.com/file/d/1m_c1pTXa28TDnKNtDP8cHVIcavJRNH8s/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnails/chess.png"),
      projectName: "Java Chess Application",
      projectDesc:
        "I, along with seven other team members, developed a Java chess app with a focus on using OOP design principles. I spearheaded backend development, focusing on support for chess variations, taking a data-driven design approach, and developing a clear API.",
      mainSkills: [
        "Java: software development",
        "Git: version control and collaboration",
        "Design principles: application of MVC, design patterns, etc."
      ],
      footerLink: [
        {
          name: "Code Repository (My Section)",
          url: "https://gitfront.io/r/user-4226062/8eBccXDeUwHx/308-final/tree/src/main/java/oogasalad/GamePlayer/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/pi.png"),
      projectName: "Picasso Intelligence Website",
      projectDesc:
        "I refactored and documented the codebase for Picasso Intelligence's product website, drastically reducing duplicated code and providing a no-code way to add new products via JSON files. This reduced the overhead of adding new products by 80%.",
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
          name: "Code Repository",
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
      image: require("./assets/images/cube/render1.png"),
      projectName: "Fidget Cube",
      projectDesc:
        "3D printed cube with inserts for low profile mechanical switches",
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/cube/rw1.png"),
              caption: "Final product"
            },
            {
              pic: require("./assets/images/cube/rw2.png"),
              caption: "Final product (alternate angle)"
            },
            {
              pic: require("./assets/images/cube/render2.png"),
              caption: "Stylized render"
            },
            {
              pic: require("./assets/images/cube/render3.png"),
              caption: "Cube render"
            },
            {
              pic: require("./assets/images/cube/render4.png"),
              caption: "Stylized base render"
            }
          ]
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication"
      ]
    },
    {
      image: require("./assets/images/deskhook/render1.png"),
      projectName: "Desk Hook",
      projectDesc:
        "Bespoke hook fitted to my desk; holes headphones, hats, etc. and can be modified to support different use cases",
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/deskhook/rw1.png"),
              caption: "Final product"
            },
            {
              pic: require("./assets/images/deskhook/rw2.png"),
              caption: "Final product (in use)"
            },
            {
              pic: require("./assets/images/deskhook/render2.png"),
              caption: "Desk hook render"
            },
            {
              pic: require("./assets/images/deskhook/render15.png"),
              caption: "Desk hook assembly"
            },
            {
              pic: require("./assets/images/deskhook/rw3.png"),
              caption: "Final product (wrist rest)"
            },
            {
              pic: require("./assets/images/deskhook/rw4.png"),
              caption: "Final product (wrist rest in use)"
            },
            {
              pic: require("./assets/images/deskhook/render3.png"),
              caption: "Wrist rest render"
            },
            {
              pic: require("./assets/images/deskhook/render4.png"),
              caption: "Wrist rest assembly"
            }
          ]
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
      image: require("./assets/images/ghome/render1.png"),
      projectName: "Google Home Mount",
      projectDesc:
        "Custom mounting bracket for speaker system in my garage gym",
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/ghome/rw.png"),
              caption: "Final product"
            },
            {
              pic: require("./assets/images/ghome/render2.png"),
              caption: "Model render"
            },
            {
              pic: require("./assets/images/ghome/render3.png"),
              caption: "Model render"
            }
          ]
        }
        //  you can add extra buttons here.
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication"
      ]
    },
    {
      image: require("./assets/images/laptopstand/render1.png"),
      projectName: "CNC'd Laptop Stand",
      projectDesc:
        "Wooden, angled laptop stand fabricated using a CNC router. Also sanded, painted, and polished.",
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/laptopstand/rw1.png"),
              caption: "Final product"
            },
            {
              pic: require("./assets/images/laptopstand/rw2.png"),
              caption: "Final product (in use)"
            },
            {
              pic: require("./assets/images/laptopstand/render2.png"),
              caption: "Model render"
            },
            {
              pic: require("./assets/images/laptopstand/render3.png"),
              caption: "Model render"
            }
          ]
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
      image: require("./assets/images/key/render.png"),
      projectName: "Magnetic Keychain Holder",
      projectDesc:
        "3D printed magnetic keychain attachment. Self-aligns to a magnetic base. Can be used to hold keys, USB drives, etc.",
      footerLink: [
        {
          name: "Gallery",
          pics: [
            {
              pic: require("./assets/images/key/rw1.png"),
              caption: "Final product"
            },
            {
              pic: require("./assets/images/key/render9.png"),
              caption: "Model render (exploded)"
            },
            {
              pic: require("./assets/images/key/rw2.png"),
              caption: "Magnetic base"
            },
            {
              pic: require("./assets/images/key/render1.png"),
              caption: "Magnetic base (exploded)"
            },
            {
              pic: require("./assets/images/key/render4.png"),
              caption: "Magnetic base (exploded)"
            },
            {
              pic: require("./assets/images/key/render3.png"),
              caption: "Magnetic base (compressed)"
            },
            {
              pic: require("./assets/images/key/rw3.png"),
              caption: "Keychain attachment"
            },
            {
              pic: require("./assets/images/key/rw4.png"),
              caption: "Keychain attachment (separated)"
            },
            {
              pic: require("./assets/images/key/render6.png"),
              caption: "Keychain attachment (exploded)"
            },
            {
              pic: require("./assets/images/key/render7.png"),
              caption: "Keychain attachment (exploded)"
            },
            {
              pic: require("./assets/images/key/render8.png"),
              caption: "Keychain attachment (exploded)"
            }
          ]
        }
      ],
      mainSkills: [
        "Fusion 360: 3D modeling",
        "3D printing: custom part fabrication"
      ]
    },
    {
      image: require("./assets/images/watch/render1.png"),
      projectName: "Watch Charging Station",
      projectDesc:
        "3D printed casing for my Galaxy Watch charger in the shape of a rook. Comes with an attachment on top for an Apple Watch charger.",
      footerLink: [
        {
          name: "Gallery", // TODO
          pics: [
            {
              pic: require("./assets/images/watch/rw.png"),
              caption: "Final product"
            },
            {
              pic: require("./assets/images/watch/render2.png"),
              caption: "Model render"
            },
            {
              pic: require("./assets/images/watch/render3.png"),
              caption: "Model render"
            }
          ]
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
  title: "Papers",
  subtitle: "Reports I have contributed to at Duke University",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://arxiv.org/abs/2410.09684",
      title:
        "Technical Design Review of Duke Robotics Club's Oogway: An AUV for RoboSub 2024",
      description:
        "The technical design details of Oogway, Duke Robotics Club's autonomous underwater vehicle (AUV) for the 2024 RoboSub competition."
    },
    {
      url: "https://arxiv.org/abs/2410.10900",
      title:
        "Oogway: Designing, Implementing, and Testing an AUV for RoboSub 2023",
      description:
        "The technical design details of Oogway, Duke Robotics Club's autonomous underwater vehicle (AUV) for the 2023 RoboSub competition."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  title: emoji("Contact Me 📫"),
  // number: "+1 (440) 318-4013",
  email_address: "vzchen12@gmail.com",
  location: "Seattle, WA"
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
