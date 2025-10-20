document.getElementById("rsvp-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const rsvpBool = document.querySelector(
    'input[name="rsvp-bool"]:checked'
  )?.value;
  formData.append("rsvpBool", rsvpBool);
  const url =
    "https://script.google.com/macros/s/AKfycbzGkK1DLXTvlutQ3mXHpwUzcH1iFGc49D43TqM0w4S9d_Nvw7asYPuVnwiDSOFFM23_nA/exec";
  const response = await fetch(url, {
    method: "POST",
    body: formData,
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
