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
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a02f41a998msh1f739df04df8a5cp16a821jsn7212939afd75',
		'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
	}
};

  try {
    console.log("Fetching data...");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    console.log(url);
    const response = await fetch(url, options);
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);

    console.log("Hurrayy! Data received.");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
    const encodedData = encodeURIComponent(JSON.stringify(jsonData));
    window.open(`searchresults.html?data=${encodedData}`, "_blank");
  } catch (error) {
    console.error(error);
  }
});
