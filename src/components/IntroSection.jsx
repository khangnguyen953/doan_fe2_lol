import React, { useRef, useEffect } from 'react';

const IntroSection = ({ showLogo = true, buttonText = "Khám phá ngay" }) => {
  const handleScroll = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay error:', err);
      });
    }
  }, []);

  return (
    <section className="intro-section">
      <video 
        ref={videoRef}
        className="background-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        onError={(e) => console.log('Video error:', e)}
      >
        <source
          src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
          type="video/webm"
        />
      </video>
      <div className="overlay"></div>
      <div className="intro-content">
        {showLogo && (
          <img
            src={`${process.env.PUBLIC_URL || ''}/image/lol-logo-rendered-hi-res.png`}
            alt="Logo"
            className="intro-logo"
          />
        )}
        <a href="#explore" className="intro-button" onClick={handleScroll}>
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default IntroSection;

