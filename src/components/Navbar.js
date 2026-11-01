

function Navbar() {
  return (
    <section className="flex justify-center mt-5">
      {/*Navbar*/}
      <nav
        className="navbar relative inline-flex gap-5 rounded-full border-2 border-orange-500 items-center md:justify-center p-3">
        <a href="index.html" className="shrink-0">
          <img src="/images/l1.png" alt="WellLife logo" className="h-10 w-10 object-contain" />
        </a>
        <h1 className="heading">Glow<span className="heading__1">Fit</span></h1>
        <ul className="hidden md:flex gap-5 items-center">
          <a href="index.html">
            <li className="nav-link">Home</li>
          </a>
          <a href="glowfit-workout-library.html">
            <li className="nav-link">Workout</li>
          </a>
          <a href="./meal-page/meal.html">
            <li className="nav-link">Nutrition</li>
          </a>
          <a href="quiz.html">
            <li className="nav-link">Quiz</li>
          </a>
          <a href="progress.html">
            <li className="nav-link">Progress</li>
          </a>
          <a href="community.html">
            <li className="nav-link">Community</li>
          </a>
        </ul>
        <i className="nav-link fa-solid fa-magnifying-glass "></i>
        <a href="login.html"><i className="nav-link1 fa-solid fa-user"></i></a>
        <button id="menuBtn" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" width="30" height="30">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <ul id="menu" style={{ backgroundColor: "#214E3D" }}
          className="hidden md:hidden absolute right-0 top-full w-30 flex-col gap-3 text-white text-right px-4 pb-4 z-50">
          <li className="hover:bg-green-200 hover:text-green-900 active:text-orange-800 rounded px-4 py-1 mt-2"><a
            className="hover:underline" href="index.html">Home</a>
          </li>
          <li className="hover:bg-green-200 hover:text-green-900 active:text-orange-800 rounded px-4 py-1"><a
            className="hover:underline" href="glowfit-workout-library.html">Workout</a></li>
          <li className="hover:bg-green-200 hover:text-green-900 active:text-orange-800 rounded px-4 py-1"><a
            className="hover:underline" href="./meal-page/meal.html">Nutrition</a></li>
          <li className="hover:bg-green-200 hover:text-green-900 active:text-orange-800 rounded px-4 py-1"><a
            className="hover:underline" href="quiz.html">Quiz</a></li>
          <li className="hover:bg-green-200 hover:text-green-900 active:text-orange-800 rounded px-4 py-1"><a
            className="hover:underline" href="progress.html">Progress</a></li>
          <li className="hover:bg-green-200 hover:text-green-900 active:text-orange-800 rounded px-4 py-1"><a
            className="hover:underline" href="community.html">Community</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;