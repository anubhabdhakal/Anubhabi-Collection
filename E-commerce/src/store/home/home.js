import { createSlice } from "@reduxjs/toolkit";
import deliveryIcon from "../../assets/icons/deilvery.svg";
import refundIcon from "../../assets/icons/refund.svg";
import shieldIcon from "../../assets/icons/shield.svg";
import demo1 from "../../assets/images/demo.jpg";
import demo2 from "../../assets/images/demo2.png";
import demo3 from "../../assets/images/demo3.jpg";

const home = createSlice({
  name: "home",
  initialState: {
    homeInformation: [
      {
        image: deliveryIcon,
        header: "Free Delivery",
        contentList: [{ content: "From all orders over $100" }],
      },
      {
        image: refundIcon,
        header: "Instant Refunds",
        contentList: [{ content: "Return money within 30 days" }],
      },
      {
        image: shieldIcon,
        header: "Wear Now",
        contentList: [{ content: "Pay in easy instalments" }],
      },
    ],
    images: [
      {
        image: "/media/home/cloths.jpg",
        heading: "All products",
        caption:
          "Shop now, not later. Browse the best of our favorite sale styles and brands.",
      },
      {
        image: "/media/home/model1.jpg",
        heading: "Best Products",
        caption:
          "Shop now, not later. Browse the best of our favorite sale styles and brands.",
      },
      {
        image: "/media/home/model2.jpg",
        heading: "All products",
        caption:
          "Shop now, not later. Browse the best of our favorite sale styles and brands.",
      },
    ],
  },

  reducers: {},
});

export default home.reducer;
