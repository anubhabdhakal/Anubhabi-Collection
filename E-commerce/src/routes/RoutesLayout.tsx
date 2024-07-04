import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Contacts } from "../pages/Contacts/Contacts";
import { Login } from "../pages/Login/Login";
import { Profile } from "../pages/Profile/Profile";
import { Cart } from "../pages/Cart/Cart";
import { Faqs } from "../pages/faqs/Faqs";
import { Team } from "../pages/Team/Team";
import { Product } from "../pages/Products/Product";

export const RoutesLayout: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pages/Contacts" element={<Contacts />} />
      <Route path="/pages/Faqs" element={<Faqs />} />
      <Route path="/pages/Team" element={<Team />} />
      <Route path="/products/:name" element={<Product />} />
    </Routes>
  );
};
