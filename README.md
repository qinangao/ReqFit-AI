# ReqFit-AI-Resume-Analyser

## Overview

ReqFit AI Resume Analyser is a web application that helps users analyse and improve their resumes using AI-powered feedback. The app evaluates resumes based on ATS (Applicant Tracking System) compatibility, tone and style, content, structure, and skills, providing actionable suggestions for improvement. Users can upload their resumes, receive detailed feedback, and track their submissions.

## Features

- **Resume Upload**: Upload PDF resumes and convert them to images for preview.
- **AI Analysis**: Get feedback and scores for ATS, tone & style, content, structure, and skills.
- **Actionable Tips**: Receive categorized suggestions to improve your resume.
- **Submission Tracking**: View and manage all your uploaded resumes and feedback.
- **Authentication**: Secure login and logout using Puter.js authentication.
- **Data Management**: Wipe all app data and files if needed.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Routing**: React Router v7
- **State Management**: Zustand
- **AI Integration**: Puter.js AI API (Claude 3 Sonnet model)
- **PDF Processing**: pdfjs-dist
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/qinangao/reqfit-ai.git
   cd reqfit-ai
   ```

2. Install dependencies:
   ```sh
   npm ci
   ```

### Development

Start the development server:

```sh
npm run dev
```

The app will be available at `http://localhost:5173` (or as indicated in your terminal).

### Build

To build the project for production:

```sh
npm run build
```

### Production

To start the production server:

```sh
npm run start
```

### Docker

You can build and run the app using Docker:

```sh
docker build -t reqfit-ai .
docker run -p 5173:5173 reqfit-ai
```

## Usage

1. **Login**: Authenticate using the login page.
2. **Upload Resume**: Go to the upload page and submit your resume PDF.
3. **Analysis**: Wait for the AI to process and analyse your resume.
4. **Review Feedback**: View detailed feedback and scores for your resume.
5. **Track Submissions**: See all your previous uploads and their feedback on the home page.
6. **Wipe Data**: Use the wipe page to delete all stored files and data.

## File Structure

- `app/` - Main application code (components, routes, lib)
- `constants/` - Static data and AI prompt formats
- `types/` - TypeScript type definitions
- `public/` - Static assets (images, icons, PDF worker)
- `.react-router/` - React Router generated types
- `build/` - Build output
- `Dockerfile` - Docker configuration
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Key Components

- **ResumeCard**: Displays a summary of each resume.
- **Summary**: Shows overall and category scores.
- **ATS**: ATS-specific feedback and tips.
- **Details**: Accordion with detailed tips for each category.
- **FileUploader**: Drag-and-drop PDF upload.
- **NavBar**: Navigation bar.
- **WipeApp**: Data deletion utility.

## Environment & Configuration

- The app uses Puter.js for authentication, file storage, and AI services.
- PDF conversion uses a local worker (`public/pdf.worker.min.mjs`).

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

MIT

---

**Note:** This app is for educational and demonstration purposes. AI feedback may not guarantee job placement or interview opportunities. Always tailor your resume to the specific job and company, and consider seeking professional resume writing assistance if needed.
