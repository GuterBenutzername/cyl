# backend

The backend of cyl handles storing assignments, courses, users, and other info, calculating insights (premium), and auto-updating grades (premium).

- cyl-backend, handling the storing of the aformentioned data, uses a REST API provided by a trio of Flask, Connexion, and SQLAlchemy.

- cyl-analyzer, handling insights, is a Rust daemon that periodically analyzes grades and stores all results into the "insights" table.

- cyl-updater, handling grade auto-updating, is a Python web-scraper run occasionally to scrape grades from multiple school district's gradebooks.
