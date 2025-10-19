document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  this.classList.add("hidden");
  document.getElementById("confirmation").classList.remove("hidden");
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
