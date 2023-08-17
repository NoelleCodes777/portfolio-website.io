  import React, {Fragment} from "react";
import about_me_img from "../Image/about_me_img.png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <section className="about_me" id="about_myself">
      <div className="container_01">
        <div className="my_img">
          <img id="img" src={about_me_img} alt="profile_image" />
        </div>
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            I am a Front-end Developer and Designer . I have always
            been intrigued by Knowledge 🧠 and learning new things. Throughout
            my life, I have spoken, read and written in English fluently.
            I teach robotics and virtual reality to young girls aspiring a skill in Tech.
            I am very inquisitive to the extent that I was given an award for it. I love 
            challenging myself into trying new things.As a resilient developer,😎 I am open to work
            with businesses.
            
          </p>
          <div className="personal_info">
            {personal_info_data.map((data, index) => {
              return (
                <Fragment key={index}>
                  <div className="abc" key={index}>
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
