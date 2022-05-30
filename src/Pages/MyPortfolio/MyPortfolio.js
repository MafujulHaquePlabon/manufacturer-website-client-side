import React from "react";
import plabonImg from "../Home/images/plabon1.jpg";

const MyPortfolio = () => {
  return (
    <div>
      <div className="card mx-5 md:mx-10 flex justify-center mt-6 lg:mt-16 items-center lg:mx-20 card-side bg-base-100 shadow-xl">
        <figure>
          <img src={plabonImg} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Hello,My name is Mafujul Haque Plabon</h2>
          <h2 className="text-xl font-semibold ">
            Email Address: <span>mafujul15-3076@diu.edu.bd</span>{" "}
          </h2>
          <h2 className="text-xl font-semibold">About Me</h2>
          <p>
            I am a passionate CSE student. I have been learning programming
            languages, web development, and computer science-related subjects to
            chase my dream 2 years till now. After completing my Bsc. in CSE I
            want to spending much time improving my web development skills.
            Every day I want to learn something new and share my knowledge with
            others.
          </p>
          <h4 className="text-xl font-semibold">Education</h4>
          <div className="grid grid-cols-3 gap-4">
            <p>
              B.Sc. in Computer Science Engineering (running) Daffodil
              International University Dhanmondi, Dhaka.
            </p>
            <p>H.S.C Gurudayal govt college,Kishoregonj, Dhaka.</p>
            <p>S.S.C Hossainpur Model Pilot school & college</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              My Skills on Web development:
            </h2>
            <div className="grid grid-cols-3">
              <div>
                <p>Html</p>
                <p>Css</p>
                <p>Bootstrap</p>
                <p>Tailwind</p>
              </div>
              <div>
                <p>Javascript</p>
                <p>React Js</p>
              </div>
              <div>
                <p>Node js</p>
                <p>Express js</p>
                <p>Mongodb</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {" "}
                My project live site link:
              </h2>
              <li className=" text-green-500 ">
                <a href="https://warehouse-management-9612f.web.app/">
                  {" "}
                  project1
                </a>
              </li>
              <li className=" text-green-500">
                <a href="https://independent-service-prov-f46ad.web.app/">
                  Project2
                </a>{" "}
              </li>
              <li className=" text-green-500">
                <a href="https://jolly-profiterole-614444.netlify.app/home">
                  Project3
                </a>
              </li>
            </div>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
