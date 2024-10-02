const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {};
  for (const element of form.elements) {
    if (element.type !== "submit") {
      const trimmedValue = element.value.trim();
      if (trimmedValue === "") {
        alert("All form fields must be filled in");
        return;
      }
      formData[elementName] = trimmedValue;
    }
  }
  console.log(formData);
  form.reset();
});
