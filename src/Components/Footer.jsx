export default function Footer() {
  return (
    <div>
      <div className="container">
        <hr />
        <div className="brand">
          <h1>Zakaria Haruna</h1>
          <p>
            A fullstack developer passionate about creating solution to
            challenging problems to make an impact
          </p>
          <p>
            <i class="fa-brands fa-square-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-dev"></i>
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
          </ul>
        </div>
        <div className="contacts">
          <h3>Contacts</h3>
          <p>zakariaharuna96@gmail.com</p>
          <p>Accra, Ghana</p>
        </div>
        <hr />
        <div className="copy-right">
          <p>&copy;2025 Zakaria Haruna. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
