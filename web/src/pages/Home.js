import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/auth/login");
    }
  });
  return <></>;
};

export default Home;
