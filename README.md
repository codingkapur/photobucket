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
------------------------
## Tech Specific Notes
------------------------

### REACT-ROUTER-DOM

This application is client side rendered. So when we use react-router-dom, we go to a specific path and it works as long as the page is not refreshed with that path, because that path is requested from the front end to the server, but the server does not exist. 

What we want to do is load components(or pages) when we go to a specific path. We don't want the whole site to load when we open the homepage. This is achieved with Lazy Loading. 
import {lazy} from react. 

Concepts to read up on: 
    - lazy
    - suspense

Changes in React-Router-Dom v5 to v6:

Switch becomes Routes
useHistory is not useNavigate
const history = useHistory(); becomes navigate = useNavigate();
history.push('page url') becomes navigate('page url)

### Tailwind CSS

Installation has been a pain in the butt. 

This link helped:

"dev.to/saviomartin/set-up-tailwind-in-react-the-fastest-way-2a4d"

The offical website says a way for an "Upcoming version of Create React App


------------------------
## Packages Used
------------------------
1. date-fns
2. firebase
3. react-loading-skeleton
4. react-router-dom
5. tailwindcss (dev dep)
6. prop-types (dev dep)
7. postcss-cli (dev dep)
8. run-all (dev dep)
9. autoprefixer (dev dep)