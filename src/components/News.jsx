import React from 'react';

const getImagePath = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

const news = [
  {
    image: getImagePath('/image/imagetestLOL.avif'),
    category: 'CỘNG ĐỒNG | 13/5/2025',
    title: 'Ân Mừng Sự Kiện Sắc Màu Hàn Hoan 2025: MHT & DTCL',
    desc: 'Chương trình ăn mừng sự kiện Sắc Màu Hàn Hoan vô cùng toàn thế giới đang!'
  },
  {
    image: getImagePath('/image/maxresdefault.jpg'),
    category: 'CẬP NHẬT CHƠI | 1/5/2025',
    title: 'Trailer Ra Mắt Phần 1',
    desc: 'Mùa hè hứa hẹn sẽ nóng hơn bao giờ hết trong Hoa Linh Lục Địa: Song Giới Chi Ngoại.'
  },
  {
    image: getImagePath('/image/lmht-msi-2025-2.jpg'),
    category: 'ESPORTS | 19/4/2025',
    title: 'Vé MSI 2025 Vancouver Đã Mở Bán',
    desc: 'Vé MSI 2025 tại Pacific Coliseum sẽ diễn ra từ ngày 27/06 - 12/07. Hãy đặt vé ngay!'
  },
  {
    image: getImagePath('/image/CKTG 2025.jpg'),
    category: 'LEAGUE OF LEGENDS | 20/5/2025',
    title: 'Thông Báo Chung Kết Thế Giới 2025',
    desc: 'Chung kết CKTG 2025 sẽ được tổ chức tại Seoul, Hàn Quốc từ ngày 10/10 đến 5/11. Đừng bỏ lỡ trận đấu đỉnh cao của năm!'
  }
];

const News = () => {
  return (
    <>
      <h2 className="section-title" id="news">TIN TỨC TIÊU BIỂU</h2>
      <div className="news-container">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <img
              src={item.image}
              alt={`News ${index + 1}`}
              className="news-image"
            />
            <p className="news-category">{item.category}</p>
            <h3 className="news-title">{item.title}</h3>
            <p className="news-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;

