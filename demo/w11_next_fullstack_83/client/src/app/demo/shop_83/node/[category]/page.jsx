'use client';
import { useState,useEffect }  from 'react';
import { useParams, useRouter } from 'next/navigation';

import Wrapper from '@/assets/wrappers/midterm/Shop_xx';
import Product_xx from '@/components/midterm/Product_xx';
 
const FetchProductsByCategory_xx = () => {
    const [shop_xx, setShop_xx] = useState([]);
    const parms = useParams();
    const category=parms.category;
    console.log('category:',category);

    const fetchShopFromNode = async () => {
        try {
        const response = await fetch(`http://localhost:5001/api/shop_83/${category}`

        );
        const data = await response.json();
        console.log('shop_83 data',data);
        if(data.length !== 0){
          setShop_xx(data);
        }
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        fetchShopFromNode();
    }, [category]);

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
            {shop_xx?.map((item) => {
              const { pid, pname, price, img_url } = item;
              return (
                <Product_xx
                key={pid} className='item'
                img_url={img_url} 
                pname={pname} 
                price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
 
export default FetchProductsByCategory_xx;