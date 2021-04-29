<template>
	<v-container>
		<FullCalendar :options="calendarOptions" />
	</v-container>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default {
	components: {
		FullCalendar,
	},
	data: () => ({
		calendarOptions: {
			plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
			initialView: "timeGridWeek",
			events: [
				{
					title: 'Computer Science',
					daysOfWeek: ["4"],
					startTime: "14:45",
					endTime: "18:45",
				},
				{
					daysOfWeek: ["3"], // these recurrent events move separately
					title: 'Chemistry',
					startTime: "11:00",
					endTime: "11:30",
				},
			],
			editable: false,
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
