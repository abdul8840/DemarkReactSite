import React from "react";
import "../../styles/project.css";

import project4 from "../../images/project (4).jpg";
import project2 from "../../images/project (2).jpg";
import project3 from "../../images/project (3).jpg";
import project5 from "../../images/project (5).jpg";

import project1 from "../../images/project (1).jpg";
import project7 from "../../images/project.png";
import project8 from "../../images/project (8).jpg";
import project9 from "../../images/project (9).jpg";

const projectData = [
  {
    imgUrl: project4,
    title: "Project 1",
    subtitle: "SEO & Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },

  {
    imgUrl: project2,
    title: "Project 2",
    subtitle: "Space Dynamic SEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },

  {
    imgUrl: project3,
    title: "Project 3",
    subtitle: "Content Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },

  {
    imgUrl: project5,
    title: "Project 4",
    subtitle: "Digital Assests",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },
];

const projectData1 = [
  {
    imgUrl: project1,
    title: "Project 5",
    subtitle: "Affiliate Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },

  {
    imgUrl: project7,
    title: "Project 6",
    subtitle: "Email Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },

  {
    imgUrl: project8,
    title: "Project 7",
    subtitle: "Mobile Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },

  {
    imgUrl: project9,
    title: "Project 8",
    subtitle: "Social Media Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, earum?",
  },
];

const Project = ({ title, description, imageUrl }) => {
  return (
    <>
      <section className="project">
        <div className="container">
          <div className="service_top-content">
            <h6 className="subtitle">Our Projects</h6>
            <h2>
              See Our Successful <span className="highlight">Projects</span>
            </h2>
          </div>
          <div className="project-wrapper">
            {projectData.map((item, index) => (
              <div className="project-card" key={index}>
                <div className="project-img">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="project-content">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p className="description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="project-wrapper">
            {projectData1.map((item, index) => (
              <div className="project-card" key={index}>
                <div className="project-img">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="project-content">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p className="description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default Project;
