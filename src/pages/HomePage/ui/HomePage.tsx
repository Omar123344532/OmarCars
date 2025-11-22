import Carousel from "../../../shared/ui/Carousel/Carousel";

export default function HomePage() {
  return (

    <div className="flex flex-col items-center">

    
      
      <section className="w-11/12 md:w-4/5 mt-10 bg-purple-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between p-10">
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Experience the road like never before
          </h1>
          <p className="text-gray-100 text-sm md:text-base max-w-md">
            Discover comfort, style, and freedom with our top car rentals.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition">
            Discover more
          </button>
        </div>

       
        <div className="bg-white text-black rounded-2xl p-6 w-full md:w-1/2 mt-10 md:mt-0 md:ml-10">
        {/* <img src="https://khann.ru/image/catalog/models/lx570-450d-hrs-classic/lx570-450d-hrs-classic-front.jpg" alt="" /> */}
          <Carousel />
        </div>
      </section>

      
      <section className="grid md:grid-cols-3 gap-10 w-11/12 md:w-4/5 text-center my-16">
        <div>
          <h4 className="font-bold text-lg mb-2">🚘 Availability</h4>
          <p className="text-gray-600 text-sm">
            Find the perfect car for your needs anytime, anywhere.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">🪑 Comfort</h4>
          <p className="text-gray-600 text-sm">
            Ride with style and comfort in our premium vehicles.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">💰 Savings</h4>
          <p className="text-gray-600 text-sm">
            Affordable prices with transparent costs and no hidden fees.
          </p>
        </div>
      </section>

   
      <section className="w-11/12 md:w-4/5 mb-20">
        <ul className="space-y-3 text-gray-700">
          <li>✅ Fast & Simple — instant booking confirmation.</li>
          <li>✅ Best Deals — choose from hundreds of options.</li>
          <li>✅ Flexible Rentals — drive for a day or a month.</li>
          <li>✅ Quality Service — all cars are well maintained.</li>
        </ul>
      </section>

      
      <section className="w-11/12 md:w-4/5 mb-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-extrabold">Choose the car that suits you</h3>
          <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">View all →</a>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "Mercedes", price: 25 },
            { name: "Mercedes", price: 50 },
            { name: "Mercedes", price: 45 },
            { name: "Porsche", price: 40 },
            { name: "Toyota", price: 35 },
            { name: "Porsche", price: 50 },
          ].map((car, i) => (
            <div key={i} className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="bg-gray-200 h-32 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🚗</span>
              </div>
              <div className="p-5">
                <h4 className="font-semibold mb-1">{car.name}</h4>
                <p className="text-blue-600 font-bold text-lg mb-3">${car.price}/day</p>
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>Auto</span>
                  <span>4 Seats</span>
                  <span>Air Conditioning</span>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-semibold transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

 
      <section className="w-full bg-purple-600 py-16 text-white text-center rounded-t-2xl">
        <h3 className="text-2xl font-extrabold mb-8">Facts In Numbers</h3>
        <div className="flex flex-wrap justify-center gap-16">
          <div>
            <h2 className="text-4xl font-extrabold">540+</h2>
            <p className="text-gray-200 text-sm">Cars</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">20k+</h2>
            <p className="text-gray-200 text-sm">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">25+</h2>
            <p className="text-gray-200 text-sm">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">20m+</h2>
            <p className="text-gray-200 text-sm">Km Driven</p>
          </div>
        </div>
      </section>
    </div>
  );
}
