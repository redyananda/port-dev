import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-left-title">
        <h2>my <span style={{ color: "#c65040" }}>Work</span></h2>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-content">
          <img src="./portfolio_1.webp" alt="pict-travilla" />
        </div>
        <div className="portfolio-tech">
          <p>TypeScript</p>
          <p>JavaScript</p>
          <p>Tailwind CSS</p>
        </div>
        <h2 className="portfolio-title">
          travilla - smart travel itinerary plan
        </h2>
        <div className="portfolio-desc">
          <div className="portfolio-desc-card">
            <h2>Situation</h2>
            <p>
              Planning a trip manually is tedious - travelers have to guess how
              long to spend at each spot and rebuild their schedule every time
              plans change.
            </p>
          </div>
          <div className="portfolio-desc-card">
            <h2>Task</h2>
            <p>
              Build a web app that turns simple inputs (city, dates,
              arrival/departure times) into a structured, editable day-by-day
              itinerary, backed by a per-city database of places.
            </p>
          </div>
          <div className="portfolio-desc-card">
            <h2>Action</h2>
            <p>
              I built the app with Next.js, Prisma, and PostgreSQL. Its main
              feature is a tool that creates a travel plan automatically,
              sorting each day by arrival, full, or departure. I also added
              secure login so each user sees only their own trips.
            </p>
          </div>
        </div>
        <div className="portfolio-desc-card-result">
            <h2>Result</h2>
            <p>
              Delivered a fully working MVP where users can sign up, complete a
              guided wizard, and instantly receive an auto-generated itinerary
              saved to their account. The itinerary generator handles the tricky
              timing logic on its own - correctly adjusting each day based on
              arrival and departure times - which removes the tedious manual
              planning that inspired the project in the first place. The
              architecture turned out to be highly scalable: adding a new city
              is as simple as dropping in a single JSON file, with no code
              changes required. Because the entire stack is type-safe from the
              database schema all the way to the UI, the app stays reliable and
              easy to extend as new features are added. Building Travilla also
              deepened my understanding of modern full-stack patterns -
              especially how to balance Server Components and API Routes in the
              Next.js App Router, and how to design a clean relational schema
              that scales gracefully.
            </p>
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
