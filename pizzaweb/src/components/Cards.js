import React from 'react'
import './Card.css'

const Cards = () => {
  return (
   <div className='Card-container'>
        <div className='card-header'>
            <h4>Our Delicious Pizzas</h4>
        </div>
        <div className='card-body'>
           <div className='cards'>
              <div className='card-img'>
                <img src='https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-12.png' alt='pizza' />

              </div>

                <div className='card-content'>
                     <h4>Pepperoni</h4>
                     <p>Vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra posuere.</p>
                     <h5>Rs.450</h5>
                     {/* <button>Add to cart</button> */}

                
               <div className='card-foot'>
                     <button>Add to cart</button>
                </div>
            </div>

           </div>
           

        </div>
       
    </div>
    
  )
}

export default Cards
