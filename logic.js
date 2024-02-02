let btn = document.getElementById("shorten");

btn.addEventListener("click", short);

async function short() {
  let longURL = document.getElementById("longurl").value;
  let shortURL = document.getElementById("shorturl");

  const inputBody = JSON.stringify({
    url: longURL,
    expiry: "5m",
  });

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": "sk_e9dec4b7c1194c7b8f68036aca8fc633",
  };

  try {
    const result = await fetch("https://api.manyapis.com/v1-create-short-url", {
      method: "POST",
      body: inputBody,
      headers: headers,
    });

    const data = await result.json();

    // console.log("Full API response:", data);

    if (data && data.shortUrl) {
      shortURL.value = data.shortUrl;

      console.log("Shortened URL:", data.shortUrl);
    } else {
      console.error("Unexpected response structure:", data);
    }
  } catch (error) {
    console.error("Error during URL shortening:", error);
  }
}
