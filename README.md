# ASBot: GPT-3.5 Analysis & Grading

Welcome to my thesis application, a powerful combination of Next.js, the GPT-3.5 Turbo model, and the Google Translate API. This simple yet powerful application assesses questions and answers, provides an in-depth analysis, and assigns a grade between 1 and 10.

## Features

- **Input Assessment**: Enter your question and its corresponding answer, and let the system take care of the rest.
- **Answer Analysis**: Delve into comprehensive feedback on the provided answer.
- **Grading System**: Get a numeric grade from 1 to 10, enabling a quick assessment of the answer's quality.

## Prerequisites

Ensure you have the following installed on your local development machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Clone the repository**: git clone [REPOSITORY_URL]
2. **Navigate to the project directory**: cd [DIRECTORY_NAME]
3. **Install the dependencies**: npm install
4. **Set up your environment variables**. Ensure you have API keys for both GPT-3.5 Turbo and Google Translate. Add them to your `.env.local` file:
   NEXT_PUBLIC_OPENAI_API_KEY: [YOUR_OPENAI_KEY]
   NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY: [YOUR_GOOGLE_API_KEY]
5. **Run the development server**: npm run dev

Visit `http://localhost:3000` on your browser to access the application.

## Usage

1. On the main page, locate the form to input a question and its corresponding answer.
2. Submit your input. The application will process the data, providing an analysis and a grade between 1 and 10.

## Contributing

As this application is primarily for academic purposes, contributions are not currently accepted. However, feedback is always welcome.

## Acknowledgements

I developed this project as a component of my thesis. It's a testament to the potential of integrating modern frameworks and APIs seamlessly.

## License

This project is licensed under the MIT License.

---

For any queries or clarifications regarding my thesis application, please don't hesitate to reach out.
