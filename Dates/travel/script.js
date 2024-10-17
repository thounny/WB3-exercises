function getDays(when) {
  // current date
  const currentTime = new Date();
  const diff = when.getTime() - currentTime.getTime();
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = diff / msPerDay;
  const rounded = Math.ceil(days);

  //   let text = "";
  //   if (rounded === 1) {
  //     text = " day";
  //   }
  // TERNARY
  let text = rounded === 1 ? " day" : " days";
  return rounded + text;
}

// DOM ready
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  // Get the button element by its ID
  const button = document.getElementById("submitDate");

  const message = document.getElementById("message");

  // can also just do submitBtn.addEventListener("click" () => {})
  button.addEventListener("click", () => {
    // User Input
    const when = new Date(travelDate.value);
    message.innerText = getDays(when);
  });
});
