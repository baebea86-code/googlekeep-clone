# Google Keep Clone

A simple front-end clone of Google Keep built with HTML, CSS, and vanilla JavaScript. The app lets users create, view, edit, and delete notes, with note data saved in the browser using localStorage.

## Features

- Create new notes with a title and content
- Open and edit notes in a modal view
- Archive notes by clicking the archive icon
- Persist notes between refreshes using localStorage
- Responsive note-card layout inspired by Google Keep
- Sidebar hover interaction and Material Icons styling

## Project Structure

- index.html — Main app layout and UI structure
- style.css — Styling for the layout, sidebar, notes, and modal
- app.js — Note logic, DOM rendering, local storage handling, and interactions

## How It Works

- The app starts by loading any existing notes from localStorage so your saved notes remain available after a refresh.
- Clicking the note input opens the expanded note form where you can add a title and content.
- When a note is submitted, the app creates a new note object and renders it into the notes area.
- Clicking a note opens a modal window where you can edit its title and text.
- Clicking the archive icon removes the note from the list and updates the saved data.
- The UI uses simple interactions like sidebar hover effects and tooltip icons to mimic the Google Keep experience.

## How to Run

1. Open the project folder in your browser.
2. Launch index.html directly, or use a simple local server such as Live Server in VS Code.

## Tech Stack

- HTML
- CSS
- JavaScript

## Notes

This project is a lightweight frontend demo and does not include backend storage or account-based syncing.
