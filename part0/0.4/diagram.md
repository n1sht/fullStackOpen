sequenceDiagram
participant browser
participant server

    %% User action: Submit the form
    browser->>server: POST /new_note (data: note content)
    activate server
    %% Server adds new note and redirects
    server-->>browser: 302 Redirect (Location: /notes)
    deactivate server

    %% Browser reloads the notes page
    browser->>server: GET /notes
    activate server
    server-->>browser: HTML document
    deactivate server

    %% Fetch CSS, JavaScript, and data
    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "new note", "date": "2023-12-02" }, ...]
    deactivate server

    %% Rendering notes on the page
    Note right of browser: the browser executes JavaScript to render the notes
