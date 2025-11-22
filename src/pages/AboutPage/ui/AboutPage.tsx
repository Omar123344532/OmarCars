
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">

        <div className="flex flex-col items-end text-sm">
          <span className="text-gray-400">Need help?</span>
          <span className="font-semibold">+994 60 211-11-11</span>
        </div>
    


      <section className="text-center py-12">
        <h2 className="text-3xl font-bold border-b-2 border-blue-600 inline-block pb-1">
          About Us
        </h2>
        <p className="mt-2 text-gray-500">About Us</p>
      </section>


      <section className="max-w-6xl grid md:grid-cols-4 gap-8 px-10">
        <div>
          <h3 className="text-3xl font-extrabold mb-3 leading-tight">
            Where every drive feels extraordinary
          </h3>
        </div>
        <div>
          <h4 className="font-bold mb-2">Variety Brands</h4>
          <p className="text-gray-600 text-sm">
            Plenty of car models available. Pick what matches your vibe.
          </p>
          <h4 className="font-bold mt-5 mb-2">Maximum Freedom</h4>
          <p className="text-gray-600 text-sm">
            Drive wherever you wish without extra restrictions.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Awesome Support</h4>
          <p className="text-gray-600 text-sm">
            Our team is always ready to help — any time, anywhere.
          </p>
          <h4 className="font-bold mt-5 mb-2">Flexibility On The Go</h4>
          <p className="text-gray-600 text-sm">
            Flexible booking, pickup, and return — designed for your lifestyle.
          </p>
        </div>
        <div className="hidden md:block"></div>
      </section>

      <section className="my-16 w-full flex justify-center">
        <div className="w-11/12 md:w-4/5 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car Rental Experience"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      
      <section className="flex flex-wrap justify-center gap-16 text-center mb-16">
        <div>
          <h2 className="text-4xl font-extrabold text-blue-600">20k+</h2>
          <p className="text-gray-500 mt-1">Happy customers</p>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-blue-600">540+</h2>
          <p className="text-gray-500 mt-1">Count of cars</p>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-blue-600">25+</h2>
          <p className="text-gray-500 mt-1">Years of experience</p>
        </div>
      </section>


      <section className="max-w-6xl grid md:grid-cols-2 gap-10 px-10 mb-20 items-center">
        <div>
          <h3 className="text-3xl font-extrabold mb-4 leading-tight">
            Unlock unforgettable memories on the road
          </h3>
          <p className="text-gray-600 mb-5">
            Enjoy an amazing journey with comfort and style. We make every mile special.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✅ Always delivering well-serviced vehicles</li>
            <li>✅ Best rental rates with no extra charges</li>
            <li>✅ Quick, simple booking process</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1682090164953-780d182efb39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZHJpdmluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Happy customers driving"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}
