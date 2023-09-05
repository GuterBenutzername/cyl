# backend

The backend of cyl handles storing assignments, courses, users, and other info, calculating insights (premium), and auto-updating grades (premium).

- cyl-backend, handling the storing of the aforementioned data, provides a REST API to authenticate and interface with the primary database of assignments, courses, users, etc.

- cyl-analyzer, handling insights, is a daemon that periodically analyzes grades and stores all results into the "insights" table.

- cyl-updater, handling grade auto-updating, is a web-scraper run occasionally to scrape grades from multiple school districts' grade books.
