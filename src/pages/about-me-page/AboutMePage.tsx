import Footer from "../../components/footer/Footer";
import {
  BEStacksList,
  experienceList,
  FEStacksList,
} from "../../constants/AboutMePageConstants";
import "./AboutMePage.scss";

export default function AboutMePage() {
  return (
    <>
      <div className="about-me container">
        <div className="fade-in-page">
          <section className="header w-50 vh-100">
            <div>
              <h1>FRONTEND</h1>
              <h1 className="ms-4">DEVELOPER</h1>
              <p className="my-5">
                Hi! I'm <b>Tuan</b> . A creative Frontend Developer with 3+
                years of experience in building high-performance, scalable, and
                responsive web solutions.
              </p>
              <button>MY CV</button>
            </div>
          </section>

          <section className="describe w-100 vh-100">
            <div>
              <h1 className="mb-5">
                I believe in a user centered design approach, ensuring that
                every project I work on is tailored to meet the specific needs
                of its users.
              </h1>
              <span>This is me.</span>
              <hr className="mb-4" />
              <div className="d-flex">
                <h1 className="describe-name">Hi, I'm Tuan.</h1>
                <div className="w-100">
                  <p>
                    I'm a frontend web developer dedicated to turning ideas into
                    creative solutions. I specialize in creating seamless and
                    intuitive user experiences.
                  </p>
                  <p>
                    My approach focuses on creating scalable, high-performing
                    solutions tailored to both user needs and business
                    objectives. By prioritizing performance, accessibility, and
                    responsiveness, I strive to deliver experiences that not
                    only engage users but also drive tangible results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="stacks w-100 vh-100">
            <div>
              <h1 className="mb-5">MY STACK</h1>
              <ul className="stacks-items">
                <li className="stacks-item d-flex">
                  <h2>FRONTEND</h2>
                  <ul className="stacks-item-list d-flex flex-wrap">
                    {FEStacksList.map((item, index) => (
                      <li className="stacks-item-list-item mx-5" key={index}>
                        <img src={item.imgUrl} alt="JS" className="me-3" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className="stacks-items">
                <li className="stacks-item d-flex">
                  <h2>BACKEND</h2>
                  <ul className="stacks-item-list d-flex flex-wrap">
                    {BEStacksList.map((item, index) => (
                      <li className="stacks-item-list-item mx-5" key={index}>
                        <img src={item.imgUrl} alt="JS" className="me-3 ms-4" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section className="experience vh-100">
            <div>
              <h1 className="mb-5">MY EXPERIENCE</h1>
              <ul className="experience-list">
                {experienceList.map((item, index) => (
                  <li className="experience-item mb-5" key={index}>
                    <span>{item.company}</span>
                    <h2>{item.role}</h2>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
