# React Knowledge Base Search Application

This project is a web application that allows users to search for knowledge base articles. Users can filter articles by knowledge base section and locale, view search results, and see which articles they have previously viewed.

## Features

- Search for knowledge base articles
- Filter results by section and locale
- Highlight previously viewed articles
- Save viewed articles in localStorage

## Project Structure

```
react-search-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # React components
│   │   ├── ArticleCard.tsx # Displays individual articles
│   │   ├── FilterBar.tsx   # Allows filtering of articles
│   │   └── SearchBar.tsx   # Input for search queries
│   ├── pages
│   │   └── HomePage.tsx    # Main page of the application
│   ├── services
│   │   └── api.ts          # API interaction functions
│   ├── styles
│   │   └── global.css      # Global styles
│   ├── utils
│   │   └── localStorage.ts  # Utility functions for localStorage
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point for the React application
│   └── types
│       └── index.ts        # TypeScript types and interfaces
├── package.json             # npm configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-search-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Use the search bar to enter keywords related to the articles you are looking for.
- Apply filters to narrow down the search results based on sections and locales.
- Click on an article to view its details. Previously viewed articles will be highlighted for easy identification.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.