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
import customAxios from "../../helpers/axios";

export default {
  components: {
    FullCalendar,
  },
  data: () => ({
    token: sessionStorage.getItem("token"),
    calendarOptions: {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      initialView: "timeGridWeek",
      events: [],
      editable: false,
    },
  }),
  async created() {
    await customAxios
      .get("/admin/courses", {
        headers: {
          AUTHORIZATION: "Bearer " + this.token,
        },
      })
      .then((response) => {
        
        for(const x of response.data.data){
          const data = {
          title: x.name,
          startTime: x.start,
          endTime: x.end,
          daysOfWeek: []
        }
        const days = {
          sunday: "0",
          monday: "1",
          tuesday: "2",
          wednesday: "3",
          thursday: "4",
          friday: "5",
          saturday: "6"
        }
        data.daysOfWeek.push(days[x.day])
        this.calendarOptions.events.push(data)
        console.log(data);
        }
        
        console.log(response.data.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
      console.log(this.calendarOptions.events)
  },
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
