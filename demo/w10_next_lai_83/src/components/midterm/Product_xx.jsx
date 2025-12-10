import Wrapper from '../../assets/wrappers/midterm/Shop_xx';

const Product_xx = ({ id, img_url, name, price }) => {
  return (
    <>
      <div className='collection-item'>
        <img className='image' src={img_url} />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <button className='custom-button'>Add to Cart</button>
      </div>
    </>
  );
};
export default Product_xx;
