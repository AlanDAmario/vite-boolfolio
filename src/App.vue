<script>
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      title: "projects",
      project: [],
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    getProjects() {
      const url = "http://127.0.0.1:8000/api/projects";
      const result = axios
        .get(url)
        .then((response) => {
           //console.log(response.data.results);

          if (response.data.status && response.data.results) {
            console.log(response.data.results);
            this.project = response.data.results;
          } else {
            console.log("Error: ", response.data.message);
          }
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <div class="container">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss" scoped></style>
