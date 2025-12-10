
 
import Wrapper from '@/assets/wrappers/midterm/Shop_xx';
 
const P1_StaticPage_xx = () => {
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3> P1_StaticPage_83, </h3>
          <h4 className='text-center'> Lai,213410383 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>Womens</h1>
          <div className='items'>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/womens/blue-tank.png'
              />
              <div className='collection-footer'>
                <span className='name'>Blue Tanktop</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/womens/floral-blouse.png'
              />
              <div className='collection-footer'>
                <span className='name'>Floral Blouse</span>
                <span className='price'>20</span>
              </div>
              <button className='custom-button'>Add to Card</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/womens/floral-skirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Floral Dress</span>
                <span className='price'>80</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/womens/red-polka-dot-dress.png'
              />
              <div className='collection-footer'>
                <span className='name'>Red Dots Dress</span>
                <span className='price'>80</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/womens/striped-sweater.png'
              />
              <div className='collection-footer'>
                <span className='name'>Striped Sweater</span>
                <span className='price'>45</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/womens/yellow-track-suit.png'
              />
              <div className='collection-footer'>
                <span className='name'>Yellow Track Suite</span>
                <span className='price'>135</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/womens/white-vest.png'
              />
              <div className='collection-footer'>
                <span className='name'>White Blouse</span>
                <span className='price'>20</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
 
export default P1_StaticPage_xx;