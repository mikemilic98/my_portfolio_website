export const data = {
  firstName: "Michael", 
  lastName: "Milic",
  headline: "Aspiring Software Developer",
  lunapic: "luna_and_me.jpg",
  tripic: "triathlon.png",
  strum: "guitar.png",
  biking: "cycling.jpg",
  dudu: "duduDrive.jpg",
  ais: "ais.jpg",
  respdf:"resume_latest_mike_milic.pdf",
  website: "http://www.michael-milic.ca",
  github: "http://github.com/mikemilic98",
  linkedin: "https://www.linkedin.com/in/sylvia-pap", 
  facebook: "https://www.facebook.com/michael.milic.5",
  skills: [
    "JavaScript",
    "Python",
    "React",
    "Flask",
    "Node.js",
    "MongoDB",
    "Docker"  
  ],
  projects: [
    {
      title: "Rogers Hack Smart Traffic",
      imageURL: "smartTraffic.gif", 
      description: "Smart Traffic Safety prediction and visualizer for city of Kelowna",
      technology: "React.js • MongoDB • Smart Lidar Python API • Pandas • Python",
      githubURL: "https://github.com/Dhruv1754/Rogers_Hackathon_5G" 
    },
    {
      title: "Personal Server DataBase and Drive",
      imageURL: "duduDrive.jpg",
      description: "User is able to easily and efficiently upload and download files from a Mongo database and personal mini drive",
      technology: "Raspberry Pi • MongoDB • Python • Docker • AKS • Redux • React.js • K8s • Node.js",
      githubURL: "https://github.com/DuduInnovations/Dudu-Drive"
    },
    {
      title: "FSR Matrix Team Lead UBC BEAR Engineering Team",
      imageURL: "bear_ubc.png",
      description: "UBC Bear Engineering aims to make bionic hand and enter in cybathlon competition. Headed up sub team whose goal was to identify objects without use of camera vision",
      technology: "Raspberry Pi • TensorFlow • Python • Pandas • Arduino",
      websiteURL: "https://bearubc.com/"
    }
  ]
}

export const contactItems = [
  {
    href: data.linkedin,
    icon: "fa fa-linkedin",
    text: "LinkedIn"
  },
  {
    href: data.github,
    icon: "fa fa-github",
    text: "GitHub"
  },

  {
    href: data.facebook,
    icon: "fa fa-facebook",
    text: "Facebook"
  },

]
