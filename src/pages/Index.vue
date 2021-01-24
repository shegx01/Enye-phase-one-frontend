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
            <div class="q-pa-xs text-body2">
              change filter
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
                            @click="handleCurrentSelectedFilterValue(item)"
                            class="text-body2 text-grey-7 "
                            :class="item === 'jcb' ? 'text-uppercase' : 'text-capitalize'"
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
      <div
        class="q-my-lg flex justify-center items-center bg-white q-pa-lg"
        style="min-height: 60vh"
      >
        <div class="column">
          <PatientInfo />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PatientInfo from "../components/PatientInfo";
export default {
  name: "PageIndex",
  components: {
    PatientInfo,
  },
  data() {
    return {
      currentSelectedFilter: "",
      currentSelectedValue: "",
      paymentFilters: {
        gender: ["male", "female", "unspecified"],

        'card type': ["discover", "visa", "mastercard", 'jcb'],
      },
      isLoading: true,
      responseData: {},
      dataError: "",
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
        this.currentSelectedFilter = "card type";
        this.currentSelectedValue = "discover";
      } else if (value.toLowerCase() === "visa") {
        this.currentSelectedFilter = "card type";
        this.currentSelectedValue = "visa";
      } else if (value.toLowerCase() === "jcb") {
        this.currentSelectedFilter = "card type";
        this.currentSelectedValue = "jcb";
      } else {
        this.currentSelectedFilter = "card type";
        this.currentSelectedValue = "mastercard";
      }
    },
    handleFilteredPatient(selectedFilter, selectedValue) {
      if (selectedFilter === "gender") {
        return this.responseData.records.profiles.filter(
          (patient) => patient['Gender'].toLowerCase() === selectedValue
        );
      }
      if (selectedFilter === "card type") {
        return this.responseData.records.profiles.filter(
          (patient) => patient["CreditCardType"].toLowerCase() === selectedValue
        );
      }
    },
  },
  created() {
    this.$api
      .get("/")
      .then((response) => {
        this.responseData = response.data;
        this.isLoading = false;
      })
      .catch((error) => {
        //    should a request made and no response was received
        if (error.request) this.dataError = error.message;
        // request with different status other than 200
        else if (error.response) this.dataError = error.response.data;
      });
  },
  computed: {
        patientList() {
            let result = [];
            if (this.responseData.records === undefined)  return result;
            if (
                this.currentSelectedFilter === '' &&
                this.currentSelectedValue === ''){
                result =  this.responseData.records.profiles;
                return result
            }
            else {
                result =  this.handleFilteredPatient(
                    this.currentSelectedFilter,
                    this.currentSelectedValue
                );
            }
            return result

        },
    },
};
</script>

<style lang="stylus" scoped></style>
