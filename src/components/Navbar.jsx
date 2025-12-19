import React from 'react';

const Navbar = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={`${process.env.PUBLIC_URL || ''}/image/images-removebg.png`} alt="" className="logo" />
          <img src={`${process.env.PUBLIC_URL || ''}/image/LOLICON.png`} alt="LOL" className="logo-small" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#" onClick={(e) => e.preventDefault()}>TRÒ CHƠI</a></li>
          <li><a href="#champions" onClick={(e) => handleNavClick(e, 'champions')}>TƯỚNG TIÊU BIỂU</a></li>
          <li><a href="#news" onClick={(e) => handleNavClick(e, 'news')}>TIN TỨC</a></li>
          <li><a href="#game" onClick={(e) => handleNavClick(e, 'game')}>THÔNG TIN CÁCH CHƠI</a></li>
        </ul>
        <div className="navbar-right">
          <button id="language-toggle">EN/VN</button>
          <a href="#" className="download-btn">TẢI GAME NGAY</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

