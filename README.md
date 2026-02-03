# Guess the Pokémon 🕵️‍♂️⚡

## Table of Contents
1. [Introduction](#introduction)
2. [Value to Users](#Value-to-users)
3. [Purpose and Value](#purpose-and-value)  
4. [Target Audience](#target-audience)  
5. [User Stories](#user-stories)  
6. [Requirements Mapping](#requirements-mapping)  
7. [Wireframes](#wireframes)  
8. [UX Design Rationale](#ux-design-rationale)  
9. [Features](#features)  
10. [Technologies Used](#technologies-used)  
11. [Manual Testing](#manual-testing)  
12. [Automated Testing](#automated-testing)  
13. [Usability Testing (Lighthouse)](#usability-testing-lighthouse)  
14. [Bugs and Fixes Log](#bugs-and-fixes-log)  
15. [Deployment](#deployment)  
16. [Testing Principles](#testing-principles)

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
## Value to Users

Provides a quick, casual Pokémon knowledge challenge (entertainment value).

Encourages repeat play with shuffled order and a high score to beat.

Instant feedback (“Correct/Wrong”) makes the game feel responsive and rewarding.

Low-friction: no login, no setup, works in browser on desktop and mobile.

Accessible interaction: simple controls + Enter-to-submit.
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

### Navbar - Desktop 
<img width="1892" height="857" alt="image" src="https://github.com/user-attachments/assets/0f4b191f-c8a6-40c1-a179-5237d807f09f" />

### Navbar - Mobile 
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/a9fd8835-3b52-470d-ab49-04f9c58094ad" />
### Opening Burger menu for mobile
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/ee37d854-1cf0-448c-9c5b-3cde019a6bba" />

### Desktop Footer
<img width="1036" height="695" alt="image" src="https://github.com/user-attachments/assets/faad4b3a-57f0-4efc-b5cf-a107d09bf68c" />

### Pokemon Images Load
<img width="1028" height="676" alt="image" src="https://github.com/user-attachments/assets/99b13882-0dac-46b8-aa65-b26fb953f5f9" />

### Pokemon Guess Correct
<img width="340" height="416" alt="image" src="https://github.com/user-attachments/assets/029e4dbe-8a5a-441b-9657-f6540ef5972f" />

### Pokemon Guess Incorrect
<img width="293" height="376" alt="image" src="https://github.com/user-attachments/assets/68e7220b-da40-4c61-a57e-380468b03bc0" />

### Next Pokemon Image
<img width="523" height="730" alt="image" src="https://github.com/user-attachments/assets/cf2bea41-0a58-460b-a7a8-c05840f0008c" />

### Game Completion with Results
<img width="771" height="395" alt="image" src="https://github.com/user-attachments/assets/c54f5ed6-0a8c-4c95-a342-842428eece6b" />

### Replay Function, Try again!
<img width="513" height="760" alt="image" src="https://github.com/user-attachments/assets/b606b067-ac2e-4246-91d1-eab14d4a2d95" />

### Responsiveness Laptop home index 1366px to 1920px
<img width="1020" height="667" alt="image" src="https://github.com/user-attachments/assets/9fac4beb-fb8b-43e1-909e-a728480def3e" />

### tablet home index 768px to 1280px 
<img width="846" height="757" alt="image" src="https://github.com/user-attachments/assets/6bdef580-e9d0-4481-9164-6cd8b1569f87" />

### phone home index 360px to 414px wide: 
<img width="252" height="758" alt="image" src="https://github.com/user-attachments/assets/37c293a1-f567-479f-bf0a-64791269bc1e" />

### laptop pokemon game 720px to 1280px
<img width="960" height="757" alt="image" src="https://github.com/user-attachments/assets/e4efc166-8e3a-4513-b5ae-82496cede5ef" />


### tablet UX pokemon game 
<img width="536" height="752" alt="image" src="https://github.com/user-attachments/assets/d503eb2d-b780-4b94-9fb0-43fd9edde12e" />


### Phone UX pokemon game
<img width="536" height="752" alt="image" src="https://github.com/user-attachments/assets/63a6b02c-380b-4d20-b6d6-a8ce9545f43c" />




## Automated Testing
Automated unit tests were written using **Jest** to validate core game logic such as:
- Guess validation
- Score calculation
- Pokémon order randomisation

<img width="902" height="352" alt="image" src="https://github.com/user-attachments/assets/cead64f2-d8e0-4ff3-ab62-06bfb2a0bda9" />

---

## Usability Testing (Lighthouse)
Lighthouse audits were performed using Chrome DevTools on all pages -


**Pages tested:**
- Home page
- Game page
- 404 page

**Metrics assessed:**
- Accessibility
- Performance
- Best Practices
- SEO

> ### Mobile
- Home Page
<img width="677" height="558" alt="image" src="https://github.com/user-attachments/assets/d6e3d08d-5704-4d59-937a-f3e35ea2a149" />
- Game Page
  <img width="667" height="542" alt="image" src="https://github.com/user-attachments/assets/dc929752-4a88-4fe2-92f6-56172d1bc088" />
- 404 page
  <img width="673" height="542" alt="image" src="https://github.com/user-attachments/assets/fe91a614-d156-42f4-80cc-903f68e0df89" />

### Laptop
- Home page
  <img width="682" height="585" alt="image" src="https://github.com/user-attachments/assets/67318486-a339-40e2-8f9b-b56154583b23" />
- Game Page
  <img width="686" height="552" alt="image" src="https://github.com/user-attachments/assets/9f9d8512-5637-40b7-9f57-1fe93ac8ea12" />
-404 page
  <img width="683" height="581" alt="image" src="https://github.com/user-attachments/assets/7b728528-ae1e-4ef9-8351-ece5891a7df8" />


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
