import React, { useState, useRef, useEffect } from 'react';

const PowerUp = () => {
  const [selectedMode, setSelectedMode] = useState(0);
  const [desc, setDesc] = useState('<strong>TÍCH LŨY KINH NGHIỆM</strong><br>Khi một tướng thu thập đủ lượng điểm kinh nghiệm nhất định, họ sẽ thăng cấp và có thể mở khóa hoặc cường hóa các kỹ năng cũng như gia tăng chỉ số cơ bản. Thu thập điểm kinh nghiệm bằng cách tiêu diệt/hỗ trợ tiêu diệt lính và tướng địch, cũng như phá hủy các công trình phòng thủ.');
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const modes = [
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/04c0cbc07a2a5bf2374d4e6c547de0cd7c3ccde1-391x219.png',
      video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8d49feeb42c45ac59b1d6cc1cae71d64ce0089f7.webm',
      desc: '<strong>TÍCH LŨY KINH NGHIỆM</strong><br>Khi một tướng thu thập đủ lượng điểm kinh nghiệm nhất định, họ sẽ thăng cấp và có thể mở khóa hoặc cường hóa các kỹ năng cũng như gia tăng chỉ số cơ bản. Thu thập điểm kinh nghiệm bằng cách tiêu diệt/hỗ trợ tiêu diệt lính và tướng địch, cũng như phá hủy các công trình phòng thủ.'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/068c135cf8a490007e50f74bb3325b0511c92f1b-391x219.png',
      video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/9b52333c4284f3e8e95a36981ba76c11820e0ac5.webm',
      desc: '<strong>KIẾM VÀNG</strong><br>Vàng là đơn vị tiền tệ trong trận đấu được sử dụng để mua trang bị cho tướng. Thu thập vàng bằng cách tiêu diệt/hỗ trợ tiêu diệt lính và tướng địch, cũng như phá hủy các công trình phòng thủ và sử dụng những trang bị cộng thêm vàng.'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c7df3dd081278445386681dae4600aaec02ea755-391x219.png',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7c790e73c1d817e57c174d4c4cdceb87d061e5b6-2560x1440.png',
      desc: '<strong>CỬA HÀNG</strong><br>Cửa Hàng là nơi bạn có thể mua bán các trang bị bằng số vàng bạn đã kiếm được. Bạn chỉ có thể vào Cửa Hàng khi đứng tại Bệ Đá Cổ.'
    }
  ];

  useEffect(() => {
    const mode = modes[selectedMode];
    if (mode.video) {
      setShowVideo(true);
      setShowImage(false);
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
          source.setAttribute('src', mode.video);
          video.load();
          video.addEventListener('canplay', handleCanPlay, { once: true });
          
          return () => {
            video.removeEventListener('canplay', handleCanPlay);
          };
        }
      }
    } else if (mode.full) {
      setShowVideo(false);
      setShowImage(true);
      setImageSrc(mode.full);
    }
  }, [selectedMode]);

  return (
    <div className="play-version6">
      <div className="container-version6">
        <div className="left-version6">
          <h2>TĂNG SỨC MẠNH CHO TƯỚNG</h2>
          <p>
            Các vị tướng trở nên mạnh mẽ hơn bằng cách thu thập điểm kinh nghiệm
            để thăng cấp và kiếm vàng để mua những trang bị uy lực hơn theo tiến
            trình của trận đấu. Luôn dẫn đầu trong hai yếu tố này là điều quan
            trọng để áp đảo đội địch và phá hủy căn cứ của họ.
          </p>
          <button>CHƠI NGAY</button>
          <div className="modes-version6">
            {modes.map((mode, index) => (
              <div key={index} className="mode-version6">
                <img
                  src={mode.image}
                  alt={`Mode ${index + 1}`}
                  className={selectedMode === index ? 'selected' : ''}
                  onClick={() => {
                    setSelectedMode(index);
                    setDesc(mode.desc);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="right-version6">
          <div className="circle-version6">
            {showVideo && (
              <video ref={videoRef} width="100%" height="100%" autoPlay muted loop playsInline style={{ display: showVideo ? 'block' : 'none' }}>
                <source src={modes[0].video} type="video/webm" />
              </video>
            )}
            {showImage && (
              <img
                src={imageSrc}
                alt="Full display"
                className="full-display"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: showImage ? 'block' : 'none'
                }}
              />
            )}
          </div>
          <p className="desc-version6" dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
      </div>
    </div>
  );
};

export default PowerUp;

