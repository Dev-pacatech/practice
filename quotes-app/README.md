# Quotes App

A simple and responsive Random Quotes Generator built with React and Tailwind CSS, enhanced with smooth animations using Framer Motion. The app fetches and displays random quotes from the Quotable API, allowing users to get new inspirational quotes with the click of a button. It features loading and error states to ensure a smooth and user-friendly experience.

## Features

- Fetches random quotes from the [Quotable API](https://api.quotable.io/random)
- Displays quote content and author
- Loading indicator while fetching data
- Error handling for failed requests
- Button to fetch a new random quote
- Smooth animations powered by Framer Motion
- Styled with Tailwind CSS for a clean and modern look

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd quotes-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server and run the app locally:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` (or the port shown in the terminal) to see the app in action.

Click the "New Quote" button to fetch a new random quote.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- JavaScript (ES6+)
- Quotable API for quotes
- Custom React hook for data fetching

## Folder Structure

```
quotes-app/
├── src/
│   ├── componenets/
│   │   └── QuoteBox.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is open source
