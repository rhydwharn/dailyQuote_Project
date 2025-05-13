
# Tech Crunch Group 13 Mini Project

This Project is Daily Quote API, the API is meant to return random daily quotes. Also the users are allowed to specify the quote by ID.


## API Reference

#### Get random daily quotes

```http
  GET /api/quotes
```

#### Get quotes by id

```http
  GET /api/quotes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of quotes to fetch |

#### Get all quotes

```http
  GET /api/quotes/all
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `all`      | `string` | Returns all quotes |




## Installation

Install dailyQuote_Project with npm

```bash
  Create a new folder
  Open the folder in editor (Vs Code)
  cd new-project-folder
  git clone https://github.com/rhydwharn/dailyQuote_Project.git
  npm install 
  npm run executeApp
```
    
## About the stack

The project was developed with Javascript (Node.js) using Express as the framework.