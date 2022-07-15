const input = document.querySelector("#input");
const submit = document.querySelector("#submit-activity");
const activities = document.querySelector("#activities");
submit.addEventListener("mousedown", addActivity);


function addActivity() {
    const text = input.value;
    input.value = "";
    const activityItem = document.createElement("div");
    activityItem.classList.add("activity-item");
    const activityText = document.createElement("span");
    activityText.innerHTML = text;
    activityText.classList.add("activity-text");
    

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.classList.add("done-button");
    activityItem.appendChild(activityText);
    activityItem.appendChild(doneButton);
    activities.appendChild(activityItem);

}