### Google Analytics code snippet

import "bootstrap/dist/css/bootstrap.min.css";

```js
import ReactGA from "react-ga";
ReactGA.initialize("UA-199287147-1");
ReactGA.pageview(window.location.pathname + window.location.search);
```

- Standard Object Format for Project

```js
{
    route_slug: "route-slug",
    title: "Project Title",
    description: "Project Description",
    static_logo_path: "path to static logo",
    readme_file_path: "path to readme file",
    links_to_show: [
        {
            text_to_show: "Github",
            link_url: "link to github"
        }
    ],
},
```

- Generating the data of **5 Projects** and **8 Explore projects**