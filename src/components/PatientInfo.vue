<template>
  <q-card class="q-pt-xs bg-grey-1 shadow-1">
    <q-item dense class="">
      <div>
        <div class="flex items-center">
          <q-avatar text-color="grey-5"  icon="mdi-account-circle" bordered size="4rem" font-size="4rem">
<!--            <q-icon color="grey-4" name="mdi-account-circle" />-->
          </q-avatar>
          <div class="column q-pl-xs">
            <span class="q-pt-xs text-body1 text-grey-9 text-capitalize">{{ patient.FirstName }} {{ patient.LastName }}</span>
            <span class="q-mt-xs text-body2 text-grey-5">{{ patient.UserName }}</span>
          </div>
        </div>
        <div class="q-pl-sm q-py-sm">
          <q-icon color="grey-5" size="1.2rem" name="mdi-email" />
          <span class="text-body2 q-pl-xs text-grey-9"
            >{{ patient.Email }}</span
          >
        </div>
      </div>
    </q-item>
    <q-item dense class="flex no-wrap">
      <div>
        <q-card class="q-py-sm shadow-0">
          <div>
            <div
              class="q-py-xs q-px-sm text-uppercase text-body2 text-weight-bold text-grey-7"
              style="letter-spacing: 1px"
            >
              basic info
            </div>
            <q-separator color="grey-2" class="q-my-sm" />
            <div class="q-pb-xs q-px-sm">
              <q-icon
                color="grey-5"
                size="1.2rem"
                name="mdi-gender-male-female-variant"
              />
              <span class="text-body2 q-pl-xs text-grey-9 text-capitalize"
                >{{ patient.Gender }}</span
              >
            </div>
            <div class="q-pb-xs q-px-sm">
              <q-icon size="1.2rem" color="grey-5" name="mdi-cellphone" />
              <span class="text-body2 q-pl-xs text-grey-9">{{ patient.PhoneNumber }}</span>
            </div>
            <div class="q-px-sm">
              <q-icon size="1.2rem" color="grey-5" name="mdi-web" />
              <span class="text-body2 q-pl-xs text-grey-9"> {{ patient.DomainName }}</span>
              <a
                :href="patient.Url"
                target="_blank"
                class="q-ml-sm q-px-xs text-grey-7 rounded-borders"
                style="text-decoration: none; border: 1px solid darkgrey"
                >visit site</a
              >
            </div>
          </div>
        </q-card>
      </div>
      <div class="q-ml-sm">
        <q-card class="q-py-sm shadow-0">
          <div>
            <div
              class="q-py-xs q-px-sm text-uppercase text-body2 text-weight-bold text-grey-7"
              style="letter-spacing: 1px"
            >
              addresses
            </div>
            <q-separator color="grey-2" class="q-my-sm" />
            <div class="q-pb-xs q-px-sm">
              <q-icon size="1.2rem" color="grey-5" name="mdi-desktop-classic" />
              <span class="text-body2 q-pl-xs text-grey-9"
                >******{{ patient.MacAddress.slice(-5) }}
                <q-tooltip content-class="no-border-radius"
                  >mac address</q-tooltip
                >
              </span>
            </div>
            <div class=" flex items-center q-px-sm">
              <q-icon size="1.2rem" color="grey-5" name="mdi-map-marker-multiple" />
              <div class="flex no-wrap q-pl-xs">
                <span class="text-body2 text-grey-9">LAT:{{ patient.Latitude}}</span>
                <span class="q-ml-sm text-body2 text-grey-9"
                  >LONG: {{ patient.Longitude }}
                </span>
              </div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="q-ml-sm">
        <q-card  class="q-pt-sm shadow-0">
          <div>
            <div
              class=" q-py-xs q-px-sm text-uppercase text-body2 text-weight-bold text-grey-7"
              style="letter-spacing: 1px"
            >
              payment details
            </div>
            <q-separator color="grey-2" class="q-my-sm" />
            <div class="q-px-sm q-pb-sm">
              <q-icon size="1.2rem" color="grey-5" name="mdi-credit-card" />
              <span class="text-body2 q-pl-xs text-grey-9">*********{{ patient.CreditCardNumber.slice(-4)}} </span>
            </div>
            <q-card flat class="text-body2 q-px-sm q-py-md bg-yellow-1">
              <div class="q-pb-sm flex items-center">
                <span
                  class="text-uppercase text-weight-bold text-grey-9 q-pa-xs"
                  >{{ patient.CreditCardType }}</span
                >
                was linked to your account
                <span

                  class="q-ml-auto q-ml-xs text-red-7 q-px-xs  cursor-pointer"
                  style="border: 1px solid red; padding: 0 2px 2px; border-radius: 3px "
                  >remove</span
                >
              </div>
              <span
                class="text-uppercase text-weight-bold text-grey-9 q-pa-xs cursor-pointer"
                >{{ patient.PaymentMethod }}</span
              >
              was set as prefered payment method
              <span
                class="q-ml-xs text-white q-px-xs bg-green-5"
                style="border: 1px solid mediumseagreen;padding: 0 2px 2px; border-radius: 3px"
                >change</span
              >
            </q-card>
          </div>
        </q-card>
      </div>
    </q-item>
    <div class=" q-mt-md">
      <q-separator color="green-2" />
      <q-card flat class="q-px-sm q-py-md bg-green-1 text-green-9 no-border-radius">
        <span class="text-body1 q-ml-sm text-weight-bold"
          >Last logged in {{ yearFormat }} - {{ timeFormat }}</span
        >
      </q-card>
    </div>
  </q-card>
</template>

<script>
  import {date } from 'quasar'
export default {
  //  validating props object attributes is a lot of
  //   work that won't be of any good use here
  name: "PatientInfo.vue",
  props: {
      patient: {
          type: Object,
          required: true
      }
  },
  computed: {
      yearFormat() {
          return date.formatDate(this.patient.LastLogin, 'Do MMMM YYYY')
      },
      timeFormat() {
          return date.formatDate(this.patient.LastLogin, 'hh:mma')
      }
  }
};
</script>

<style scoped></style>
