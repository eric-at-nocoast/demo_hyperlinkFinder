# Help Center Hyperlink Finder

## Description
This is a small proof of concept script written in node.js to assist with finding which Zendesk help center articles include a hyperlink that needs to be updated.

When running the script it will loop through the articles and find any that include a `<a>` tag and output them to the console. 

### Prerequisites
1. [Node.js](https://nodejs.dev/download) must be installed on your machine
1. An [Api Token](https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token) for your Zendesk instance

### Getting Started
1. [Clone](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) the repository `git clone https://github.com/eric-at-zd/demo_hyperlinkFinder`
1. cd into the directory `cd demo_hyperlinkFinder`
1. Install the dependencies `npm install`
1. Change the .env.example file to .env and input your Zendesk subdomain, email and api token
1. Run the script `npm start`
