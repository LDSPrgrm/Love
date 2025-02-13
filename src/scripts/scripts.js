function getEventFromPath() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("event") || ""; // Return empty string if event is missing
}

function populateYears() {
  const container = document.getElementById("yearContainer");
  const currentYear = new Date().getFullYear();

  const event = getEventFromPath();

  // Define event colors
  const eventColors = {
    valentines: "bg-red-500 hover:bg-red-600",
    birthday: "bg-blue-500 hover:bg-blue-600",
    anniversary: "bg-pink-500 hover:bg-pink-600",
    christmas: "bg-green-500 hover:bg-green-600",
  };

  // Default color if event is not recognized
  const defaultColor = "bg-gray-500 hover:bg-gray-600";

  // Get the appropriate color class
  const colorClass = eventColors[event] || defaultColor;

  for (let year = 2023; year <= currentYear; year++) {
    let div = document.createElement("div");
    div.className = `flex items-center justify-center p-10 ${colorClass} text-white text-xl font-bold rounded-lg cursor-pointer w-full h-32`;
    div.textContent = year;

    div.onclick = () => {
      window.location.href = `../pages/content.html?event=${event}&year=${year}`;
    };

    container.appendChild(div);
  }
}

populateYears();
