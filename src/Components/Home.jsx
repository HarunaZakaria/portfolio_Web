export default function Home() {
  return (
    <div>
      <div className="container">
        <p>
          Available for <strong>Opportunities</strong>
        </p>
        <h1>Fullstack Developer</h1>
        <p>
          A passionate and results-oriented Software Engineer based in Ghana, I
          specialize in crafting dynamic and user-friendly web applications. My
          expertise lies in leveraging modern technologies to build scalable and
          efficient solutions. I bring a strong understanding of front-end
          development with React and responsive design using Bootstrap. On the
          backend, I am proficient in building robust and scalable APIs with
          Node.js and managing data effectively with MongoDB. I am eager to
          contribute my skills to innovative projects and collaborate with
          forward-thinking teams. Explore my portfolio to see examples of my
          work.
        </p>
        <div>
          <button className="btn btn-outline-warning ">Let's Connect</button>
          <button className="btn btn-primary">View My Work</button>
          <p>
            <i class="fa-brands fa-square-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-dev"></i>
          </p>
        </div>
        <div className="profile">
          <img src="./images/Profile.png" alt="Profile" />
        </div>
        <div>
          <div className="years-of-experience">
            <h1>2 +</h1>
            <p>Year of experience</p>
          </div>
          <div className="projects">
            <h1>15 +</h1>
            Projects Completed
          </div>
          <div className="technologies">
            <h1>10 +</h1>
            <p>Technologies Used</p>
          </div>
          <div className="client-satisfaction">
            <h1>100%</h1>
            <p>Client Satisfaction</p>
          </div>
        </div>
        <div className="featured-projects">
          <div>
            <p>Feature Projects</p>
            <h2>Completed Projects</h2>
            <p>
              The following are the projects that I have completed, showcasing
              my expertise as a <strong>Fullstack Developer</strong>
            </p>
          </div>
          <div className="projects">
            <div className="first-project">
              <img src="#" alt="#" />
              <h2>First Project</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in,
                fugit laboriosam nulla odio eum!
              </p>
              <p>
                <span className="rect"> React JS</span>{' '}
                <span className="node">Node JS</span>{' '}
                <span className="mysql">MySQL</span>{' '}
                <span className="bootstrap">Bootstrap</span>
              </p>
            </div>
            <div className="second-project">
              <img src="#" alt="#" />
              <h2>Second Project</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in,
                fugit laboriosam nulla odio eum!
              </p>
              <p>
                <span className="rect"> React JS</span>{' '}
                <span className="node">Node JS</span>{' '}
                <span className="mysql">MySQL</span>{' '}
                <span className="bootstrap">Bootstrap</span>
              </p>
            </div>
            <div className="third-project">
              <img src="#" alt="#" />
              <h2>Third Project</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in,
                fugit laboriosam nulla odio eum!
              </p>
              <p>
                <span className="rect"> React JS</span>{' '}
                <span className="node">Node JS</span>{' '}
                <span className="mysql">MySQL</span>{' '}
                <span className="bootstrap">Bootstrap</span>
              </p>
            </div>
            <div>
              <button className="btn btn-ouline-secondary">
                View All Projects
              </button>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>Clients Testimonial</p>
          <h2>What My Clients Say About Me</h2>
          <div className="first-client">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              impedit, quaerat magnam magni maiores commodi quam beatae fugit
              quisquam officiis.
            </p>
            <img src="#" alt="#" />
            <p>
              <span>Name</span> <span>Position</span>
            </p>
          </div>
          <div className="second-client">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              impedit, quaerat magnam magni maiores commodi quam beatae fugit
              quisquam officiis.
            </p>
            <img src="#" alt="#" />
            <p>
              <span>Name</span> <span>Position</span>
            </p>
          </div>
          <div className="third-client">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              impedit, quaerat magnam magni maiores commodi quam beatae fugit
              quisquam officiis.
            </p>
            <img src="#" alt="#" />
            <p>
              <span>Name</span> <span>Position</span>
            </p>
          </div>
          <div className="fourth-client">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              impedit, quaerat magnam magni maiores commodi quam beatae fugit
              quisquam officiis.
            </p>
            <img src="#" alt="#" />
            <p>
              <span>Name</span> <span>Position</span>
            </p>
          </div>
        </div>
        <div className="technologies-worked-with">
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
          <p>BOOTSTRAP</p>
          <p>REACT</p>
          <p>NODE</p>
          <p>REST API</p>
          <p>PYTHON</p>
          <p>PHP</p>
          <p>WORDPRESS</p>
          <p>MYSQL</p>
          <p>GJANGO</p>
          <p>GIT</p>
        </div>
      </div>
    </div>
  );
}
