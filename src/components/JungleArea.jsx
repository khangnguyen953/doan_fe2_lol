import React, { useState } from 'react';

const JungleArea = () => {
  const [selectedImage, setSelectedImage] = useState('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ed4bef5c2369044d76cf535e038b6c1f8d323f13-3288x2100.png?auto=format&fit=fill&q=80&w=673');
  const [selectedTitle, setSelectedTitle] = useState('BARON NASHOR');
  const [selectedDesc, setSelectedDesc] = useState('Baron Nashor là quái vật hùng mạnh nhất trong khu vực rừng. Đội tiêu diệt Baron sẽ được cộng thêm sức mạnh công kích, sức mạnh phép thuật, cường hóa biến về và gia tăng đáng kể sức mạnh của lính xung quanh.');

  const monsters = [
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c5aa9d0609c03b92ebb854c29537f9d5b9afe49f-980x980.png?auto=format&fit=crop&q=80&h=38&w=38&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ed4bef5c2369044d76cf535e038b6c1f8d323f13-3288x2100.png?auto=format&fit=fill&q=80&w=673',
      desc: '<strong>BARON NASHOR</strong><br>Baron Nashor là quái vật hùng mạnh nhất trong khu vực rừng. Đội tiêu diệt Baron sẽ được cộng thêm sức mạnh công kích, sức mạnh phép thuật, cường hóa biến về và gia tăng đáng kể sức mạnh của lính xung quanh.',
      label: 'BARON NASHOR'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dd3af4418ea63af03ad11d0c065f66a282a3cd7d-980x980.png?auto=format&fit=crop&q=80&h=38&w=38&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1faaf44ebe07ec29900a21db0810b130f4777342-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: '<strong>RỒNG</strong><br>Rồng là những quái vật hùng mạnh với khả năng ban bùa lợi độc nhất tùy theo loại Rồng Nguyên Tố mà đội bạn tiêu diệt. Có 5 Rồng Nguyên Tố và 1 Rồng Ngàn Tuổi.',
      label: 'RỒNG'
    }
  ];

  const handleClick = (monster) => {
    setSelectedImage(monster.full);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = monster.desc;
    const titleElement = tempDiv.querySelector('strong');
    if (titleElement) {
      setSelectedTitle(titleElement.textContent.trim());
      titleElement.remove();
    }
    setSelectedDesc(tempDiv.innerHTML.trim());
  };

  return (
    <section className="version4">
      <div className="container">
        <div className="left-section_version4">
          <h1 className="title_version4">KHÁI QUÁT VỀ<br />KHU VỰC RỪNG</h1>
          <p className="description_version4">
            Giữa các đường là khu vực rừng, nơi sinh sống của nhiều loài quái
            rừng và cây cỏ. Hai loài quái vật quan trọng nhất là Baron Nashor và
            Rồng. Tiêu diệt những quái vật này sẽ ban cho đội bạn các bùa lợi
            độc nhất và thậm chí còn có thể xoay chuyển cục diện trận đấu.
          </p>
          <div className="circles_version4">
            {monsters.map((monster, index) => (
              <div key={index}>
                <img
                  className="circle_version4"
                  src={monster.image}
                  alt={monster.label}
                  onClick={() => handleClick(monster)}
                />
                <div className="circle-label_version4">{monster.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section_version4">
          <img className="large-image_version4" src={selectedImage} alt="" />
        </div>
        <div className="bottom-description_version4">
          <h1>{selectedTitle}</h1>
          <p dangerouslySetInnerHTML={{ __html: selectedDesc }}></p>
        </div>
      </div>
    </section>
  );
};

export default JungleArea;

