const input = document.querySelector("#input");
const submit = document.querySelector("#submit-activity");
const activities = document.querySelector("#activities");

submit.addEventListener("mousedown", addActivity);
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addActivity();
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

    const activityText = document.createElement("input");
    activityText.setAttribute("type", "text");
    activityText.setAttribute("value", text);
    activityText.readOnly = true;
    activityText.classList.add("activity-text");
    
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-button")
    editButton.addEventListener("click", e => {
        activityText.readOnly = false;
        activityText.focus();
        activityText.addEventListener("blur", e => {
            activityText.readOnly = true;
        });
        activityText.addEventListener("keypress", e => {
            if (e.key === "Enter")
            activityText.readOnly = true;
        });
    });

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.classList.add("done-button");
    doneButton.addEventListener("click", () => {
        activityItem.setAttribute("id", "fadeout");
        activityText.setAttribute("id", "textfadeout");

        setTimeout(() => {
            activityItem.remove();
        }, 2000);
    });


    activityItem.appendChild(activityText);
    activityItem.appendChild(editButton);
    activityItem.appendChild(doneButton);
    activities.appendChild(activityItem);

}
