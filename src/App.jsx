import './App.css';
import NavBar from './Component/NavBar';

function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Zakaria Haruna
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav text-cente">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <NavBar />
      <p>
        A passionate and results-oriented Software Engineer based in Ghana, I
        specialize in crafting dynamic and user-friendly web applications. My
        expertise lies in leveraging modern technologies to build scalable and
        efficient solutions. I bring a strong understanding of front-end
        development with React and responsive design using Bootstrap. On the
        backend, I am proficient in building robust and scalable APIs with
        Node.js and managing data effectively with MongoDB. I am eager to
        contribute my skills to innovative projects and collaborate with
        forward-thinking teams. Explore my portfolio to see examples of my work.
      </p>
    </>
  );
}

export default App;
