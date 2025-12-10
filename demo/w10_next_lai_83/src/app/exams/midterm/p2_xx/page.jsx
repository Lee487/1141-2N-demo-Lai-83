// app/exams/midterm/p2_xx/pages.jsx

import Wrapper from '@/assets/wrappers/midterm/Shop_xx';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const P2_StaticPage_xx = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <div className='homepage'>
          <div className='directory-menu'>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/hats.png'
                alt=''
              />
              <Link href='/midterm/hats_xx' className='content'>
                <h1 className='title'>HATS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/jackets.png'
                alt=''
              />
              <Link href='/midterm/jackets_xx' className='content'>
                <h1 className='title'>JACKETS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/sneakers.png'
                alt=''
              />
              <Link href='/midterm/sneakers_xx' className='content'>
                <h1 className='title'>SNEAKERS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/womens.png'
                alt=''
              />
              <Link href='/exams/midterm/p1_xx' className='content'>
                <h1 className='title'>WOMENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/mens.png'
                alt=''
              />
              <Link href='/midterm/mens_xx' className='content'>
                <h1 className='title'>MENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_xx;
 