import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
function App(){
  return (
    <div>
       <Navbar />
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}>
     <div className="box1" style={{width:'50%',borderRight:'1px solid black',paddingRight:'20px'}}>
      <img src="https://images.moneycontrol.com/static-mcnews/2024/11/20241114080755_How-to-maintain-a-lily-pond-at-home-garden.jpg?impolicy=website&width=770&height=431" alt="" width={"100%"}/>
     </div>
     <div className="box2"style={{width:'40%',right:'0'}}>
      <h1>How to maintain a lily pond at home garden</h1>
      <p>
        A lily pond can be a beautiful and serene addition to your home garden. 
        To maintain it, ensure proper water quality, control algae growth, and regularly check the health of the lilies. 
        Adding beneficial bacteria can help keep the water clean, while removing dead leaves and debris will prevent decay.
      </p>
      <p>
        Regularly check the water level and top it up as needed, especially during hot weather. 
        Prune dead or yellowing leaves from the lilies to encourage new growth. 
        With proper care, your lily pond can thrive and provide a peaceful retreat in your garden.
      </p>
     </div>
    </div>
    <hr />
    <Footer />
    </div>
  );
}

export default App;