import React from "react";
import Wrapper from "../assets/wrappers/Navbar_xx"; 
import Link from "next/link";   // ✅ 修正匯入方式，保留原風格

const Navbar_83 = () => {
    return(
    <Wrapper>
      <header className="header">
        <div className="header-row container" role="navigation" aria-label="Main">
          <div className="header-left">
            <div className="logo">
              <h1>Tkudemo</h1>
            </div>
          </div>
          <div className="header-right">
            <ul className="main-menu">
              {/*
              <li className="menu-item"><Link href="/" className="active">Home</Link></li>

              <li className="menu-item mega-menu">
                <Link href="#">Mega menu +</Link>
                <div className="mega-menu-wrapper slideInUp">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                </div>
              </li>*/}

              <li className="menu-item dropdown">
                <Link href="#">Midterm+</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item"><Link href="/exams/midterm/p1_xx">W2_BookList_83</Link></li>
                    <li className="menu-item"><Link href="/exams/midterm/p2_xx">W3_BlogStatic_83</Link></li>
                    <li className="menu-item"><Link href="/exams/midterm/p3_xx">W3_BlogLocalJson_83</Link></li>
                    <li className="menu-item"><Link href="/exams/midterm/p4_xx">W4_BlogNode_83</Link></li>
                    <li className="menu-item"><Link href="#">W5_BlogSupa_83</Link></li>
                    <li className="menu-item"><Link href="#">W6_BlogSupa_83</Link></li>
                    <li className="menu-item"><Link href="#">W7_BlogLocalJson2_83</Link></li>
                     <li className="menu-item"><Link href="/demo/shop_xx/node">W11_ShopNode_83</Link></li>
                  </ul>
                </div>
              </li>
              <li className="menu-item"><Link href="#">Blog</Link></li>
              <li className="menu-item"><Link href="#">Contact</Link></li>
            </ul>
            <Link
              href="#"
              id="hamburger-icon"
              className="mobile-hrefggler"
              aria-label="Mobile Menu"
            >
              <i className="fas fa-bars"></i>
            </Link>
          </div>

          <div id="mobile-menu" className="mobile-menu hidden slideInDown">
            <ul>
              <li className="menu-item"><Link href="/" className="active">Home</Link></li>

              <li className="menu-item mega-menu">
                <Link href="#">Mega menu +</Link>
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li><Link href="#">Menu block item 1</Link></li>
                      <li><Link href="#">Menu block item 2</Link></li>
                      <li><Link href="#">Menu block item 3</Link></li>
                      <li><Link href="#">Menu block item 4</Link></li>
                      <li><Link href="#">Menu block item 5</Link></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu-item dropdown">
                <Link href="#">Services +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item"><Link href="#">Service 1</Link></li>
                    <li className="menu-item"><Link href="#">Service 2</Link></li>
                    <li className="menu-item"><Link href="#">Service 3</Link></li>
                    <li className="menu-item"><Link href="#">Service 4</Link></li>
                  </ul>
                </div>
              </li>
              <li className="menu-item"><Link href="#">Blog</Link></li>
              <li className="menu-item"><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
    );
};

export default Navbar_83;