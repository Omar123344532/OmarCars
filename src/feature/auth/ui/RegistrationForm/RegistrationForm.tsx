import { useState } from "react";
import { useRegisterMutation } from "../../model/authApi";
import type { RegisterRequest } from "../../model/type";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [form, setForm] = useState<RegisterRequest>({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await register(form).unwrap();
      console.log("Форма отправлена:", response);
      alert(`Регистрация успешна!\nДобро пожаловать, ${form.username}!`);

      setForm({
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
      });

      navigate("/");
    } catch (err) {
      console.error("Ошибка регистрации:", err);
      alert("Ошибка при регистрации!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: `url(${encodeURI(
          "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60"
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >


      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-xl bg-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-sm 
        border border-white/30"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-xl">
          Create Account
        </h2>

        <div className="space-y-5">
          {/* INPUT FIELD */}
          {["name", "surname", "username", "email", "password"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-white mb-1 drop-shadow"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>

              <input
                type={field === "password" ? "password" : field === "email" ? "email" : "text"}
                id={field}
                name={field}
                required
                value={(form as any)[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 
                rounded-lg focus:ring-2 focus:ring-yellow-400 placeholder-white/70 
                backdrop-blur-md"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-8 py-3 bg-yellow-500 hover:bg-yellow-600 
          text-white font-semibold rounded-lg transition disabled:opacity-50 shadow-xl"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        {error && (
          <p className="text-red-300 text-sm text-center mt-3">
            Registration error. Try again.
          </p>
        )}
      </form>
    </div>
  );
}
