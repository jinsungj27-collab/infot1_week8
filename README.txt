Name: Jin Sung E. Jung
Section: BSIT-2B
Activity title: Week 8 Interactive Responsive Front-End Prototype

Features:
- Feature A (Help panel): Toggles #help-panel visibility, aria-expanded state, and #help-button label between "Show Help" and "Hide Help" on index.html.
- Feature B (Live character counter): Updates #about-count with "N/150 characters" on load and as the user types in the #about textarea on registration.html.
- Feature C (Records filter): Filters #records-body tr rows in real time based on the search text entered in #record-search on records.html.
- Feature D (Client-side form checks): Validates #full-name, #email, #program, and #terms on #profile-form submission and shows error or success feedback in #form-feedback on registration.html.

DOM selectors and event types:
- #help-button, #help-panel: click event on #help-button
- #about, #about-count: input event on #about (plus initial call on load)
- #record-search, #records-body tr: input event on #record-search
- #profile-form, #full-name, #email, #program, #terms, #form-feedback: submit event on #profile-form

Validation rules:
- Full Name (#full-name): Must be at least 2 characters after trimming whitespace ("Enter your full name.").
- School Email (#email): Must be non-empty and pass HTML5 email validity via email.validity.valid ("Enter a valid email address.").
- Program (#program): Must have a selected non-empty option value ("Select a program.").
- Confirmation (#terms): Checkbox must be checked ("Confirm the information before continuing.").

Viewport results (390 / 768 / 1280 px): [TO FILL AFTER MY TESTING]
JS bug and fix: [TO FILL AFTER MY DEBUGGING]
Statement: This project uses no PHP, database, API, or framework.
Unresolved issues: none
