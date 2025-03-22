import Footer from "../../components/footer/Footer";
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
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fjs.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Javascript</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fts.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Typescript</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Freact.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>React</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnext.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Next.js </span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fredux.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Redux</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Ftailwind.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fsass.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>SASS</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/logo/bootstrap.svg"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Bootstrap</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/logo/bootstrap.svg"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Angular</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/logo/bootstrap.svg"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Zustand</span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="stacks-items">
              <li className="stacks-item d-flex">
                <h2>BACKEND</h2>
                <ul className="stacks-item-list d-flex flex-wrap">
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnode.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Node.Js</span>
                  </li>
                  <li className="stacks-item-list-item mx-5">
                    <img
                      src="https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fexpress.png&w=96&q=75"
                      alt="JS"
                      className="me-3"
                    />
                    <span>Express.js</span>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section className="experience">
            <h1>MY EXPERIENCE</h1>
            <ul className="experience-list">
              <li className="experience-item">
                <span>Singapore Airline</span>
                <h2>Software Engineer {"(Full stack)"}</h2>
                <span>Dec 2020 - Present</span>
              </li>
              <li className="experience-item">
                <span>Telsoft</span>
                <h2>Software Engineer {"(Full stack)"}</h2>
                <span>Dec 2020 - Present</span>
              </li>
            </ul>
          </section>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
