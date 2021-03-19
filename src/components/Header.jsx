import "../assets/css/custom.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  function openMenu() {
    document.body.classList.toggle("menu-is-show");
  }
  function closeMenu() {
    document.body.classList.remove("menu-is-show");
  }
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={openMenu}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">Trần Lê Trọng Nghĩa</div>
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <NavLink to="/course">Khóa học của tôi</NavLink>
                <NavLink to="/profile">Thông tin tài khoản</NavLink>
                <NavLink to="/login">Đăng xuất</NavLink>
              </div>
            </div>
            {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng nhập</a>
            <a href="#">Đăng ký</a>
          </li>
          <li>
            <NavLink exact onClick={closeMenu} to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/team">
              CFD Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/course">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/project">
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/contact">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={closeMenu} />
    </>
  );
}
