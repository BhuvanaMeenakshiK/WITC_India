const scriptURL =
  "https://script.google.com/macros/s/AKfycbyZYRQF_SCpG9siD3XiqqVP10I_XC_jnJUu9V8CCLCWrpc2j46xDULovtFLYV_oIX0/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
