# PhotoBucket

A photo sharing application like Instagram

------------------------
## Tech
------------------------
- React
- Tailwind CSS
- Firebase
- LoadTest
- Lighthouse
- Vercel
- React Testing Library
- Cypress E2E Testing

------------------------
# Notes
------------------------
1. Base: Client Side Rendered App - Built on Create-React-App
    - We Will connect to a database, which will be Firebase
    - Dependencies mentioned in packages
2. Architecture:
    -src
        - Components
        - Constants
        - Context
        - Helpers
        -Hooks
        - Lib(firebase)
        - Services(firebase services)
        - Styles
            - (app, tailwind)

---------------------------------------------
REACT-ROUTER-DOM

This application is client side rendered. So when we use react-router-dom, we go to a specific path and it works as long as the page is not refreshed with that path, because that path is requested from the front end to the server, but the server does not exist. 

What we want to do is load components(or pages) when we go to a specific path. We don't want the whole site to load when we open the homepage. This is achieved with Lazy Loading. 
import {lazy} from react. 

Concepts to read up on: 
    - lazy
    - suspense
------------------------
## Tech Specific Notes
------------------------

------------------------
## Packages Used
------------------------
1. date-fns
2. firebase
3. react-loading-skeleton
4. react-router-dom
