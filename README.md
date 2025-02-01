This project is a Node.js application that manages Frequently Asked Questions (FAQs) with support for multiple languages. It uses MongoDB to store FAQs, integrates a WYSIWYG editor for rich text answers, supports language translations, and includes caching to improve performance.

Features
Add FAQs: Admins can add FAQs with questions and answers.
Multi-language Support: FAQs can be displayed in different languages.
WYSIWYG Editor: Answers can be formatted with bold, italics, and other styles.
API: Get FAQs in different languages using a REST API.
Caching: Translations are cached using Redis for faster performance.
Google Translate: Automatically translate FAQs when new ones are added.


Prerequisites
Make sure you have Node.js and MongoDB installed.

Clone the Repository:

git clone https://github.com/Mahima9/bharatfd.git
cd bharatfd
Install Dependencies: Install all required packages:

npm install
Set Up MongoDB: Make sure your MongoDB is running on localhost:27017/faqdb

Set Up Redis (for caching): Install and run Redis on your local machine or use a Redis cloud service.

Start the Server: Run the application:

npm start
The server will now be running on http://localhost:5000.