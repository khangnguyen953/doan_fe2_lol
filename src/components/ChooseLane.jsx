import React, { useState } from 'react';

const ChooseLane = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDesc, setSelectedDesc] = useState('');

  const lanes = [
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8dac0c1318083c411c90f5f94feec17e84kowo52b-980x980.png?auto=format&fit=crop&q=80&h=96&w=96&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fc8d0c8c803a8e91a1912df9054b3be90211a2d9-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: '<strong>ĐƯỜNG TRÊN</strong><br>Các vị tướng đường trên là những đấu sĩ đơn độc ngoan cường của cả đội. Nhiệm vụ của họ là bảo vệ đường của mình và tập trung xử lý các thành viên nguy hiểm nhất của đội địch.',
      label: 'ĐƯỜNG TRÊN'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fa03a69b7c666230ae6945b83078e8a26027403a-980x980.png?auto=format&fit=crop&q=80&h=96&w=96&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/eb84be329ef915096e908527267852ff26845bba-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: '<strong>RỪNG</strong><br>Các vị tướng đi rừng rất đam mê săn mồi. Rình rập giữa các đường một cách lén lút và khéo léo, họ để mắt tới những con quái rừng quan trọng nhất và nhảy ra đoạt mạng khi kẻ địch mất cảnh giác.',
      label: 'RỪNG'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/62fcfeb7dcbb737f0cdaceb554daf4237f2c234a-980x980.png?auto=format&fit=crop&q=80&h=96&w=96&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/245d81d16cb5fef638753ce7d83e137a4d2aaca7-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: '<strong>ĐƯỜNG GIỮA</strong><br>Các vị tướng đường giữa là những nhân tố chẳng ngán ai với khả năng dồn sát thương—cho dù là trong chiến đấu đơn lẻ hay giao tranh tổng. Đối với họ, giao tranh là một vũ điệu nguy hiểm, nơi họ luôn tìm kiếm sơ hở của kẻ địch để tiễn chúng lên bảng đếm số.',
      label: 'ĐƯỜNG GIỮA'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1059c2aebd67b535ce1348fa0b72b453a46f6b5f9-980x980.png?auto=format&fit=crop&q=80&h=96&w=96&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/87489b0e450b3fa59e176a3189c61c8eb9092c78-3288x2100.png?auto=format&fit=fill&q=80&w=1350',
      desc: '<strong>ĐƯỜNG DƯỚI</strong><br>Các vị tướng đường dưới giống như những khẩu pháo thủy tinh vậy. Vì rất mong manh, dễ vỡ nên họ cần được bảo vệ trong giai đoạn đầu trận trước khi có thể tích lũy đủ vàng và kinh nghiệm để đưa cả đội tới chiến thắng.',
      label: 'ĐƯỜNG DƯỚI'
    },
    {
      image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d5dc4ba9080bf3c361e061afa69c9563aa38f5f9-980x980.png?auto=format&fit=crop&q=80&h=48&w=48&crop=center',
      full: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ee41cd027bf8af85bebc07c8480b1304b793fc1e-3288x2100.png?auto=format&fit=fill&q=80&w=675',
      desc: '<strong>HỖ TRỢ</strong><br>Các vị tướng hỗ trợ là hộ vệ của cả đội. Họ giúp giữ cho đồng đội sống sót và tập trung vào trợ giúp kiến tạo các pha hạ gục, bảo vệ đồng đội ở đường dưới cho tới khi họ trở nên mạnh mẽ.',
      label: 'HỖ TRỢ'
    }
  ];

  const handleClick = (lane) => {
    setSelectedImage(lane.full);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = lane.desc;
    const titleElement = tempDiv.querySelector('strong');
    if (titleElement) {
      setSelectedTitle(titleElement.textContent.trim());
      titleElement.remove();
    }
    setSelectedDesc(tempDiv.innerHTML.trim());
  };

  return (
    <section className="version5">
      <div className="container">
        <div className="left-section_version4">
          <h1 className="title_version5">CHỌN ĐƯỜNG<br />BẠN MUỐN</h1>
          <p className="description_version5">
            Có 5 vị trí tạo nên đội hình được đề xuất cho trò chơi. Mỗi đường
            phù hợp với một số tướng và vị trí nhất định hãy thử tất cả hoặc
            chọn một đường bạn cảm thấy thích hợp nhất.
          </p>
          <div className="circles_version5">
            {lanes.map((lane, index) => (
              <div key={index}>
                <img
                  className="circle_version5"
                  src={lane.image}
                  alt={lane.label}
                  onClick={() => handleClick(lane)}
                />
                <div className="circle-label_version5">{lane.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section_version5">
          {selectedImage && <img className="large-image_version5" src={selectedImage} alt="" />}
        </div>
        <div className="bottom-description_version5">
          <h1>{selectedTitle}</h1>
          <p dangerouslySetInnerHTML={{ __html: selectedDesc }}></p>
        </div>
      </div>
    </section>
  );
};

export default ChooseLane;

