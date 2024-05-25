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
      "🖥 Develop apps and scripts in high level languages like Java, Python, and Matlab among others"
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
      targetID: ["Candy Tank", "Assembly Autotester"] //TODO: Add ECE TA?
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      targetID: []
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
      targetID: []
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift",
      targetID: []
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "fas fa-square-root-alt",
      targetID: []
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database",
      targetID: []
    }
  ],
  technologies: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      targetID: []
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce",
      targetID: []
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
      targetID: []
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      targetID: []
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire",
      targetID: []
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table",
      targetID: []
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-simple",
      targetID: []
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "fas fa-calculator",
      targetID: []
    }
  ],
  software: [
    {
      skillName: "XCode",
      fontAwesomeClassname: "fas fa-mobile-screen-button",
      targetID: []
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fas fa-mobile-screen",
      targetID: []
    },
    {
      skillName: "Fusion 360",
      fontAwesomeClassname: "fas fa-cube",
      targetID: []
    },
    {
      skillName: "SolidWorks",
      fontAwesomeClassname: "fas fa-cube",
      targetID: []
    },
    {
      skillName: "KiCad",
      fontAwesomeClassname: "fas fa-microchip",
      targetID: []
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-image",
      targetID: []
    },
    {
      skillName: "Illustrator",
      fontAwesomeClassname: "fas fa-image",
      targetID: []
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma",
      targetID: []
    }
  ],
  handson: [
    {
      skillName: "3D Printing",
      fontAwesomeClassname: "fas fa-print",
      targetID: []
    },
    {
      skillName: "Laser Cutting",
      fontAwesomeClassname: "fas fa-scissors",
      targetID: []
    },
    {
      skillName: "CNC Milling",
      fontAwesomeClassname: "fas fa-bore-hole",
      targetID: []
    },
    {
      skillName: "Soldering",
      fontAwesomeClassname: "fas fa-pen",
      targetID: []
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
      duration: "May 2025 - December 2025"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
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
      ]
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
      // desc: "Test",
      descBullets: [
        "Utilized AutoCAD to design the physical layout and electrical wiring of a remote testing and simulation laboratory",
        "Managed installation, wiring, and setup of programmable logic controllers and cellular communication modules ",
        "Developed, tested, and deployed simulator software with B&R development tools that interfaces with Ecolab’s existing Advanced Polymer Activation Systems software to enable remote technicians to analyze equipment in the field"
      ]
    },
    {
      role: "Intern - Robotics Engineer",
      company: "Picasso Intelligence",
      companylogo: require("./assets/images/piLogo.png"),
      date: "August 2023 - May 2024",
      descBullets: [
        "Developed software and hardware components for mechatronics projects, including a Python app for smart actuator control and visualization, as well as mechanical and electrical assembly of a high-output cooling vest for Veterans Affairs",
        "Rebuilt and documented website codebase to increase maintainability and allow easier addition of new products",
        "Managed several business-related operations, such as interviewing and onboarding new members, constructing promotional materials, and building a product catalog using software such as Figma and Photoshop"
      ]
    },
    {
      role: "Intern - Software Engineering",
      company: "Onto Innovation",
      companylogo: require("./assets/images/ontoLogo.png"),
      date: "May 2023 - August 2023",
      descBullets: [
        "Improved distributed computing reliability for AI Diffract, a 3D modeling software for semiconductor optics simulations",
        "Developed and implemented a solution for inconsistent results on refractive index calculations for transistors",
        "Built new UI features using WinUI and refactored legacy C++ code to be more readable and to increase memory safety"
      ]
    },
    {
      role: "Intern - Software Engineering",
      company: "nCino",
      companylogo: require("./assets/images/ncinoLogo.png"),
      date: "May 2022 – January 2023",
      descBullets: []
    },
    {
      role: "Intern - Software Engineering",
      company: "E-Sentience",
      companylogo: require("./assets/images/esentLogo.png"),
      date: "May 2022 – August 2022",
      descBullets: []
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
      descBullets: ["Digital Systems", "Outstanding Undergraduate TA Award"]
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "Duke University",
      companylogo: require("./assets/images/dukeLogo.png"),
      date: "August 2022 – May 2024",
      descBullets: [
        "Advanced Software Design and Implementation",
        "2x Outstanding Undergraduate TA Award"
      ]
    },
    {
      role: "Undergraduate Researcher (Software Engineering)",
      company: "ACkER Lab",
      companylogo: require("./assets/images/ackerLogo.png"),
      date: "January 2023 – May 2024",
      descBullets: []
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
