import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <>
      {/* Header Section */}
      <section className="header_container">
        <div className="header d-flex justify-content-between align-items-center px-4 py-3 bg-light shadow-sm">
          <a
            href="#"
            className="logo text-decoration-none fw-bold fs-5 text-dark"
          >
            Rent-an-Errand Cebu
          </a>

          <div className="header_right">
            <a href="#about-us" className="mx-2 text-dark text-decoration-none">
              About Us
            </a>
            <a href="#how-it-works" className="mx-2 text-dark text-decoration-none">
              How It Works
            </a>
            <a href="#contacts" className="mx-2 text-dark text-decoration-none">
              Contacts
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-us" id="about-us">
        <div className="container-fluid about_container">
          <div className="row align-items-center">
            <div className="col-md-6 text-section">
              <h1 style={{ color: "#420909", fontSize: "80px" }}>Get Help. Earn</h1>
              <h1 style={{ color: "#420909", fontSize: "80px" }}>Fast. Live Easy</h1>
              <p style={{ fontSize: "20px" }}>
                Rent-an-Errand Cebu is a local online platform that connects busy people who
                need help with everyday tasks to trusted locals who are ready to earn by
                offering their skills. Whether it’s cleaning, buying groceries, running errands,
                or simple household chores, our goal is to make life easier for Cebu City
                residents while creating opportunities for others to earn extra income—fast,
                simple, and hassle-free.
              </p>

              <div className="btn-container">
                <button
                  type="button"
                  className="my-button1"
                  onClick={() => (window.location.href = '/clientSignUp.html')}
                >
                  POST A JOB
                </button>
                <button
                  type="button"
                  className="my-button2"
                  onClick={() => (window.location.href = '/UserSignUp.html')}
                >
                  FIND WORKS
                </button>
              </div>
            </div>

            <div className="col-md-6 image-section">
              <img
                src="/images/bg.png"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
