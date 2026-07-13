import "./hero-name.css";

export default function Hero() {
  const profilePhoto = `${import.meta.env.BASE_URL}assets/seksan-profile.jpg`;

  return (
    <section className="hero" id="home">
      <p className="eyebrow">Manufacturing data analyst / Power BI developer</p>
      <h1>Making manufacturing <em>clearer</em>, smarter and more efficient.</h1>
      <div className="hero-intro">
        <p className="hero-copy">I am Seksan Chaina, a production professional who combines process improvement, data analysis and dashboard design to turn operational data into action.</p>
        <figure className="profile-photo">
          <img src={profilePhoto} alt="Portrait of Seksan Chaina" />
          <figcaption>
            <strong>Seksan<br />Chaina</strong>
            <span>Rayong, Thailand</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-actions">
        <a className="button primary" href="#work">View solutions ↓</a>
        <a className="button text" href="mailto:seksan.chaina@gmail.com">Get in touch ↗</a>
      </div>
      <div className="hero-stats">
        <div><strong>10+</strong><span>Projects</span></div>
        <div><strong>5</strong><span>Years manufacturing</span></div>
        <div><strong>4 hr → 10 min</strong><span>Report time target</span></div>
      </div>
    </section>
  );
}
