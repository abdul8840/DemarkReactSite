import React from "react";
import "../../styles/team.css";
import Team01 from "../../images/team-01.png";
import Team02 from "../../images/team-02.png";
import Team03 from "../../images/team-03.png";
import Team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: Team01,
    name: "Muscat Ozil",
    position: "Product Developer",
  },

  {
    imgUrl: Team02,
    name: "Linda Martin",
    position: "Front-End Developer",
  },

  {
    imgUrl: Team03,
    name: "Zeril Mursal",
    position: "Product Designer",
  },

  {
    imgUrl: Team04,
    name: "Devid Denial",
    position: "CEO & Sr. Developer",
  },
];

const Team = () => {
  return (
    <section className="our_team">
      <div className="container">
        <div className="team_content">
          <h6 className="subtitle">Our Teams</h6>
          <h2>
            Meet With <span className="highlight">Our Teams</span>
          </h2>
        </div>

        <div className="team_wrapper">
          {teamMembers.map((item, index) => (
            <div className="team_item" key={index}>
              <div className="team_img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team_detail">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team-member-social">
                  <span>
                    <i class="ri-linkedin-box-fill"></i>
                  </span>
                  <span>
                    <i class="ri-instagram-fill"></i>
                  </span>
                  <span>
                    <i class="ri-facebook-circle-fill"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-fill"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
