const input = document.querySelector("#input");
const submit = document.querySelector("#submit-activity");
const activities = document.querySelector("#activities");

submit.addEventListener("mousedown", addActivity);
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        submit.click();
    }
});

function addActivity() {
    const text = input.value;
    if (text === "") {
        return;
    }
    input.value = "";

    const activityItem = document.createElement("div");
    activityItem.classList.add("activity-item");

    const activityText = document.createElement("span");
    activityText.innerHTML = text;
    activityText.classList.add("activity-text");
    
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-button")

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.classList.add("done-button");

    activityItem.appendChild(activityText);
    activityItem.appendChild(editButton);
    activityItem.appendChild(doneButton);
    activities.appendChild(activityItem);

}
