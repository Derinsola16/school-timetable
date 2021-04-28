<template>
  <v-container>
    <kalendar :configuration="calendar_settings" :events="events">
      <!-- CREATED CARD SLOT -->
      <div
        slot="created-card"
        slot-scope="{ event_information }"
        class="details-card"
      >
        <h4 class="appointment-title">{{ event_information.data.title }}</h4>
        <small class=" mb-5">
          {{ event_information.data.description }}
        </small>
        <v-spacer></v-spacer>
        <span class="time mt-5"
          >{{ event_information.start_time | formatToHours }} -
          {{ event_information.end_time | formatToHours }}</span
        >
      </div>
    </kalendar>
  </v-container>
</template>

<script>
import { Kalendar } from "kalendar-vue";

export default {
  components: {
    Kalendar,
  },
  data: () => ({
    events: [
      {
        from: "2021-04-26T09:00",
        to: "2021-04-26T11:00",
        data: {
          title: "App",
          description: "Steven Camilleri",
        },
      },
    ],
    calendar_settings: {
      style: "material_design",
      cell_height: 10,
      scrollToNow: true,
      start_day: new Date().toISOString(),
      read_only: true,
      day_starts_at: 0,
      day_ends_at: 24,
      overlap: true,
      past_event_creation: true,
      view_type: "week"
    },
  }),

  methods: {},
};
</script>

<style lang="scss">
$green: #00f0b5;
$red: #f61067;
.details-card {
	display: flex;
	flex-direction: column;
	width: 100px;
	height: 100%;
	button {
		margin: 0;
		border: none;
		color: #4c4b4b;
		position: absolute;
		padding-right: 0px;
		top: 5px;
		right: 5px;
		cursor: pointer;
		background: transparent;
		svg {
			width: 18px;
			height: 18px;
			fill: white;
		}
	}
	.remove {
		opacity: 0;
		transition: opacity 0.15s;
	}
	&:hover .remove {
		opacity: 1;
	}
}
.popup-event .buttons {
	display: flex;
	justify-content: space-between;
}
.popup-event .buttons button {
	border: none;
	color: #29771c;
	background-color: rgba($green, 0.04);
	padding: 5px 10px;
	&.cancel {
		background-color: rgba($red, 0.04);
		color: $red;
	}
}
</style>
