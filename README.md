# Search for Kits functionality
Biobot customers receive a kit with tubes inside of it, which the customer uses to collect samples, and later sends the kit back to the Biobot lab. Your task is to build out a search view with an autocomplete functionality for our customers to use to track the shipping status of that kit.

# Project Description

When searching in the search bar using numbers such as 34 or 31, which correspond to the Kit labelId, we fetch data based on the query. The retrieved data is then displayed in a dropdown as suggestions. When a user clicks on an item in the dropdown, it gets selected in the search bar list. Additionally, I implemented a multi-select dropdown feature, allowing users to choose multiple kits while entering Kit label IDs.

## Setup
1.  Package Instalation
```
npm install
```

2. Run the project
```
npm start
```