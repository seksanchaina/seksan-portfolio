import "./hero-name.css";

export default function Hero() {
  const profilePhoto = `${import.meta.env.BASE_URL}assets/seksan-profile.jpg`;

  return (
    <section className="hero" id="home">
      <p className="eyebrow">Manufacturing Data Analyst · Power BI Developer</p>
      <h1><span>Smarter data.</span><em>Stronger production.</em></h1>

      <div className="hero-intro">
        <figure className="profile-photo">
          <img src={profilePhoto} alt="Portrait of Seksan Chaina" />
        </figure>
        <div className="hero-profile-copy">
          <p className="profile-name">Seksan Chaina</p>
          <p className="profile-location">Rayong, Thailand</p>
          <p className="hero-copy">I turn process improvement and operational data into Power BI dashboards that help teams act faster.</p>
        </div>
      </div>

      <div className="hero-actions">
        <a className="button primary" href="#work">Explore my work <span aria-hidden="true">→</span></a>
        <a className="button secondary" href="mailto:seksan.chaina@gmail.com">Email me <span aria-hidden="true">↗</span></a>
      </div>

      <div className="hero-stats">
        <div><strong>10+</strong><span>Projects</span></div>
        <div><strong>5</strong><span>Years manufacturing</span></div>
        <div><strong>4 hr → 10 min</strong><span>Report time target</span></div>
      </div>
    </section>
  );
}
