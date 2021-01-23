<template>
  <q-page class="flex justify-center q-pt-xl bg-grey-1">
    <div class="full-width q-px-md" style="max-width: 1000px">
      <div class="flex items-center bg-white q-pa-lg rounded-borders">
        <div class="flex">
          <q-input
            dense
            standout
            square
            type="outline"
            placeholder="Enter patient's name..."
            class="q-pr-xs"
          >
            <template v-slot:prepend>
              <q-icon style="margin-top: -6px" size="xs" name="mdi-magnify" />
            </template>
          </q-input>
        </div>
        <div
          :class="[
            currentSelectedFilter && currentSelectedValue ? '' : 'invisible',
          ]"
          class="q-ml-auto q-py-sm q-px-md bg-yellow-1 text-grey-9 text-weight-bold text-capitalize"
        >
          currently filtered by {{ currentSelectedValue }}
          {{ currentSelectedFilter }}
        </div>
        <div class="q-ml-xs">
          <q-btn
            color="grey-7"
            class="bg-grey-1 no-border-radius"
            outline
            dense
          >
            <div class="q-pa-xs">
              change
              <q-icon class="q-pl-xs" name="mdi-filter-variant" />
            </div>
            <q-menu content-class="no-border-radius">
              <q-list dense>
                <q-item
                  v-for="(value, keyName) in paymentFilters"
                  :key="keyName"
                  clickable
                >
                  <q-item-section>
                    <div
                      class="text-body2 text-grey-7 text-capitalize flex no-wrap full-width items-center justify-between"
                    >
                      <span>{{ keyName }}</span
                      ><q-icon size="xs" name="mdi-chevron-right" />
                    </div>
                  </q-item-section>
                  <q-menu
                    auto-close
                    anchor="top right"
                    content-class="no-border-radius"
                  >
                    <q-list>
                      <q-item
                        v-for="(item, idx) in value"
                        :key="idx"
                        dense
                        clickable
                      >
                        <q-item-section>
                          <q-btn
                            flat
                            dense
                            size="sm"
                            @click="handleCurrentSelectedFilterValue(item)"
                            class="text-body2 text-grey-7 text-capitalize"
                          >
                            {{ item }}
                          </q-btn>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <div class="q-my-lg flex items-center bg-white q-pa-lg">
        <div class="column">
          <q-card class="q-pb-xs bg-grey-1 shadow-1 no-border-radius">
              <q-item dense class="">
                <div>
                  <div class="flex items-center">
                    <q-avatar
                      size="4rem"
                      font-size="4rem"
                    >
                      <q-icon color="grey-4"  name="mdi-account-circle" />
                    </q-avatar>
                    <div class="column q-pl-xs ">
                      <span class="text-body2 text-grey-5">@OZXgvts</span>
                      <span class="q-pt-xs text-body1 text-grey-9">Torey Mitchell</span>
                    </div>
                  </div>
                  <div class="q-pb-xs">
                    <q-icon color="grey-4" name="mdi-email" />
                    <span class="text-body2 q-pl-xs text-grey-9">agsCCcj@RIdJmBO.com</span>
                  </div>
                </div>

              </q-item>
              <q-item dense class="flex no-wrap">
                <div>
                  <q-card bordered class="q-pa-sm shadow-0">
                    <div>
                      <div class="q-pa-xs text-uppercase text-body2 text-weight-bold text-grey-7"
                           style="letter-spacing: 1px">basic info</div>
                      <q-separator color="grey-2"  class="q-my-xs" />
                      <div class="q-pb-xs">
                        <q-icon color="grey-4" size="1rem" name="mdi-gender-male-female-variant" />
                        <span class="text-body2 q-pl-xs text-grey-9 text-capitalize">female</span>
                      </div>
                      <div class="q-pb-xs">
                        <q-icon color="grey-4" name="mdi-cellphone" />
                        <span class="text-body2 q-pl-xs text-grey-9">810-362-4975</span>
                      </div>
                      <div class="q-pb-xs">
                        <q-icon color="grey-4" name="mdi-web" />
                        <span class="text-body2 q-pl-xs text-grey-9">qBYSTHE.com</span>
                        <a href="https://dfwnotr.com/"
                           target="_blank"
                            class="q-ml-sm q-px-xs text-grey-7 rounded-borders"
                           style="text-decoration: none; border: 1px solid darkgrey"
                        >visit site</a>
                      </div>
                    </div>
                  </q-card>
                </div>
                <div class="q-ml-sm">
                  <q-card bordered class="q-pa-sm shadow-0">
                    <div>
                      <div class="q-pa-xs text-uppercase text-body2 text-weight-bold text-grey-7"
                           style="letter-spacing: 1px">addresses</div>
                      <q-separator color="grey-2"  class="q-my-xs" />
                      <div class="q-pb-xs">
                        <q-icon color="grey-4" name="mdi-desktop-classic" />
                        <span class="text-body2 q-pl-xs text-grey-9">******5e:34:b7
                        <q-tooltip content-class="no-border-radius">mac address</q-tooltip>
                        </span>
                      </div>
                      <div class="q-pb-xs flex items-center">
                        <q-icon color="grey-4" name="mdi-map-marker-multiple" />
                        <div class="flex no-wrap q-pl-xs ">
                           <span class="text-body2 text-grey-9">LAT: 35.934196
                        </span>
                          <span class="q-ml-sm text-body2 text-grey-9">LONG: 124.94852
                        </span>
                        </div>

                      </div>
                    </div>
                  </q-card>
                </div>
                <div class="q-ml-sm">
                  <q-card bordered class="q-pa-sm shadow-0">
                    <div>
                      <div class="q-pa-xs text-uppercase text-body2 text-weight-bold text-grey-7"
                           style="letter-spacing: 1px">payment details</div>
                      <q-separator color="grey-2"  class="q-my-xs" />
                      <div class="q-pb-xs">
                        <q-icon color="grey-4" name="mdi-credit-card" />
                        <span class="text-body2 q-pl-xs text-grey-9">*********7274
                        </span>
                      </div>
                      <q-card flat bordered class="text-body2 q-pa-sm bg-yellow-1">
                        <div class="">
                           <span class="text-uppercase text-weight-bold text-grey-9 q-pa-xs">discover</span> card was linked to your account <span class="q-ml-xs text-red-7 q-px-xs rounded-borders" style="border: 1px solid red">remove</span>
                        </div>
                        <span class="text-uppercase text-weight-bold text-grey-9 q-pa-xs">paypal</span> was set as prefered payment method <span class="q-ml-xs text-white q-px-xs bg-green-5 rounded-borders" style="border: 1px solid mediumseagreen">change</span>

                      </q-card>

                    </div>
                  </q-card>
                </div>
              </q-item>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      currentSelectedFilter: "",
      currentSelectedValue: "",
      paymentFilters: {
        gender: ["male", "female", "unspecified"],

        "payment method": ["discover", "visa", "mastercard"],
      },
    };
  },
  methods: {
    handleCurrentSelectedFilterValue(value) {
      if (value.toLowerCase() === "male") {
        this.currentSelectedFilter = "gender";
        this.currentSelectedValue = "male";
      } else if (value.toLowerCase() === "female") {
        this.currentSelectedFilter = "gender";
        this.currentSelectedValue = "female";
      } else if (value.toLowerCase() === "unspecified") {
        this.currentSelectedFilter = "gender";
        this.currentSelectedValue = "unspecified";
      } else if (value.toLowerCase() === "discover") {
        this.currentSelectedFilter = "payment method";
        this.currentSelectedValue = "discover";
      } else if (value.toLowerCase() === "visa") {
        this.currentSelectedFilter = "payment method";
        this.currentSelectedValue = "visa";
      } else {
        this.currentSelectedFilter = "payment method";
        this.currentSelectedValue = "mastercard";
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
