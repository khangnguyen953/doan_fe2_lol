import React, { useState } from 'react';

const ClearLane = () => {
  const [selectedImage, setSelectedImage] = useState('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/351bb454c18a5f55dc1d47ba5674e246bfaa171b-3288x2100.png?auto=format&fit=fill&q=80&w=1350');
  const [selectedTitle, setSelectedTitle] = useState('TRỤ');
  const [selectedDesc, setSelectedDesc] = useState('Trụ gây sát thương lên lính và tướng địch, đồng thời cung cấp tầm nhìn giới hạn trong Sương Mù cho đồng minh. Hãy cho lính đi vào trước khi tấn công các công trình này để tránh nhận sát thương và xông lên chiến đấu.');

  const structures = [
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c955eecea79c17e8f5bcd5b4108e22dc674ad389-980x980.png?auto=format&fit=crop&q=80&h=38&w=38&crop=center',
      largeImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/351bb454c18a5f55dc1d47ba5674e246bfaa171b-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: 'Trụ gây sát thương lên lính và tướng địch, đồng thời cung cấp tầm nhìn giới hạn trong Sương Mù cho đồng minh. Hãy cho lính đi vào trước khi tấn công các công trình này để tránh nhận sát thương và xông lên chiến đấu.',
      label: 'TRỤ'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d173c3455cefd58b2a5817d9f75653935eff1393-980x980.png?auto=format&fit=crop&q=80&h=38&w=38&crop=center',
      largeImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c56d550aca55bcf28aeac0f2d9ecf35d7ff2c4f-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: 'Mỗi Nhà Lính đều được bảo vệ bởi 1 Trụ. Khi bị phá hủy, Lính Siêu Cấp sẽ xuất hiện trên đường đó trong vòng vài phút. Sau đó, Nhà Lính sẽ được khôi phục và Lính Siêu Cấp sẽ ngừng xuất hiện.',
      label: 'NHÀ LÍNH'
    }
  ];

  const handleClick = (structure) => {
    setSelectedImage(structure.largeImage);
    setSelectedTitle(structure.label);
    setSelectedDesc(structure.desc);
  };

  return (
    <div className="version3">
      <div className="container">
        <div className="left-version3">
          <div className="title-version3">DỌN ĐƯỜNG</div>
          <div className="description-version3">
            Đội của bạn cần dọn được ít nhất một đường để có thể tiến tới Nhà
            Chính của địch. Trên đường sẽ có các chốt chặn phòng thủ gọi là trụ
            và nhà lính. Mỗi đường sẽ có 3 trụ và 1 nhà lính, mỗi Nhà Chính được
            bảo vệ bởi 2 trụ.
          </div>
          <div className="circles-version3">
            {structures.map((structure, index) => (
              <div key={index}>
                <img
                  className="circle-version3"
                  src={structure.image}
                  alt={structure.label}
                  onClick={() => handleClick(structure)}
                />
                <div className="circle-label-version3">{structure.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section-version3">
          <img className="large-image-version3" src={selectedImage} alt="" />
        </div>
        <div className="bottom-description-version3">
          <h1>{selectedTitle}</h1>
          <div>
            <p>{selectedDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearLane;

