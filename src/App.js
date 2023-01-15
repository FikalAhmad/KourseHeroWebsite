import "./App.css";
import gambarpertama from "./images/image-1.png";
import gambarkedua from "./images/image-2.png";
import gambarketiga from "./images/image-3.png";
import jamicon from "./images/jam-pasir.png";
import chaticon from "./images/chat-icon.png";
import arrowicon from "./images/arrow-icon.png";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <section className="navbar__logo">Kourse</section>
        <div className="nav__item">
          <ul className="nav__list">
            <li className="list__item">
              <a href="/home" className="link__item">
                <span>Home</span>
              </a>
            </li>
            <li className="list__item">
              <a href="/course" className="link__item">
                <span>Course</span>
              </a>
            </li>
            <li className="list__item">
              <a href="/post" className="link__item">
                <span>Post a Job</span>
              </a>
            </li>
            <li className="list__item">
              <a href="/contact" className="link__item">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__button">
          <button className="button__navbar">Sign Up</button>
        </div>
      </nav>

      <div className="container__home">
        <div className="content__home">
          <section className="content__home--header">
            Elevate Your Career to the Next Level
          </section>
          <p className="content__home--desc">
            Get expert-led instruction from experienced professionals in
            Industry and gain valuable skills and knowledge that can be applied
            to your career or personal life.
          </p>
          <div className="content__home--button">
            <button className="home__button1">Find a Course</button>
            <button className="home__button2">Learn More</button>
          </div>
        </div>

        <div className="card__1">
          <div className="card__image">
            <img src={gambarpertama} alt=""></img>
          </div>
          <div className="card__description">
            <div className="card__header">
              <div className="name-of-course">Web Development</div>
              <div className="type-of-course">Front End Development</div>
              <div className="price">$599</div>
            </div>
            <div className="card__body">
              <div className="card__body--duration">13h 18min | 18 Lessons</div>
              <div className="nested__view--button">
                <div className="view__button--text">View Detail</div>
                <img className="view__button--img" src={arrowicon} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="card__2">
          <div className="card__image">
            <img src={gambarkedua} alt=""></img>
          </div>
          <div className="card__description">
            <div className="card__header">
              <div className="name-of-course">Web Development</div>
              <div className="type-of-course">Front End Development</div>
              <div className="price">$599</div>
            </div>
            <div className="card__body">
              <div className="card__body--duration">13h 18min | 18 Lessons</div>
              <div className="nested__view--button">
                <div className="view__button--text">View Detail</div>
                <img className="view__button--img" src={arrowicon} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="card__3">
          <div className="card__image">
            <img src={gambarketiga} alt=""></img>
          </div>
          <div className="card__description">
            <div className="card__header">
              <div className="name-of-course">Web Development</div>
              <div className="type-of-course">Front End Development</div>
              <div className="price">$599</div>
            </div>
            <div className="card__body">
              <div className="card__body--duration">13h 18min | 18 Lessons</div>
              <div className="nested__view--button">
                <div className="view__button--text">View Detail</div>
                <img className="view__button--img" src={arrowicon} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container__description">
        <div className="description">
          <div className="desc__icon">
            <img className="icon__img" src={jamicon} alt=""></img>
          </div>
          <span className="desc__header">Self-paced Learning</span>
          <div className="desc__body">
            This feature allows learners to progress through the course at their
            own pace, rather than being tied to a fixed schedule. This can be
            especially useful for learners who have busy schedules or who prefer
            to learn at their own speed.
          </div>
        </div>
        <div className="description">
          <div className="desc__icon">
            <img className="icon__img" src={chaticon} alt=""></img>
          </div>
          <span className="desc__header">Instructor support</span>
          <div className="desc__body">
            Providing learners with access to the instructor can be a valuable
            feature, as it allows them to ask questions and get feedback in
            real-time. This could be in the form of office hours, live Q&A
            sessions, or one-on-one consultations.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
