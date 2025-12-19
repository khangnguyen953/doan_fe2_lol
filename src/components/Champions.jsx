import React from 'react';

const getImagePath = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

const champions = [
  {
    name: 'Thresh',
    bgImage: getImagePath('/image/league-of-legends_thresh.jpg'),
    charImage: getImagePath('/image/threshnobg.png')
  },
  {
    name: 'Yasuo',
    bgImage: getImagePath('/image/Yasuo_87.jpg'),
    charImage: getImagePath('/image/hinh-nen-yasuo-4k-dep-nhat_040419375-removebg-preview.png')
  },
  {
    name: 'Lee Sin',
    bgImage: getImagePath('/image/1347715_leeSin.jpeg'),
    charImage: getImagePath('/image/storm-dragon-lee-sin-removebg-preview.png')
  },
  {
    name: 'Ezreal',
    bgImage: getImagePath('/image/1347714.jpeg'),
    charImage: getImagePath('/image/ezreal-league-of-4480x2520-10537-removebg-preview.png')
  },
  {
    name: 'Karma',
    bgImage: getImagePath('/image/karrma.jpg'),
    charImage: getImagePath('/image/removeKarma.png')
  }
];

const Champions = () => {
  return (
    <>
      <h2 className="section-title" id="champions">TƯỚNG TIÊU BIỂU</h2>
      <div className="card-container">
        {champions.map((champion, index) => (
          <div key={index} className="card">
            <div
              className="card_bg"
              style={{ backgroundImage: `url('${champion.bgImage}')` }}
            >
              <span className="title">{champion.name}</span>
            </div>
            <div className="card_char">
              <img src={champion.charImage} alt={champion.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Champions;

