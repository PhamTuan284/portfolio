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
      <div className="container">
        <div className="fade-in-page d-flex align-items-start justify-content-center vh-100 flex-column">
          <section className="header w-50">
            <h1>FRONTEND</h1>
            <h1>DEVELOPER</h1>
            <p>
              Hi! I'm <b>Tuan</b> . A creative Frontend Developer with 3+ years
              of experience in building high-performance, scalable, and
              responsive web solutions.
            </p>
            <button>MY CV</button>
          </section>
          <section className="stacks w-100">
            <h1>MY STACK</h1>
            <ul className="stacks-items">
              <li className="stacks-item d-flex">
                <h2>FRONTEND</h2>
                <ul className="stacks-item-list d-flex flex-wrap">
                  {FEStacksList.map((item) => (
                    <li className="stacks-item-list-item mx-5">
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
                  {BEStacksList.map((item) => (
                    <li className="stacks-item-list-item mx-5">
                      <img src={item.imgUrl} alt="JS" className="me-3" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </section>
          <section className="experience">
            <h1>MY EXPERIENCE</h1>
            <ul className="experience-list">
              {experienceList.map((item) => (
                <li className="experience-item">
                  <span>{item.company}</span>
                  <h2>{item.role}</h2>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </section>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
