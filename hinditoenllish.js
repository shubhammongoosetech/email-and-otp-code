const axios = require("axios");

const API_KEY = "AIzaSyDQvVVgEXNRSeCqNZyoVnuYV6tRv-zMBhk"; // your API key
const TEXT = "नमस्ते दुनिया";

async function translateHindiToEnglish(text) {
  const url = "https://translation.googleapis.com/language/translate/v2";
  const params = {
    q: text,
    source: "hi", // Hindi
    target: "en", // English
    format: "text",
    key: API_KEY,
  };

  try {
    const response = await axios.get(url, { params });
    console.log(response.data.data.translations[0].translatedText);
  } catch (err) {
    console.error("Error:", err.response ? err.response.data : err.message);
  }
}

translateHindiToEnglish(TEXT);


    if (isDeleted) {
      if (userType === UserType.Author)
        throw new Error('Author cannot delete the story');
      if (!versionId && story.status !== StoryStatus.UnderReview)
        throw new Error('Only stories with Under Review status can be deleted');
    }
