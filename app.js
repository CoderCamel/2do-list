const input = document.querySelector("#input");
const submit = document.querySelector("#submit-activity");
const activities = document.querySelector("#activities");
submit.addEventListener("mousedown", addActivity);


function addActivity() {
    let text = input.value;
    input.value = "";
    const activityItem = document.createElement("div");
    activityItem.innerHTML = text;
    activities.appendChild(activityItem);

}