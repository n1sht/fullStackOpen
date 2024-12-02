sequenceDiagram
participant User
participant Browser
participant Server

    User->>Browser: Writes note and clicks "Save"
    Browser->>Browser: Prevents default form submission
    Browser->>Browser: Creates new note object and updates DOM
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server
    Server-->>Browser: HTTP 201 Created
    deactivate Server
    Note right of Browser: The page does not reload, and the new note is displayed immediately
