const { retry } = require("ts-retry-promise");

// Fake API call function
async function callPaymentGateway() {
  console.log("Calling Payment Gateway...");
  if (Math.random() < 0.7) {
    console.log(Math.random(), "Network Error ❌");
    throw new Error("Network Error ❌"); // 70% chance to fail
  }
  return "Payment Success ✅";
}

async function processPayment() {
  try {
    // Retry up to 3 times with 1 second gap
    const result = await retry(() => callPaymentGateway(), {
      retries: 3,
      delay: 1000,
    });
    console.log(result);
  } catch (err) {
    console.error("Payment failed after retries ❌", err.message);
  }
}

processPayment();
// Got it 👍 Let me break it down in super simple language with a real-life example so you will never forget what retryable means and why we use it.

// 🔹 What is retryable?

// 👉 retryable means: "If something fails, try again automatically instead of failing immediately."

// Think of it like re-dialing a phone call when the line is busy.
// Instead of giving up after 1 attempt, you try again a few times before saying "okay, I can’t connect."

// 🔹 Why do we use it?

// In real life, temporary failures happen:

// Your database is busy for 1 second.

// Your Redis server is restarting.

// Your API call to payment gateway is slow or times out.

// 👉 These are not permanent errors. If you try again after a short delay, it will usually succeed.

// Without retryable: ❌ your app fails immediately.
// With retryable: ✅ your app tries again 2–3 times, and most of the time it works.

// 🔹 Real-world example:

// Imagine you have an e-commerce app.
// When a user clicks “Pay Now”, your backend calls the Payment Gateway API.

// Case 1: Without retryable

// You call the API.

// Network has a tiny glitch → API request fails.

// Payment fails ❌ → customer angry 😡.

// Case 2: With retryable

// You call the API.

// Network glitch → API request fails.

// Your code waits 1 second and retries.

// Second attempt works 🎉 → payment success ✅.
// 👉 Customer is happy, and you didn’t lose money.

// 🔹 Example in code (step by step)
// import { retry } from 'ts-retry-promise';

// // Fake API call function
// async function callPaymentGateway() {
//   console.log('Calling Payment Gateway...');
//   if (Math.random() < 0.7) {
//     throw new Error('Network Error ❌'); // 70% chance to fail
//   }
//   return 'Payment Success ✅';
// }

// async function processPayment() {
//   try {
//     // Retry up to 3 times with 1 second gap
//     const result = await retry(() => callPaymentGateway(), {
//       retries: 3,
//       delay: 1000,
//     });
//     console.log(result);
//   } catch (err) {
//     console.error('Payment failed after retries ❌', err.message);
//   }
// }

// processPayment();

// 🔹 Step by step of above code

// First call → fails ❌ (temporary issue).

// Retry after 1 sec → maybe fails again ❌.

// Retry after 1 sec → succeeds ✅.

// Final result: success without user even noticing failure.

// 🔹 Where do we use retryable in real projects?

// Database queries → if PostgreSQL or Redis is slow.

// External APIs → Payment gateways, SMS, email services.

// Message queues → RabbitMQ, Kafka sometimes fail temporarily.

// File uploads → Network issues during upload.

// 👉 So in short:
// retryable = automatic second chance ✅
// It saves your app from tiny temporary failures that shouldn’t kill the whole process.
