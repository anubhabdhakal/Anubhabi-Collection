import { createSlice } from "@reduxjs/toolkit";

const faqs = createSlice({
  name: "faqs",
  initialState: {
    orderQuestions: [
      {
        content: "How do i make a purchase?",
        subContent:
          "Click on the products that you want to buy and at the bottom of the product there is buy now button. Click there and purchase a product.",
      },
      {
        content: "How do i know if my order is confirmed?",
        subContent: "You will the recieve the confrimation email.",
      },
      {
        content: "Can I change my shipping address after my order is placed?",
        subContent: "No you cannot change the shipping address.",
      },
    ],
    shippingQuestions: [
      {
        content: "Do you ship internationally?",
        subContent: "No, we only ship nationally for now.",
      },
      {
        content: "When will my order be shipped?",
        subContent:
          "Normally, it will take 3 days, but the detail time will be mentioned in your confirmtion email.",
      },
      {
        content: "What is your return policy?",
        subContent:
          "The item should be returned withing two days else it will not be accepted.",
      },
    ],
  },
  reducers: {},
});

export default faqs.reducer;
