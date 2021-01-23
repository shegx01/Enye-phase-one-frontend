<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
 .q-field--dense .q-field__control
   height 32px

// .q-field--dark .q-field__control:before
//   border-color #252832
// .q-field--dark .q-field__control:hover:before
//    border-color: #e8e9ef



.input-clear
  margin-top -10px
  margin-right -5px

.input-search
  margin-top -10px
  margin-left -5px

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

.q-focus-helper
  opacity 0.01
  transition unset

.q-date__view
    height 100%
    width 100%
    min-height 268px
    padding 6px 6px 0 6px

.q-date__actions
    padding 0 6px 6px

.q-btn--rectangle
    border-radius 1px

.q-date__calendar-item > div, .q-date__calendar-item button
     width 30px
    height 20px

.q-date__calendar-weekdays > div
    opacity 0.38
    font-size 11px

.q-btn
  font-size 11px

.q-slider__pin-text-container
    min-height 25px
    padding 2px 8px
     border-radius 0

.q-slider__pin-text
    // color $foreground
    font-size 11px

// .q-list--dark, .q-item--dark
//     color $blue-grey-6

 .q-field--standout.q-field--focused .q-field__native
    color #4d5156
 //dark
 .q-field--standout.q-field--dark.q-field--focused .q-field__native
    color $blue-grey-3

 .q-field--standout.q-field--focused .q-field__control
    background white
    border 1px solid $primary
   //dark
 .q-field--standout.q-field--dark.q-field--focused .q-field__control
    background $dark
    border 1px solid $primary


 .border-light
   border 1px solid $separator-color

 .border-dark
   border 1px solid $separator-dark-color

  .bar-bottom-shadow-light
    box-shadow: 0 3px 2px #bdbdbd;

 .bar-bottom-shadow-dark
    box-shadow: 0 3px 2px #323232;

 .q-tab__label
   font-size 11px

.q-tab
  padding-left 10px
  padding-right 10px

 .q-btn--rectangle
   border-radius 3px

</style>
