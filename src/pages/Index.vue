<template>
  <q-page class="flex justify-center q-pt-xl bg-grey-1">
    <div class="full-width q-px-md" style="max-width: 1000px">
      <div class="flex items-center bg-white q-pa-lg rounded-borders">
        <div class="flex">
          <q-input
            dense
            standout
            rounded
            debounce="1000"
            v-model="searchInput"
            @input="handleInputChange"
            type="outline"
            placeholder="Enter patient's name..."
            class="q-pr-xs"
          >
            <template v-slot:prepend>
              <q-icon style="margin-top: -6px" size="xs" name="mdi-magnify" />
            </template>
            <template v-if="searchInput !== ''" v-slot:append>
              <q-btn
                flat
                round
                :ripple="false"
                @click="handleSearchInputClear"
                style="margin-top: -6px"
              >
                <q-icon size="xs" name="mdi-close" />
              </q-btn>
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
        <div
          class="q-ml-xs"
          v-show="currentSelectedFilter && currentSelectedValue"
        >
          <q-btn
            color="grey-1"
            padding="6px"
            @click="handleFiltersReset"
            unelevated
            class="text-grey-9 no-border-radius border-primary"
            label="clear filters"
            dense
          >
          </q-btn>
        </div>
        <div class="q-ml-xs">
          <q-btn
            color="grey-3"
            unelevated
            class="text-grey-9 no-border-radius"
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
                            class="text-body2 text-grey-7"
                            :class="
                              item === 'jcb'
                                ? 'text-uppercase'
                                : 'text-capitalize'
                            "
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
          <div v-if="paginatedPatientsList.length > 0" >
            <template v-for="(patient, idx) in paginatedPatientsList">
              <PatientInfo :Key="idx" :patient="patient" :class="idx === paginatedPatientsList.length-1 ? '' : 'q-mb-lg'" />
            </template>
          </div>
          <div>
            <div class="q-py-xl flex justify-end">
              <q-pagination
                v-model="currentPageNum"
                ellipses
                padding="xs"
                color="grey-9"
                unelevated
                input-class="shadow-0"
                :max="pageCount"
                :direction-links="true"
              />
            </div>
          </div>
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
      searchInput: "",
      currentSelectedFilter: "",
      currentSelectedValue: "",
      paymentFilters: {
        gender: ["male", "female", "unspecified"],

        "card type": ["discover", "visa", "mastercard", "jcb"],
      },
      isLoading: true,
      responseData: {},
      dataError: "",
      perPage: 20,
      currentPageNum: 1,
      defaultPatientsList: [],
    };
  },
  methods: {
    //  methods must not modify data, transformation needed
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
    handleFilteredPatient(inputData, selectedFilter, selectedValue) {
      if (selectedFilter === "gender") {
        return inputData.filter((patient) => {
          if (selectedValue === "unspecified")
            return patient["Gender"].toLowerCase() !== "male" && patient["Gender"].toLowerCase() !== "female";
          return patient["Gender"].toLowerCase() === selectedValue;
        });
      }
      if (selectedFilter === "card type") {
        return inputData.filter(
          (patient) => patient["CreditCardType"].toLowerCase() === selectedValue
        );
      }
    },
    paginateData(inputData, pageSize, pageNum) {
      return inputData.slice((pageNum - 1) * pageSize, pageNum * pageSize);
    },
    filterByName(inputData, inputName) {
      //search only if inputData is not empty string or false whatnot
      if (!inputName) return inputData;

      return inputData.filter(
        (item) =>
          item["FirstName"].toLowerCase().includes(inputName.toLowerCase()) ||
          item["LastName"].toLowerCase().includes(inputName.toLowerCase())
      );
    },
    handleInputChange(_evt) {
      this.patientsList = this.searchInput;
    },
    handleSearchInputClear() {
      this.searchInput = "";
      this.defaultPatientsList = this.responseData.records.profiles;
    },
    handleFiltersReset() {
      this.currentSelectedValue = "";
      this.currentSelectedFilter = "";
    },
  },
  created() {
    this.$api
      .get("/")
      .then((response) => {
        this.responseData = response.data;
        this.defaultPatientsList = response.data.records.profiles;
        this.isLoading = false;
      })
      .catch((error) => {
        //    should a request made and no response was received
        if (error.request) {
          this.isLoading = false;
          this.dataError = error.message;
        }
        // request with different status other than 200
        else if (error.response) {
          this.isLoading = false;
          this.dataError = error.response.data;
        }
      });
  },
  computed: {
    patientsList: {
      get() {
        let result = [];
        if (
          this.currentSelectedFilter === "" &&
          this.currentSelectedValue === ""
        ) {
          result = this.defaultPatientsList;
          return result;
        } else {
          result = this.handleFilteredPatient(
            this.defaultPatientsList,
            this.currentSelectedFilter,
            this.currentSelectedValue
          );
        }
        return result;
      },
      set(val) {
        !val
          ? (this.defaultPatientsList = this.responseData.records.profiles)
          : (this.defaultPatientsList = this.filterByName(
              this.patientsList,
              val
            ));
      },
    },
    paginatedPatientsList() {
      return this.paginateData(
        this.patientsList,
        this.perPage,
        this.currentPageNum
      );
    },
    pageCount() {
      return Math.ceil(this.patientsList.length / this.perPage);
    },
  },
};
</script>

<style lang="stylus" scoped>
.border-primary
  border 1px solid $grey-4
</style>
