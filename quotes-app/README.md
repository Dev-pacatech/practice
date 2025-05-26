# Quotes App

A simple React application built with Vite that generates random quotes using the Quotable API. The app displays a random quote along with its author and allows users to fetch new quotes with the click of a button. It features loading and error states for a smooth user experience.

## Features

- Fetches random quotes from the [Quotable API](https://api.quotable.io/random)
- Displays quote content and author
- Loading indicator while fetching data
- Error handling for failed requests
- Button to fetch a new random quote
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

This project is open source and available under the MIT License.
