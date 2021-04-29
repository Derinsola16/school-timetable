<template>
  <!-- <vue-cal
    :selected-date="new Date()"
    events-count-on-year-view
    show-all-day-events
    :events="events"
  >
  </vue-cal> -->
  <vue-cal 
         :selected-date="new Date()"
         :time-from="8 * 60"
         :time-to="23 * 60"
         :disable-views="['years', 'year']"
         
         resize-x
         :events="events">
</vue-cal>
</template>
<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: { VueCal },
  data: () => ({
      events: [
    {
      start: '2021-04-20 10:00',
      end: '2021-04-29 12:37',
      title: 'Running Marathon',
      content: '<i class="v-icon material-icons">directions_run</i>',
      class: 'sport'
    },
    {
      start: '2021-04-25 10:00',
      end: '2021-04-29 10:25',
      title: 'Drink water!',
      content: '<i class="v-icon material-icons">local_drink</i>',
      class: 'health'
    },
    {
      start: '2021-04-21 19:00',
      end: '2021-04-23 11:30',
      title: 'Trip to India',
      content: '<i class="v-icon material-icons">flight</i>',
      class: 'leisure'
    }
  ]
    // events: [
    //   {
    //     start: "09:00",
    //     end: "13:00",
    //     title: "Nightclub",
    //     content: '<i class="v-icon material-icons">local_drink</i>',
    //     class: "leisure",
    //     repeat: {
    //       weekdays: [5], // You can repeat on multiple days of the week.   editable-events  :time-from="8 * 60" :time-to="23 * 60"   hide-weekends
    //       until: "2021-11-30", // Don't need a time here as it will take the same as original event date.
    //     },
    //   },
      // {
      //   start: "2021-04-23", // You can put time or not, will be discarded if all-day.
      //   end: "2021-04-23",
      //   title: "Pizza day!",
      //   content: '<i class="v-icon material-icons">local_pizza</i>',
      //   class: "pink-event",
      //   allDay: true,
      //   repeat: {
      //     weekdays: [5], // If original event day is not in these days, original event will still show up.
      //     // Without `until` property, it will go on forever.
      //   },
      // },
      // {
      //   start: "2021-04-22 10:00",
      //   end: "2021-04-22 12:00",
      //   title: "Piano lesson",
      //   content: '<i class="v-icon material-icons">queue_music</i>',
      //   class: "leisure",
      //   repeat: {
      //     every: "week",
      //     until: new Date(), // You can also use a Javascript Date.
      //   },
      // },
      // {
      //   start: "2021-04-20 18:00",
      //   end: "2021-04-29 20:00",
      //   title: "Tennis tournament",
      //   content: '<i class="v-icon material-icons">sports_tennis</i>',
      //   class: "sport",
      //   repeat: {
      //     every: 14,
      //     until: "2019-01-20",
      //   },
      // },
      // {
      //   start: "2021-04-01",
      //   end: "2021-04-01",
      //   title: "Crêpes day",
      //   content: '<i class="v-icon material-icons">restaurant</i>',
      //   class: "yellow-event",
      //   allDay: true,
      //   repeat: {
      //     every: "month",
      //     until: "2019-12-26",
      //   },
      // },
      // {
      //   start: "2015-06-15",
      //   end: "2015-06-15",
      //   title: "My Birthday",
      //   content: '<i class="v-icon material-icons">cake</i><br>I am 4.',
      //   class: "blue-event",
      //   allDay: true,
      //   repeat: {
      //     every: "year",
      //   },
      // },
    // ],
  }),
};
</script>
