import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router';
import AdsBanner from '../AdsBanner';
import CollectionCat from '../CollectionCat';
import FashionCoupon from '../FashionCoupon';
import Footer from '../Footer';
import OfferSlider from '../OfferSlider';
import TopBrand from '../TopBrand';

const BoyCollection = () => {
    let history= useHistory();
    return (
        <div>
            <div className="navbars">
                    <div className="upper">
                        <div className="left">
                            <BsArrowLeft onClick={() => { history.push("/Readymade"); }} />
                            Boy Fashion
                        </div>
                    </div>

                </div> 
                <div className="offerCollection">
                    
                    <OfferSlider/>
                    </div>
                <AdsBanner/>
                <div className="k">
                    <h4>Boys exciting style </h4>
                <CollectionCat/>
                </div>
              <div className="k">
              <h4>Keep it pocket-friendly</h4>
              <CollectionCat/>
              </div>
                
              
                <OfferSlider/>
               
                
                <div className="k">
                Top offers on Top Brand
                <TopBrand/>
                </div>
               
                <div className="k">
            <h5>Collect Coupon and get upto 200 back</h5>
            <FashionCoupon/>
          </div>
          <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default BoyCollection
