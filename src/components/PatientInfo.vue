<template>
  <q-card class="q-pt-xs q-pb-md bg-grey-1 shadow-1">
    <q-item dense class="">
      <div>
        <div class="flex items-center">
          <q-avatar size="4rem" font-size="4rem">
            <q-icon color="grey-4" name="mdi-account-circle" />
          </q-avatar>
          <div class="column q-pl-xs">
                    <span class="q-pt-xs text-body1 text-grey-9"
                    >Torey Mitchell</span
                    >
            <span class="text-body2 text-grey-5">@OZXgvts</span>
          </div>
        </div>
        <div class="q-pb-xs">
          <q-icon color="grey-4" name="mdi-email" />
          <span class="text-body2 q-pl-xs text-grey-9"
          >agsCCcj@RIdJmBO.com</span
          >
        </div>
      </div>
    </q-item>
    <q-item dense class="flex no-wrap">
      <div>
        <q-card class="q-pa-sm shadow-0">
          <div>
            <div
              class="q-pa-xs text-uppercase text-body2 text-weight-bold text-grey-7"
              style="letter-spacing: 1px"
            >
              basic info
            </div>
            <q-separator color="grey-2" class="q-my-xs" />
            <div class="q-pb-xs">
              <q-icon
                color="grey-4"
                size="1rem"
                name="mdi-gender-male-female-variant"
              />
              <span
                class="text-body2 q-pl-xs text-grey-9 text-capitalize"
              >female</span
              >
            </div>
            <div class="q-pb-xs">
              <q-icon color="grey-4" name="mdi-cellphone" />
              <span class="text-body2 q-pl-xs text-grey-9"
              >810-362-4975</span
              >
            </div>
            <div class="q-pb-xs">
              <q-icon color="grey-4" name="mdi-web" />
              <span class="text-body2 q-pl-xs text-grey-9"
              >qBYSTHE.com</span
              >
              <a
                href="https://dfwnotr.com/"
                target="_blank"
                class="q-ml-sm q-px-xs text-grey-7 rounded-borders"
                style="
                          text-decoration: none;
                          border: 1px solid darkgrey;
                        "
              >visit site</a
              >
            </div>
          </div>
        </q-card>
      </div>
      <div class="q-ml-sm">
        <q-card class="q-pa-sm shadow-0">
          <div>
            <div
              class="q-pa-xs text-uppercase text-body2 text-weight-bold text-grey-7"
              style="letter-spacing: 1px"
            >
              addresses
            </div>
            <q-separator color="grey-2" class="q-my-xs" />
            <div class="q-pb-xs">
              <q-icon color="grey-4" name="mdi-desktop-classic" />
              <span class="text-body2 q-pl-xs text-grey-9"
              >******5e:34:b7
                        <q-tooltip content-class="no-border-radius"
                        >mac address</q-tooltip
                        >
                      </span>
            </div>
            <div class="q-pb-xs flex items-center">
              <q-icon color="grey-4" name="mdi-map-marker-multiple" />
              <div class="flex no-wrap q-pl-xs">
                        <span class="text-body2 text-grey-9"
                        >LAT: 35.934196
                        </span>
                <span class="q-ml-sm text-body2 text-grey-9"
                >LONG: 124.94852
                        </span>
              </div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="q-ml-sm">
        <q-card class="q-pa-sm shadow-0">
          <div>
            <div
              class="q-pa-xs text-uppercase text-body2 text-weight-bold text-grey-7"
              style="letter-spacing: 1px"
            >
              payment details
            </div>
            <q-separator color="grey-2" class="q-my-xs" />
            <div class="q-pb-xs">
              <q-icon color="grey-4" name="mdi-credit-card" />
              <span class="text-body2 q-pl-xs text-grey-9"
              >*********7274
                      </span>
            </div>
            <q-card
              flat
              bordered
              class="text-body2 q-pa-sm bg-yellow-1"
            >
              <div class="q-pb-sm">
                        <span
                          class="text-uppercase text-weight-bold text-grey-9 q-pa-xs"
                        >discover</span
                        >
                card was linked to your account
                <span
                  class="q-ml-xs text-red-7 q-px-xs rounded-borders"
                  style="border: 1px solid red"
                >remove</span
                >
              </div>
              <span
                class="text-uppercase text-weight-bold text-grey-9 q-pa-xs"
              >paypal</span
              >
              was set as prefered payment method
              <span
                class="q-ml-xs text-white q-px-xs bg-green-5 rounded-borders"
                style="border: 1px solid mediumseagreen"
              >change</span
              >
            </q-card>
          </div>
        </q-card>
      </div>
    </q-item>
    <div class="q-mx-md q-mt-sm">
      <q-card flat bordered class="q-pa-sm bg-green-1 text-green-9">
        <span class="text-body2">Last logged in 21st January 2021 - 2:30pm</span>
      </q-card>
    </div>
  </q-card>
</template>

<script>
    export default {
        name: "PatientInfo.vue"
    }
</script>

<style scoped>

</style>
