<template>
  <q-page class="flex justify-center q-pt-xl bg-grey-1">
    <div class="full-width q-px-md" style="max-width: 1000px">
      <div class="flex items-center">
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
          class="q-ml-auto q-py-sm q-px-md bg-yellow-2 text-grey-9 text-weight-bold text-capitalize"
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
