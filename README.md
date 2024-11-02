# TODO-APP

The repository contains a Todo App built using Vue 3 framework.

Below features have been implemented.

- List to-do items in a readable format (grid, list, etc.) with the appropriate priority
  displayed.
- Add a new item to the list with an assigned priority.
- Remove an item from the list.
- Clear the entire list.
- Edit existing items.
- Save to local storage and reload when entering the page.
- Implement unit testing.
- Implement end-to-end (E2E) testing.
- Sort items by priority.

### Data

Data communication between components is being handled through props, as state managment would be expensive for this scale of application.

## Project set-up

To set-up this project run the below commands

### Installation

```bash

  npm install


```

### Run the application

```bash

  npm run dev


```

### Run the cypress

Component unit test

```bash

  npm run cypress:open


```

### Run the cypress - End-to-End Testing

Component unit test

```bash

  npm run test:e2e


```
