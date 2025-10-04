import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'
const Work = () => {
    const workInfoData = [
        {
            image:PickMeals,
            title:'Pick Meals',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perferendis!'
        },
         {
            image:ChooseMeals,
            title:'choose how often Meals',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perferendis!'
        },
         {
            image:DeliveryMeals,
            title:'fast delivery Meals',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perferendis!'
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-heading">Work</p>
            <h1 className='primary-subheading'>How it works</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minima veritatis vitae tempora dolores vero, nihil temporibus eum nisi.
            </p>
        </div>
      <div className="work-section-bottom">
        {
            workInfoData.map((data)=>{
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Work