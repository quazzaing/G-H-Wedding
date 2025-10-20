document.getElementById("rsvp-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    rsvpBool: formData.get("rsvp-bool"),
    message: formData.get("message"),
    dietaryRequirements: formData.get("dietary-requirements")


  };
  console.log(JSON.stringify(data))
  const url = "https://script.google.com/macros/s/AKfycbylH3Y8XdDZx0lYsqDuC09np5k7mxQR_MqLRjhiLkncWmzW3lNrp5r08x0cQ0ykrTGCXg/exec"
  const response = await fetch(url, {
    method: "POST", 
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (response.ok) alert("Message sent!");
  else alert("Error sending message");
});

const tourismImageDiv = document.getElementById("visit-places");

async function loadTourism() {
  const csvFile = "Others/Tourism1.csv";

  const data = await d3.csv(csvFile);

  console.log(data);

  data.forEach((element) => {
    const container = document.createElement("div");
    container.className = "tourism-item";

    const title = document.createElement("h3");
    title.textContent = element.Title;

    const department = document.createElement("p");
    department.textContent = element.Department;

    const img = document.createElement("img");
    img.src = element.Link;
    img.alt = element.Title || "Tourism Image";
    img.className = "tourism-image";

    container.appendChild(title);
    container.appendChild(department);
    container.appendChild(img);

    tourismImageDiv.appendChild(container);
  });
}

loadTourism();
