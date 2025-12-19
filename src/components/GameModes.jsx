import React, { useState, useRef, useEffect } from 'react';

const GameModes = () => {
  const [selectedMode, setSelectedMode] = useState(0);
  const [desc, setDesc] = useState('<strong>CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT</strong><br>Dọn đường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch trước khi Nhà Chính của bạn bị phá hủy.');
  const videoRef = useRef(null);

const getImagePath = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

  const modes = [
    {
      image: getImagePath('/image/SMR.avif'),
      video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4',
      desc: '<strong>CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT</strong><br>Dọn đường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch trước khi Nhà Chính của bạn bị phá hủy.',
      label: 'SUMMONER\'S RIFT'
    },
    {
      image: getImagePath('/image/Is4yyt3NwaPPwnnOkEGmFXCy1Nkg0ex4NuHQjF2J1GU.webp'),
      video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4',
      desc: '<strong>TẤT CẢ NGẪU NHIÊN</strong><br>CHỈ ĐI ĐƯỜNG GIỮA<br>Chiến đấu trên một cây cầu băng giá với những vị tướng ngẫu nhiên để xông thẳng tới Nhà Chính của địch trong chế độ 5v5 vui nhộn và hỗn loạn.',
      label: 'ARAM'
    },
    {
      image: getImagePath('/image/30.jpg'),
      video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4',
      desc: '<strong>MỘT TRẬN HỖN CHIẾN ĐỂ GIÀNH NGÔI VỊ BÁ CHỦ</strong><br>Tập hợp những vị tướng để chiến đấu cho bạn. Vượt qua 7 đối thủ khác để trở thành người sống sót cuối cùng.',
      label: 'ĐẤU TRƯỜNG CHÂN LÝ'
    }
  ];

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const source = video.querySelector('source');
      if (source) {
        const handleCanPlay = () => {
          video.play().catch(err => {
            console.log('Video play error:', err);
          });
        };
        
        video.pause();
        source.setAttribute('src', modes[selectedMode].video);
        video.load();
        video.addEventListener('canplay', handleCanPlay, { once: true });
        
        return () => {
          video.removeEventListener('canplay', handleCanPlay);
        };
      }
    }
  }, [selectedMode]);

  return (
    <div className="play" id="game">
      <div className="container">
        <div className="left">
          <h4>RẤT NHIỀU CÁCH</h4>
          <h1>CHƠI</h1>
          <button>CHƠI NGAY</button>
          <div className="modes">
            {modes.map((mode, index) => (
              <div key={index} className="mode">
                <img
                  src={mode.image}
                  alt={mode.label}
                  className={selectedMode === index ? 'selected' : ''}
                  onClick={() => {
                    setSelectedMode(index);
                    setDesc(mode.desc);
                  }}
                />
                <p>{mode.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="circle">
            <video ref={videoRef} width="100%" height="100%" autoPlay muted loop playsInline>
              <source src={modes[0].video} type="video/mp4" />
            </video>
          </div>
          <p className="desc" dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
      </div>
    </div>
  );
};

export default GameModes;

