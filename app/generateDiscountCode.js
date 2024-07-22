const axios = require("axios");

async function createDiscountCode() {
  const response = await axios.post(
    "https://your-shop-name.myshopify.com/admin/api/2023-07/discount_codes.json",
    {
      discount_code: {
        code: "SUMMER2024",
        value: 20,
        value_type: "percentage",
        applies_to: "order",
        starts_at: "2024-07-01",
        ends_at: "2024-08-01",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": "your-access-token",
      },
    },
  );

  return response.data.discount_code;
}
