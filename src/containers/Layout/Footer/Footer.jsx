import React from 'react';
import { FooterStyle, LogoFooter } from './index.style';
import FooterLogo from '../img/FooterLogo.png';

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <div className="footerLeft">
          <LogoFooter src={FooterLogo} />
          <div className="footerLeftContent">Copyright © 2023 by FOOTBALL</div>
        </div>
        <div className="footerContent">
          <ul>
            <li>Về chúng tôi</li>
            <li>Chính sách</li>
            <li>Điều khoản</li>
          </ul>
          <ul>
            <li>Tin tức</li>
            <li>Liên hệ</li>
            <li>Thành viên</li>
          </ul>
        </div>
        <div className="footerRight">
          Mọi trận đấu cho dù giải nhỏ cho tới các giải đấu lớn thì FOOTBALL đều
          cung cấp đầy đủ link xem trực tiếp bóng đá online với độ phân giải và
          chất lượng cao nhất. Ngoài việc xem bóng đá trực tuyến, chúng tôi còn
          gửi tới bạn đọc lịch thi đấu bóng đá, kết quả bóng đá và soi kèo bóng
          đá với tỷ lệ chiến thắng cao. Chúc bạn đọc xem bóng đá vui vẻ và luôn
          ủng hộ FOOTBALL
        </div>
      </FooterStyle>
    </div>
  );
};

export default Footer;
