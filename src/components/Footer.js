function Footer() {
  return (
    <section>
      {/*footer*/}
      <div style={{ backgroundColor: "#0f172a" }}>
        <div className="footer m-5 md:flex justify-between items-center p-3">
          <h2 className="foot__heading">Glow<span className="foot__head text-white">Fit</span>
          </h2>
          <div className="ml-1 md:flex gap-4 text-white">
            <a href="index.html">
              <p>Home</p>
            </a>
            <a href="glowfit-workout-library.html">
              <p>Workouts</p>
            </a>
            <a href="./meal-page/meal.html">
              <p>Nutrition</p>
            </a>
            <a href="quiz.html">
              <p>Quiz</p>
            </a>
            <a href="./progress.html">
              <p>Progress</p>
            </a>
            <a href="./community.html">
              <p>Community</p>
            </a>
          </div>
          <div className="ml-1 mt-5 md:m-0 md:flex gap-4 text-white">
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </div>
          <div className="socialmedia mt-5 md:m-0 flex gap-3 justify-start items-center text-white">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
          <div className="mt-5 md:m-0">
            <p className="text-xs text-slate-400">
              &copy; 2026 GlowFit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;