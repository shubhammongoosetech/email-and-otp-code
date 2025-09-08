const fetch = require("node-fetch");

//shubhammahatma.mongoosetech
// const userId = "644755"; // your AstrologyAPI userId
// const apiSecret = "23b4e0096355e684f9f9f7a6759d0a9d805af53a"; // your apiSecret

//shubhammahatma21
const userId = "644854"; // your AstrologyAPI userId
const apiSecret = "7fc86bc21c01b6325dab25e0e2e6a3f66cd49b23"; // your apiSecret
const auth = Buffer.from(`${userId}:${apiSecret}`).toString("base64");

async function getMarriageReport() {
  try {
    const response = await fetch(
      "https://json.astrologyapi.com/v1/birth_details", // Premium endpoint
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: 17,
          month: 4,
          year: 1996,
          hour: 3,
          min: 15,
          lat: 23.5245, // Umaria latitude
          lon: 80.837, // Umaria longitude
          tzone: 5.5, // IST
        }),
      }
    );

    const data = await response.json();
    console.log("Marriage Report:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error fetching marriage report:", err);
  }
}

getMarriageReport();

// async function fun() {
//   const geoResponse = await fetch(
//     `https://nominatim.openstreetmap.org/search?format=json&q=,India`
//   );
//   const geoData = await geoResponse.json();
//   console.log("get", geoData);
//   const { lat, lon } = geoData[0];
// }

// fun();
