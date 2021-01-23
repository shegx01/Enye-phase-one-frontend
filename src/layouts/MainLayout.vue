<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-green-10">
      <div style="width: 100%;display: grid;justify-items: center">
        <q-toolbar style="height: 56px; max-width: 1440px;">
          <span>
            <q-toolbar-title>
              <q-btn
                flat
                dense
                no-wrap
                tag="a"
                :to="{ name: 'home' }"
                class="text-weight-bold cursor-pointer text-dark"
                color="red"
              >
               BRAND
              </q-btn>
            </q-toolbar-title>
          </span>

          <q-space />
          <div class="gt-sm flex no-wrap justify-end">
            <template v-for="(link, idx) in navLinks">
              <q-btn
                :key="idx"
                flat
                dense
                padding="none"
                no-caps
                size="md"
                tag="a"
                :to="{ name: link.to }"
                :ripple="false"
                class="no-border-radius text-capitalize q-mr-lg text-foreground-dark"
              >
                <span>{{ link.label }}</span>
              </q-btn>
            </template>
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <div>
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      navLinks: [
        { label: "all patients", to: "#" },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped></style>
