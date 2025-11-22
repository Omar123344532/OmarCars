import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import ContactPage from "../../pages/ContactPage/ui/ContactPage";


const HomePage = lazy(() => import("../../pages/HomePage/ui/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage/ui/AboutPage"));
const ShopPage = lazy(() => import("../../pages/ShopPage/ui/ShopPage"));
const ProductPage = lazy(() => import("../../pages/ProductPage/ui/ProductPage"));
const CartPage = lazy(() => import("../../pages/Cart/ui/CartPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/ui/RegistrationPage"));
const CheakoutPage = lazy(() => import("../../pages/Cheakout/ui/CheakoutPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/ui/LoginPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ui/ProfilePage"));
const Wishlist = lazy(() => import("../../pages/ProfilePage/Wishlist/ui/Wishlist"));
const Orders = lazy(() => import("../../pages/ProfilePage/Orders/ui/Orders"));
const Notifications = lazy(() => import("../../pages/ProfilePage/Notifications/ui/Notifications"));

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <AboutPage />
          </ProtectedRoute>

        ),
      },

         {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <ContactPage />
          </ProtectedRoute>

        ),
      },

      {
        path: "/shop",
        element: (
          <ProtectedRoute>
            <ShopPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/products/:id",
        element: (
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/registration",
        element: (
          <ProtectedRoute>
            <RegistrationPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/login",
        element: (
          <LoginPage />
        ),
      },
      {
        path: "/cheakout",
        element: (
          <ProtectedRoute>
            <CheakoutPage />
          </ProtectedRoute>

        ),
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "/profile/",
            element: <ProfilePage />,
          },
          {
            path: "/profile/orders",
            element: <Orders />,
          },
          {
            path: "/profile/notifications",
            element: <Notifications />,
          },
          {
            path: "/profile/wishlist",
            element: <Wishlist />,
          },
        ],
       
      },
    
  
    ],
  }
];
