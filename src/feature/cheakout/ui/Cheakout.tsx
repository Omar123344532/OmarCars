import { useState } from "react";
import { useGetCartDataQuery } from "../../../entities/cart/api/cartApi";
import type { CardData, CheckoutFormData, OrderRequest } from "../model/types";
import { useCreateOrderMutation } from "../api/cheakoutApi";

export default function Checkout() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    city: "",
    country: "",
    region: "",
    address: "",
  });

  const [cardData, setCardData] = useState<CardData>({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const { data: getCartData } = useGetCartDataQuery();
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "city",
      "country",
      "region",
      "address",
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof CheckoutFormData]) {
        alert("Пожалуйста, заполните все поля формы доставки.");
        return;
      }
    }

    if (!cardData.cardNumber || !cardData.expiry || !cardData.cvv) {
      alert("Пожалуйста, заполните данные карты.");
      return;
    }

    if (!getCartData?.items?.length) {
      alert("Корзина пуста, добавьте товары перед оплатой.");
      return;
    }

    const order: OrderRequest = {
      customer: {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      shippingAddress: {
        country: formData.country,
        region: formData.region,
        city: formData.city,
        address: formData.address,
        company: formData.company,
      },
      items:
        getCartData?.items?.map((item) => ({
          productId: item.id.toString(),
          quantity: item.quantity,
          price: item.price,
        })) || [],
      payment: {
        method: "card",
        cardNumber: cardData.cardNumber,
        expiry: cardData.expiry,
        cvv: cardData.cvv,
      },
    };

    createOrder(order)
      .unwrap()
      .then((response) => {
        alert("Оплата прошла успешно!");
        console.log(response);
      })
      .catch((err) => {
        console.error("Ошибка при оплате:", err);
        alert("Произошла ошибка при оплате");
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative p-8"
      style={{
        backgroundImage:
          "url('https://creditkarma-cms.imgix.net/wp-content/uploads/2023/11/history-of-money.png?w=1024&auto=compress')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
 

      {/* main container */}
      <div className="relative z-10 w-full max-w-5xl bg-white/20 border border-white/30 backdrop-blur-xl shadow-2xl rounded-3xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="p-10 border-r border-white/20 text-white">
          <h2 className="text-3xl font-bold mb-8 drop-shadow-xl">Адрес доставки</h2>
          <form className="space-y-5">
            {[
              { name: "email", placeholder: "Email" },
              { name: "firstName", placeholder: "First name" },
              { name: "lastName", placeholder: "Last name" },
              { name: "company", placeholder: "Company (optional)" },
              { name: "city", placeholder: "City" },
              { name: "country", placeholder: "Country" },
              { name: "region", placeholder: "Region / State" },
              { name: "address", placeholder: "Address" },
            ].map((input) => (
              <input
                key={input.name}
                type="text"
                name={input.name}
                placeholder={input.placeholder}
                value={(formData as any)[input.name]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 backdrop-blur-md"
              />
            ))}
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 text-white">
          <h2 className="text-3xl font-bold mb-6 drop-shadow-xl">Оплата</h2>

          <div className="mb-10">
            <p className="text-xl">Итого:</p>
            <p className="text-4xl font-extrabold drop-shadow-xl">{getCartData?.totalPrice}$</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="cardNumber"
              placeholder="Номер карты"
              value={cardData.cardNumber}
              onChange={handleCardChange}
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 backdrop-blur-md"
            />

            <div className="flex space-x-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardData.expiry}
                onChange={handleCardChange}
                className="w-1/2 p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 backdrop-blur-md"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardData.cvv}
                onChange={handleCardChange}
                className="w-1/2 p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 backdrop-blur-md"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow-lg transition disabled:opacity-50"
            >
              {isLoading ? "Обработка..." : "Оплатить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
