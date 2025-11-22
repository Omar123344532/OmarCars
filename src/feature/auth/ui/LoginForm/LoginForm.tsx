import { useState } from "react";
import { useLoginMutation } from "../../model/authApi";
import type { LoginRequest } from "../../model/type";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [form, setForm] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(form).unwrap();
      alert("Login successful");
      console.log("Форма отправлена:", response);

      setForm({
        email: "",
        password: "",
      });

      navigate("/");
    } catch (err) {
      console.error("login error:", err);
      alert("login error");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://lh7-rt.googleusercontent.com/docsz/AD_4nXeCUHb11XyQlctnMtemUpeWclQDkRpmkGI24VqgnTSAJ7M4M2fbaWu06EGadGxRwvP0bEbAbCs2XlJpUC5kD0vFwe6CtfTqpGrWeaQrzEbdqA_n7rue21_cL768dVJcIpA2bFyBuw?key=NQ3jzVwo1nEFkE35fXu0Rw')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >


      {/* Glass form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-xl bg-white/20 p-10
        rounded-3xl shadow-2xl w-full max-w-sm border border-white/30"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-xl">
          Login to your account
        </h2>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1 drop-shadow"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 text-white border border-white/30
            rounded-lg focus:ring-2 focus:ring-yellow-400 placeholder-white/70 backdrop-blur-md"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white mb-1 drop-shadow"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 text-white border border-white/30
            rounded-lg focus:ring-2 focus:ring-yellow-400 placeholder-white/70 backdrop-blur-md"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white 
          font-semibold rounded-lg transition disabled:opacity-50 shadow-lg"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-300 text-sm text-center mt-4">
            Login error. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
