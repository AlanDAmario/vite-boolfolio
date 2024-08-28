import { createApp } from "vue";

// Import our custom CSS
import "./scss/main.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

//*****
//Router
//*****
import { router } from "./router";

//================================================
//*****
//FONT AWESOME
//*****
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

import App from "./App.vue";

createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
