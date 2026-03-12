// import logo from './logo.svg';
import './App.css';
import './components/Card.css'
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  const pizzaData = [
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-12.png",
    name: "Pepperoni Pizza",
    description: "Vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra posuere.",
    amount: "350"
  },
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-11.png",
    name: "Margherita Pizza",
    description: "Fresh tomato sauce, mozzarella cheese, and basil leaves for a classic taste.",
    amount: "300"
  },
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-10.png",
    name: "Cheese Burst Pizza",
    description: "Loaded with creamy cheese and baked perfectly for cheese lovers.",
    amount: "400"
  },
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-9.png",
    name: "Veggie Delight",
    description: "Topped with fresh vegetables including capsicum, onion, and sweet corn.",
    amount: "320"
  },
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-8.png",
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken pieces with BBQ sauce and mozzarella cheese.",
    amount: "420"
  },
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-7.png",
    name: "Farmhouse Pizza",
    description: "A delicious mix of onion, capsicum, tomato, and mushroom toppings.",
    amount: "360"
  },
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-6.png",
    name: "Mexican Green Wave",
    description: "A spicy combination of jalapeno, capsicum, onion, and herbs.",
    amount: "380"
  },
  {
    image: "https://pizzahouse.themerex.net/wp-content/uploads/2016/08/product-6.png",
    name: "Paneer Tikka Pizza",
    description: "Soft paneer cubes with tikka sauce and fresh vegetables.",
    amount: "390"
  }
  ];
  return (
    <>
    <Header />
    <Banner />
    <div className='Card-container'>
  <div className='card-header'>
    <h4>Our Delicious Pizzas</h4>
  </div>

  <div className='card-body'>
    {
      pizzaData && pizzaData.map((ele, ind) => (
        <div className='cards' key={ind}>
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
    <Footer />
    </>
  );
}

export default App;
