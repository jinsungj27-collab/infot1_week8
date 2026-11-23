console.log("Week 8 app.js loaded");

const helpButton = document.querySelector("#help-button");
const helpPanel = document.querySelector("#help-panel");

if (helpButton && helpPanel) {
    helpButton.addEventListener("click", function () {
        const isOpen = helpPanel.classList.toggle("is-open");
        helpButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
        helpButton.textContent = isOpen ? "Hide Help" : "Show Help";
    });
}

const aboutInput = document.querySelector("#about");
const aboutCount = document.querySelector("#about-count");

if (aboutInput && aboutCount) {
    function updateAboutCount() {
        const count = aboutInput.value.length;
        aboutCount.textContent = count + "/150 characters";
    }

    aboutInput.addEventListener("input", updateAboutCount);
    updateAboutCount();
}

const recordSearch = document.querySelector("#record-search");
const recordRows = document.querySelectorAll("#records-body tr");

if (recordSearch && recordRows.length > 0) {
    recordSearch.addEventListener("input", function () {
        const term = recordSearch.value.trim().toLowerCase();

        recordRows.forEach(function (row) {
            const text = row.textContent.toLowerCase();
            const match = text.includes(term);
            row.hidden = !match;
        });
    });
}

const profileForm = document.querySelector("#profile-form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const program = document.querySelector("#program");
const terms = document.querySelector("#terms");
const formFeedback = document.querySelector("#form-feedback");

if (profileForm && fullName && email && program && terms && formFeedback) {
    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const errors = [];

        if (fullName.value.trim().length < 2) {
            errors.push("Enter your full name.");
        }

        if (email.value.trim() === "" || !email.validity.valid) {
            errors.push("Enter a valid email address.");
        }

        if (program.value.trim() === "") {
            errors.push("Select a program.");
        }

        if (!terms.checked) {
            errors.push("Confirm the information before continuing.");
        }

        if (errors.length > 0) {
            formFeedback.textContent = errors.join(" ");
            formFeedback.classList.remove("is-success");
            formFeedback.classList.add("is-error");
        } else {
            formFeedback.textContent = "All client-side checks passed.";
            formFeedback.classList.remove("is-error");
            formFeedback.classList.add("is-success");
        }
    });
}
