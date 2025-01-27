// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Syeda",
  middleName: "Ayman",
  lastName: "Ahmed",
  message: " Dedicated to leading data driven digital transformations and crafting intelligent solutions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/saayman1",
    },
    {
      image: "fa-envelope",
      url: "mailto:saayman1999@outlook.com",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ayman-ahmed-42664817b",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/s_ayman_ahmed01",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e: ( Called imageLink )profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nheadshot.png"),
  imageSize: 375,
  message:
    "As a bilingual technology consultant with over 3 years of experience working with the software development life cycle, I am very comfortable identifying opportunities for automation. My expertise spans software development, machine learning, and intelligent automation. Recognized with accolades from the Canadian Law Awards for delivering effective RPA solutions using Power Automate, I excel in creating data-driven insights and predictive models. Proficient in adopting new languages and tools, I am committed to driving digital transformations.",
  resume: "https://drive.google.com/file/d/1moHlfsj1AlJmZvE_X52bHBF-bc28VNHe/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "saayman1", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [""],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Passion Projects",
  message:
    "When I'm not enjoying a game on my Nintendo Switch or spending time with family, I've been fortunate to blend my passions with purposeful endeavors. I've volunteered at the Sadaqa Food Bank, celebrated diverse cultures at United Way workshops, and co-hosted a podcast exploring transparency in reporting. While working on Andrew Leslie and Marie France Lalonde's Youth Council, my team was recognized with the Orleans 150 award for contribution to the community. Each experience has reinforced the importance of collaboration, strategy, and empathy in my professional journey.",
  images: [
    { 
      img: require("../assets/img/syr_ref_slide.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/thought_theory_slide.png"), 
      label: "", 
      paragraph: "" 
    },
     { 
      img: require("../assets/img/150slide.png"), 
      label: "", 
      paragraph: ""  
    },
    { 
      img: require("../assets/img/slide_replace_mw.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Predictive Modeling", value: 90 },
    { name: "RPA Development", value: 75 },
    { name: "Power Automate", value: 95 },
    { name: "Power BI", value: 80 },
    { name: "HTML/CSS", value: 70 },
    { name: "UiPath", value: 80 },
  ],
  softSkills: [
    { name: "RPA Strategy", value: 80 },
    { name: "Requirements Gathering", value: 90 },
    { name: "Technical Documentation", value: 85 },
    { name: "Client Engagement", value: 85 },
    { name: "Data Visualization", value: 75 },
    { name: "AI Strategy", value: 90 },
    { name: "Technical Training and Guidance", value: 85 },
    { name: "Process Optimization", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Digital Transformation or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "saayman1999@outlook.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Digital and Emerging Technologies Consultant', 
      company: 'Ernst & Young (EY)',// Here Add Company Name
      companylogo: require('../assets/img/EY_logo_2019.svg.png'),
      date: 'June 2022 – November 2023',
    },
    {
      role: 'Jr Software Developer',
      company: 'Department of National Defence',
      companylogo: require('../assets/img/dnd_finale_final_4.jpg'),
      date: 'May 2021 – March 2022',
    },
    {
      role: 'Analyst/Tester', 
      company: 'Canada Revenue Agency',// Here Add Company Name
      companylogo: require('../assets/img/CRA-logo.png'),
      date: 'June 2019 – October 2019',
    },
    {
      role: 'Special Events Coordinator', 
      company: 'Canada Revenue Agency',// Here Add Company Name
      companylogo: require('../assets/img/CRA-logo.png'),
      date: 'June 2018 – October 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
