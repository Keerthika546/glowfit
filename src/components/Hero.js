
function Hero() {
  return (
    <section>
      {/*Hero*/}
      <div className="heroSection">
        <div className="banner_img">
          <img src="/images/banner.jpg" alt="yoga" />
        </div>
      </div>
      <div className="title">
        <h1 className="heroSection__heading">Your Wellness,<br /><span className="heroSection__heading1">Your Life</span>
        </h1>
        <p>Simple Workouts,healthy meal,smart tools</p>
        <p>and personalised plans,all in one place.</p>
        <a href="glowfit-workout-library.html" className="btn inline-flex justify-center items-center gap-2 w-fit">
          Start Your Journey <i className="fa-solid fa-arrow-right w-4"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;