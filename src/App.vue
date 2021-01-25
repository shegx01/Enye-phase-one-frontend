<template>
  <div id="q-app" class="eina-font">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
  .border-primary
    border 1px solid $grey-4

 .q-field--dense .q-field__control
   height 32px
.q-toolbar
  min-height unset

.q-tab__label
  font-size 12px

.q-tab-panel
  padding 0

body.desktop .q-focusable:focus .q-focus-helper,
body.desktop .q-hoverable:hover .q-focus-helper
background inherit
  opacity 0.01

body.ios .q-hoverable:active .q-focus-helper
background inherit
  opacity 0.01


.q-date__calendar-item > div, .q-date__calendar-item button
     width 30px
    height 20px

.q-date__calendar-weekdays > div
    opacity 0.38
    font-size 11px

.q-btn
  font-size 12px

</style>
