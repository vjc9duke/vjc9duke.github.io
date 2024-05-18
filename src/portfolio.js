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
  phone: "440-318-4013", // TODO: add support for phone number
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
  subTitle: "TODO: something about mech, elec, cs interdiscipinary ",
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
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#/C++/C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Assembly",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Verilog",
      fontAwesomeClassname: "fas fa-v"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  technologies: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-simple"
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "fas fa-calculator"
    }
  ],
  software: [
    {
      skillName: "XCode",
      fontAwesomeClassname: "fas fa-mobile-screen-button"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fas fa-mobile-screen"
    },
    {
      skillName: "Fusion 360",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "SolidWorks",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "KiCad",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Illustrator",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  handson: [
    {
      skillName: "3D Printing",
      fontAwesomeClassname: "fas fa-print"
    },
    {
      skillName: "Laser Cutting",
      fontAwesomeClassname: "fas fa-scissors"
    },
    {
      skillName: "CNC Milling",
      fontAwesomeClassname: "fas fa-bore-hole"
    },
    {
      skillName: "Soldering",
      fontAwesomeClassname: "fas fa-pen"
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
      desc: "Master's coursework, etc." //,
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Duke University",
      logo: require("./assets/images/dukeLogo.png"),
      subHeader:
        "BSE in Electrical and Computer Engineering, BS in Computer Science, Latin Minor",
      duration: "August 2021 - May 2025",
      desc: "[TODO]: description of what I did here",
      descBullets: [
        "4.0 GPA",
        "Dean's List with Distinction",
        "2x Outstanding Undergraduate TA (Computer Science)",
        "Outstanding Undergraduate TA (Electrical and Computer Engineering)"
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
      desc: "Test",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Intern - Robotics Engineer",
      company: "Picasso Intelligence",
      companylogo: require("./assets/images/piLogo.png"),
      date: "August 2023 - May 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Intern - Analysis Software",
      company: "Onto Innovation",
      companylogo: require("./assets/images/ontoLogo.png"),
      date: "May 2023 - August 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  subtitle: "[TODO] subtitle]",
  projects: [
    {
      image: require("./assets/images/thumbnails/library.png"),
      projectName: "Library Patron Counter",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laser.png"),
      projectName: "Laser Tag Kit",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/robot.png"),
      projectName: "Duke Robotics",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const multiDiscProjects = {
  title: "Multidisciplinary Projects",
  subtitle: "[TODO] subtitle]",
  projects: [
    {
      image: require("./assets/images/thumbnails/turn.png"),
      projectName: "Auto Turntable",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laptop.png"),
      projectName: "Mini Laptop",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/350.png"),
      projectName: "Candy Tank",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
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
  subtitle: "[TODO] subtitle]",
  projects: [
    {
      image: require("./assets/images/thumbnails/autotester.png"),
      projectName: "Assembly Autotester",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/chess.png"),
      projectName: "Java Chess Application",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/pi.png"),
      projectName: "Picasso Intelligence Website",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/database.png"),
      projectName: "Anonymous Chatting App",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const mechProjects = {
  title: "Mechanical Projects",
  subtitle: "[TODO] subtitle]",
  projects: [
    {
      image: require("./assets/images/thumbnails/laptop.png"),
      projectName: "Fidget Cube",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laptop.png"),
      projectName: "Google Home Mount",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laptop.png"),
      projectName: "Desk Hooks",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laptop.png"),
      projectName: "CNC Laptop Stand",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/thumbnails/laptop.png"),
      projectName: "Watch Charging Station",
      projectDesc: "[TODO] description",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
        //  you can add extra buttons here.
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
  subtitle: "[TODO] insert something ehre",
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
