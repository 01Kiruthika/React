import React from 'react'
import './Card.css'

const Cards = (props) => {
    // console.log(props)


  return (
    <div className='Card-container'>

      <div className='card-header'>
        <h4>Our Delicious Pizzas</h4>
      </div>

      <div className='card-body'>
        {
          props.pizzaData && props.pizzaData.map((ele, indx) => (
            
            <div className='cards'key={indx}>

              <div className='card-img'>
                <img src={ele.image} alt={ele.name} />
              </div>

              <div className='card-content'>
                <h4>{ele.name}</h4>
                <p>{ele.description}</p>
                <h5>₹{ele.amount}</h5>

                <div className='card-foot'>
                  <button>Add to cart</button>
                </div>
              </div>

            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Cards