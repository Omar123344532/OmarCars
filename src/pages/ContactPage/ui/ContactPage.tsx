
export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
   
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-500">Home / Contact Us</p>
      </section>


      <section className="flex flex-col md:flex-row gap-8 justify-center items-center w-11/12 md:w-4/5 mb-16 text-color-white">
   
        <div className="bg-purple-600 text-white rounded-2xl p-8 w-full md:w-1/2 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Book your car</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Car type"
              className="p-3 rounded-lg text-white-100 outline-none"
            />
            <input
              type="text"
              placeholder="Pick-up location"
              className="p-3 rounded-lg text-white-700 outline-none"
            />
            <input
              type="text"
              placeholder="Drop-off location"
              className="p-3 rounded-lg text-white-700 outline-none"
            />
            <input
              type="date"
              className="p-3 rounded-lg text-white-700 outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
            >
              Book now
            </button>
          </form>
        </div>


        <div className="rounded-2xl overflow-hidden w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
            alt="Contact car"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>


      <section className="flex flex-wrap justify-center gap-10 mb-16 text-center">
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="bg-yellow-400 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full mb-3">
            📍
          </div>
          <p className="font-semibold">Address</p>
          <p className="text-gray-500 text-sm">Oxford Ave, Cary, NC 27511</p>
        </div>

        <div className="flex flex-col items-center max-w-[200px]">
          <div className="bg-yellow-400 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full mb-3">
            📧
          </div>
          <p className="font-semibold">Email</p>
          <p className="text-gray-500 text-sm">m.ray@gmail.com</p>
        </div>

        <div className="flex flex-col items-center max-w-[200px]">
          <div className="bg-yellow-400 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full mb-3">
            ☎️
          </div>
          <p className="font-semibold">Phone</p>
          <p className="text-gray-500 text-sm">+937 987-6401</p>
        </div>

        <div className="flex flex-col items-center max-w-[200px]">
          <div className="bg-yellow-400 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full mb-3">
            ⏰
          </div>
          <p className="font-semibold">Opening Hours</p>
          <p className="text-gray-500 text-sm">Mon - Fri: 10am - 10pm</p>
        </div>
      </section>

   
      <section className="w-11/12 md:w-4/5 mb-20">
        <h3 className="text-2xl font-extrabold mb-8 text-center">
          Latest blog posts & news
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="font-semibold text-lg mb-2">
                How To Choose The Right Car
              </h4>
              <p className="text-sm text-gray-500">News • 15 Mar 2024</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="font-semibold text-lg mb-2">
                Which plan is right for me?
              </h4>
              <p className="text-sm text-gray-500">News • 15 Mar 2024</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg/1200px-Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg"
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="font-semibold text-lg mb-2">
                Enjoy Speed, Choice & Total Control
              </h4>
              <p className="text-sm text-gray-500">News • 15 Mar 2024</p>
            </div>
          </div>
        </div>
      </section>


      <section className="flex flex-wrap justify-center gap-16 pb-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" alt="Ford" className="h-10" />
        <img src="https://autode-static.de/wp-content/uploads/2020/Logos/Jeep-Logo.png" alt="Jeep" className="h-10" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TMGRLOU717yCaBP8COaWxpfAUMIOLAS3nQ&s" alt="Mercedes" className="h-10" />
        <img src="https://di-uploads-pod3.dealerinspire.com/vindeversautohausofsylvania/uploads/2018/10/Audi-Logo-Banner.png" alt="Audi" className="h-10" />
      </section>
    </div>
  );
}
