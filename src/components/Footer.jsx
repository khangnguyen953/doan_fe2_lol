import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logos">
          <img src={`${process.env.PUBLIC_URL || ''}/image/images-removebg.png`} alt="Riot Games" />
          <img src={`${process.env.PUBLIC_URL || ''}/image/LOLICON.png`} alt="LOL" />
        </div>
        <p className="footer-info">
          Công ty Cổ Phần VNG. Địa chỉ: Lô Z06 đường số 13, khu chế xuất Tân
          Thuận, Tân Thuận Đông, Quận 7, TP. Hồ Chí Minh. Bản quyền trò chơi
          thuộc Riot Games Inc. và Công Ty Cổ Phần VNG phân phối độc quyền tại
          Việt Nam. Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1
          trên mạng số: 2429/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
          23/12/2022
        </p>
        <div className="footer-links">
          <a href="#">CHÍNH SÁCH BẢO MẬT</a>
          <a href="#">ĐIỀU KHOẢN SỬ DỤNG (VNG)</a>
        </div>
      </div>
      <div className="footer-age-warning">
        <img src={`${process.env.PUBLIC_URL || ''}/image/18Plus.png`} alt="18+" />
        <p>Chơi game quá 180 phút mỗi ngày sẽ ảnh hưởng xấu đến sức khỏe</p>
      </div>
    </footer>
  );
};

export default Footer;

