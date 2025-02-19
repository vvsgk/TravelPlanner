const search = document.getElementById("Search");
const overlay = document.getElementById("overlay");

search.addEventListener("click", async () => {
  const destiElement = document.getElementById("destinantion");
  const desti = destiElement.value;
  const dayElement = document.getElementById("days");
  const days = dayElement.value;

  if (!desti || !days) {
    alert("Please fill in both destination and days fields.");
    return;
  }

  const url =
    "https://ai-trip-planner.p.rapidapi.com/?days=" +
    days +
    "&destination=" +
    desti;
    
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c3e1fd53bdmsh631e606fdcd6932p124222jsneca2dd4c00a4",
      "X-RapidAPI-Host": "ai-trip-planner.p.rapidapi.com",
    },
  };

  try {
    console.log("Fetching data...");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    const response = await fetch(url, options);
    console.log(response);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const jsonData = await response.json();
    console.log("Hurrayy! Data received.", jsonData);

    overlay.classList.remove("active");
    document.body.style.overflow = "auto";

    if (!jsonData || Object.keys(jsonData).length === 0) {
      throw new Error("Empty response from API");
    }

    const encodedData = encodeURIComponent(JSON.stringify(jsonData));
    window.open(`searchresults.html?data=${encodedData}`, "_blank");
  } catch (error) {
    console.error("Error fetching data:", error);
    
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";

    window.open("error.html", "_blank");
  }
});
