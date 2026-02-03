# Guess the Pokémon 🕵️‍♂️⚡

## Table of Contents
1. [Introduction](#introduction)  
2. [Purpose and Value](#purpose-and-value)  
3. [Target Audience](#target-audience)  
4. [User Stories](#user-stories)  
5. [Requirements Mapping](#requirements-mapping)  
6. [Wireframes](#wireframes)  
7. [UX Design Rationale](#ux-design-rationale)  
8. [Features](#features)  
9. [Technologies Used](#technologies-used)  
10. [Manual Testing](#manual-testing)  
11. [Automated Testing](#automated-testing)  
12. [Usability Testing (Lighthouse)](#usability-testing-lighthouse)  
13. [Bugs and Fixes Log](#bugs-and-fixes-log)  
14. [Deployment](#deployment)  
15. [Testing Principles](#testing-principles)

---

## Introduction
This web application is a **Pokémon guessing game** designed to test a user’s Pokémon knowledge in a fun and interactive way.

- The **home page** introduces the game and its theme.
- The **game page** displays a silhouette image of a Pokémon.
- The user enters a guess into a text input and submits it.
- Two buttons are available:
  - **Submit Guess** – checks the player’s answer.
  - **Next Pokémon** – skips to the next Pokémon.
- The user receives immediate feedback for each guess.
- A running score is maintained throughout the game.
- After **20 rounds**, the final score is displayed and the game can be restarted.

---

## Purpose and Value
**Purpose:**  
To provide a lightweight, replayable Pokémon guessing game that delivers immediate feedback and a clear sense of progression across a fixed number of rounds.

**Value to players:**
- Simple and intuitive gameplay requiring no instructions.
- Immediate feedback reinforces engagement.
- A final score encourages replay and self-competition.
- Skip functionality ensures the player never becomes stuck.

**Value as a portfolio project:**
- Demonstrates interactive front-end development using HTML, CSS, and JavaScript.
- Shows state management, DOM manipulation, defensive input handling, and event-driven logic.
- Includes both manual and automated testing with documented results.
- Fully deployed and accessible via GitHub Pages.

---

## Target Audience
- **Primary:** Pokémon fans who enjoy trivia or guessing games.
- **Secondary:** Recruiters, assessors, or clients reviewing front-end development skills and documentation quality.

---

## User Stories

### Player Stories
- **US1:** As a player, I want to start the game from the home page so I can play immediately.
- **US2:** As a player, I want to submit a Pokémon name so I can test my knowledge.
- **US3:** As a player, I want clear feedback when I guess correctly or incorrectly.
- **US4:** As a player, I want to skip a Pokémon so I don’t get stuck.
- **US5:** As a player, I want to see a final score after 20 rounds so I can judge my performance.

### Stakeholder / Portfolio Stories
- **US6:** As a recruiter or assessor, I want to see a responsive and accessible interface.
- **US7:** As a recruiter or assessor, I want clear documentation of testing and deployment.

---

## Requirements Mapping

| Requirement | User Story |
|---|---|
| Home page introduction and navigation | US1 |
| Pokémon silhouette display | US2 |
| Guess input and submission | US2 |
| Feedback for correct / incorrect guesses | US3 |
| Skip / Next Pokémon button | US4 |
| Score tracking and final results | US5 |
| Responsive layout | US6 |
| Testing documentation | US7 |
| Deployment to cloud hosting | US7 |

---

## Wireframes
Wireframes were created for desktop, tablet, and mobile screen sizes for both the home page and game page.

> *(Existing wireframe screenshots remain here and are unchanged.)*

---

## UX Design Rationale

### Layout and Information Hierarchy
- A **two-page flow** (Home → Game) minimises cognitive load.
- The Pokémon image is the primary visual focus, with controls positioned directly beneath for intuitive interaction.

### User Control and Feedback
- Submit and Skip buttons give the user full control.
- Immediate feedback confirms user actions.
- The end-of-game overlay provides closure and encourages replay.

### Visual Design
- A restrained colour palette improves readability and avoids distraction.
- Consistent button styles reinforce affordances across pages.

### Accessibility Considerations
- Clear text contrast and readable font sizes.
- Keyboard support (Enter key submits guesses).
- Responsive layout supports mobile, tablet, and desktop devices.

---

## Features
- Randomised Pokémon order each playthrough.
- No duplicate Pokémon within a single game.
- Case-insensitive guess validation.
- Empty input validation with user feedback.
- Skip functionality.
- Score and wrong-guess tracking.
- End-of-round results overlay.
- Keyboard input support.
- Responsive design using Bootstrap.
- Custom 404 page redirecting users back to the home page.

---

## Technologies Used
- **HTML5** – page structure.
- **CSS3 & Bootstrap 5** – responsive layout and styling.
- **JavaScript (Vanilla)** – game logic and interactivity.
- **Font Awesome** – icons.
- **Git & GitHub** – version control and hosting.
- **Jest** – automated unit testing.
- **ChatGPT** – documentation support.

---

## Manual Testing

| Feature / User Story | Action | Expected Result | Actual Result | Pass |
|---|---|---|---|---|
| Navbar – Desktop (US1, US6) | Open on desktop | Navbar visible | Works | ✅ |
| Navbar – Mobile (US1, US6) | Open on phone | Collapses into menu | Works | ✅ |
| Pokémon Image (US2) | Start game | Image loads | Works | ✅ |
| Submit Guess – Correct (US2, US3) | Enter correct name | Correct feedback | Works | ✅ |
| Submit Guess – Incorrect (US2, US3) | Enter wrong name | Incorrect feedback | Works | ✅ |
| Skip Pokémon (US4) | Click skip | Next Pokémon loads | Works | ✅ |
| Game Completion (US5) | Play 20 rounds | Final score shown | Works | ✅ |
| Responsiveness (US6) | Resize viewport | Layout adapts | Works | ✅ |

> *(Existing screenshots remain directly below this table.)*

---

## Automated Testing
Automated unit tests were written using **Jest** to validate core game logic such as:
- Guess validation
- Score calculation
- Pokémon order randomisation

> *(Existing Jest screenshot remains here.)*

---

## Usability Testing (Lighthouse)
Lighthouse audits were performed using Chrome DevTools on all pages.

**Pages tested:**
- Home page
- Game page
- 404 page

**Metrics assessed:**
- Accessibility
- Performance
- Best Practices
- SEO

> *(Lighthouse screenshots to be added here.)*

---

## Bugs and Fixes Log

| ID | Issue | Fix | Status |
|---|---|---|---|
| B1 | Empty guess submission | Input validation added | Fixed |
| B2 | Feedback not visible long enough | Delay added before next round | Fixed |

**Known Issues:**  
No known unresolved issues at the time of submission.

---

## Deployment
The project is deployed using **GitHub Pages**.

### Steps
1. Open repository settings.
2. Navigate to **Pages**.
3. Deploy from the `main` branch using the root directory.
4. Save and wait for the site to publish.

### Live Site
https://coolafdood.github.io/guess-the-pokemon/

Post-deployment checks confirmed:
- No broken internal links
- Correct loading of assets
- Functional navigation and gameplay

---

## Testing Principles
Testing was conducted using both **manual** and **automated** approaches.

- **Manual testing** verifies user journeys and UI behaviour.
- **Automated testing** ensures core logic remains reliable.

Testing follows the **RITE** principles:
- **Readable**
- **Isolated**
- **Thorough**
- **Explicit**

---