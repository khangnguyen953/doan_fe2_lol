import React, { useState } from 'react';

const DestroyBase = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState(null);

  const bases = [
    {
      thumb: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3f70356e890d0f5858fe9851f6f4de859223bf89-980x980.png?auto=format&fit=crop&q=80&h=96&w=96&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d79ab89872173d65758e134c07ef0645f7a0e504-3288x2100.png?auto=format&fit=fill&q=80&w=729',
      desc: '<strong>NHÀ CHÍNH CỦA BẠN</strong><br>Nhà Chính của bạn là nơi lính xuất hiện. Phía sau Nhà Chính của bạn là Bệ Đá Cổ, nơi bạn có thể nhanh chóng hồi máu và hồi năng lượng cũng như mở Cửa Hàng.',
      label: 'Nhà Chính Của Bạn'
    },
    {
      thumb: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/de5aec44fcea11a5320062399ff53b45bd76d060-980x980.png?auto=format&fit=crop&q=80&h=96&w=96&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5bf342fa15ae8a7cc0eda852fdb0361c5d7dcbbf-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: '<strong>NHÀ CHÍNH CỦA ĐỊCH</strong><br>Nằm sâu trong căn cứ của đội địch, Nhà Chính của địch cũng giống như của bạn. Phá hủy Nhà Chính của địch sẽ giúp đội của bạn giành chiến thắng.',
      label: 'Nhà Chính Của Địch'
    }
  ];

  const handleClick = (base) => {
    setSelectedImage(base.full);
    setSelectedDesc(base.desc);
  };

  return (
    <div className="play_version2">
      <div className="container">
        <div className="left_version2">
          <h2>PHÁ HỦY CĂN CỨ</h2>
          <p>
            Nhà Chính là trung tâm căn cứ của cả hai đội. Phá hủy Nhà Chính của
            kẻ địch trước để giành chiến thắng.
          </p>
          <div className="modes_version2">
            {bases.map((base, index) => (
              <div key={index} className="mode_version2">
                <img
                  id="main-house"
                  className="zoomable"
                  src={base.thumb}
                  alt={base.label}
                  onClick={() => handleClick(base)}
                />
                <p>{base.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right_version2">
          <div className="innerWrapper">
            {selectedImage && (
              <>
                <img
                  src={selectedImage}
                  alt="Hình lớn"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                />
                <p
                  style={{ color: 'white', marginTop: '12px' }}
                  dangerouslySetInnerHTML={{ __html: selectedDesc }}
                ></p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestroyBase;

