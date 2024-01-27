import { useEffect } from 'react';
import './Nav.css'; // Import your CSS file if you have one

const Nav = () => {
  useEffect(() => {
    // Function used to shrink nav bar removing paddings and adding black background
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 50) {
        nav.classList.add('affix');
        console.log("OK");
      } else {
        nav.classList.remove('affix');
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavToggle = () => {
    // Toggle the active class and show_list class on menu click
    const navTrigger = document.querySelector('.navTrigger');
    const mainListDiv = document.getElementById('mainListDiv');
    navTrigger.classList.toggle('active');
    console.log("Clicked menu");
    mainListDiv.classList.toggle('show_list');
    mainListDiv.style.display = mainListDiv.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <div>
      <nav className="nav">
        <div className="container">
          
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <span className="navTrigger" onClick={handleNavToggle}>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <section className="home"></section>

     
    </div>
  );
}

export default Nav;
