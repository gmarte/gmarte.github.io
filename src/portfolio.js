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
  username: "Giancarlo Marte",
  title: "Hi all, I'm Giancarlo",
  subTitle: emoji(
    "your dedicated SAP integration specialist. My goal is to ensure robust business continuity for your organization. Let's partner up and drive your next project to success."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gmarte",
  linkedin: "https://www.linkedin.com/in/gmarte/",
  gmail: "me@gmarte.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/70892/giancarlo",
  codewars: "https://www.codewars.com/users/gmarte",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Over the years, I have worked on a wide range of projects, ranging from small websites to large enterprise applications. My ability to adapt to new technologies and methodologies has allowed me to consistently deliver high-quality work.",
  skills: [
    emoji(
      "🌌 Responsible for the design, development, and maintenance of SAP systems and applications"
    ),
    emoji(
      "💥 Proficient in automating tasks and integrating applications using REST API, with expertise in JSON, Python, and C#."
    ),
    emoji(
      "⚡ Working with various SAP modules and technologies, such as SAP ABAP, HANA, UI5/Fiori, NetWeaver, and integration technologies like PI/PO, CPI, HCI"
    ),
    emoji(
      "🧑‍💼 Collaborating and working with geographically remote teams,  business partners and stakeholders to ensure successful delivery of projects"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sapui5",
      fontAwesomeClassname: "fab fa-uikit"
    },
    {
      skillName: "abap",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pontificia Universidad Católica Madre y Maestra",
      logo: require("./assets/images/logoPUCMM.png"),
      subHeader: "Master on Business Administration, Business",
      duration: "September 2006 - April 2008",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Pontificia Universidad Católica Madre y Maestra",
      logo: require("./assets/images/logoPUCMM.png"),
      subHeader: "Bachelor Degree on Computer Science, Systems engineering",
      duration: "September 2001 - April 2005",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SAP", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Technology Solutions Manager",
      company: "Centro Cuesta Nacional",
      companylogo: require("./assets/images/ccnLogo.png"),
      date: "December 2021 – Present",
      desc: "",
      descBullets: []
    },
    {
      role: "Co-manager SAP Profitability Analysis, Financial Accounting and Human Resources",
      company: "Cesar Iglesias",
      companylogo: require("./assets/images/ciLogo.png"),
      date: "Jan 2018 – Dec 2021",
      desc: "",
      descBullets: []
    },
    {
      role: "Project Manager",
      company: "Centro Cuesta Nacional",
      companylogo: require("./assets/images/ccnLogo.png"),
      date: "Jan 2010 – Dec 2018",
      desc: "",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "Leading and Developing Technological Innovations for Established Companies",
  projects: [
    {
      image: require("./assets/images/argentoba.png"),
      projectName: "ArgentoBA",
      projectDesc: "The website serves as a real estate platform showcasing properties available for sale or rent, particularly in the Dominican Republic.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://argentoba.com/"
        },
        {
          name: "HTML5 - javascript - wordpress",          
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/FTM_Mascot.png"),
      projectName: "Family Task Manager",
      projectDesc: "Web platform that allows parents to assign chores and responsibilities to their children and reward them for completion.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ftm-v2-me-gmartecom.vercel.app/"
        },
        {
          name: "NextJS - React - Appwrite - Zustand",          
          url: "https://github.com/gmarte/FTMv2"
        }
        //  you can add extra buttons here.
      ]
    },
    //https://ftm-v2-me-gmartecom.vercel.app/
    {
      image: require("./assets/images/promises.png"),
      projectName: "Promises",
      projectDesc: "This web application is to provide a transparent and accountable system for tracking and reporting on the promises made by politicians to the public.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.youtube.com/watch?v=nGN2Qfxkr5k"
        },
        {
          name: "Github",
          url: "https://github.com/gmarte/promesas/"
        },
        {
          name: "Bootstrap - REST - Django",          
        },
      ]
    },
    {
      image: require("./assets/images/CCVA-GIF.gif"),
      projectName: "Assisted Sales",
      projectDesc: "The Assisted Sales project is a React Native application developed with the Expo framework, designed to interface with an SAP ERP 6.0 backend. The setup implies a robust enterprise mobile application capable of leveraging the vast functionalities and data offered by the SAP system, ensuring a cohesive experience for its users.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://youtu.be/zYN5LaIKr6o"
        },
        {
          name: "React Native - EXPO - SAP ECC 6.0",          
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("🏆 Certifications 🏆"),
  subtitle: "",

  achievementsCards: [
    {
      title: "CS50's Web programming with Python",
      subtitle:
        "On completion of CS50's Web Programming with Python and JavaScript, including six projects. Awarded from Cambridge, Massachusetts, in the year two thousand twenty-three.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "Harvard",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.cs50.io/c4ed3019-64fd-45ba-b882-896484790869.pdf"
        },
        {
          name: "edX Verified Certificate",
          url: "https://courses.edx.org/certificates/9b1932748a3c4f4186d2cd73a40ca353"
        },
        {
          name: "Capstone project",
          url: "https://promesas.onrender.com/"
        },
        {
          name: "Projects repository",
          url: "https://github.com/gmarte/CS50W"
        }
      ]
    },
    {
      title: "Introduction to Mobile Solution Development",
      subtitle:
        "SAP verifies that the candidate completed the course Introduction to Mobile Solution Development and passed the necessary exercises and exams to earn a course certificate.",
      image: require("./assets/images/sapLogo.png"),
      imageAlt: "SAP",
      footerLink: [
        {
          name: "Certificate Verification",
          url: "https://open.sap.com/verify/xelib-kagec-nigep-hagab-pifob"
        }
      ]
    },
    {
      title: "Introduction to Software Development on SAP HANA",
      subtitle:
        "SAP verifies that the candidate completed the course Introduction to Software Development on SAP HANA and passed the necessary exercises and exams to earn a course certificate.",
      image: require("./assets/images/sapLogo.png"),
      imageAlt: "SAP",
      footerLink: [
        {
          name: "Certificate Verification",
          url: "https://open.sap.com/verify/xoged-vykoc-fovus-kunap-vamyz"
        }
      ]
    },
    {
      title: "Python for Beginners",
      subtitle:
        "SAP verifies that the candidate completed the course Python for Beginners and passed the necessary exercises and exams to earn a course certificate. Result: 260.0 of 260.0 points (100.0%) The result belongs to the top 5% of this course.",
      image: require("./assets/images/sapLogo.png"),
      imageAlt: "SAP",
      footerLink: [
        {
          name: "Certificate Verification",
          url: "https://open.sap.com/verify/xibit-zesuz-horeg-cukyg-pimat"
        },
        {
          name: "Linkedin post",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6937765068688293888/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "gmarte_r",
  email_address: "me@gmarte.com"
};

// Twitter Section

const twitterDetails = {
  userName: "gmarte", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
