import { component$, useTask$ } from "@builder.io/qwik";
import VenueItem from "../venueItem/venueItem";

const venueItems = [
  {
    name: "Marina Wine Bar",
    adress: "194 N Marina Dr UNIT 101, Long Beach, CA 90803",
    date: "12.16.23",
    time: "6:00 PM",
  },
  {
    name: "Bogart's Coffee",
    adress: "905 Ocean Ave., Seal Beach, CA",
    date: "10.28.23",
    time: "6:00 PM",
  },
  {
    name: "Marina Wine Bar",
    adress: "194 N Marina Dr UNIT 101, Long Beach, CA 90803",
    date: "11.18.23",
    time: "6:00 PM",
  },
  {
    name: "Marina Wine Bar",
    adress: "194 N Marina Dr UNIT 101, Long Beach, CA 90803",
    date: "12.16.23",
    time: "6:00 PM",
  },
  {
    name: "Bogart's Coffee",
    adress: "905 Ocean Ave., Seal Beach, CA",
    date: "01.06.24",
    time: "6:00 PM",
  },
  {
    name: "Marina Wine Bar",
    adress: "194 N Marina Dr UNIT 101, Long Beach, CA 90803",
    date: "01.28.24",
    time: "1:00 PM",
  },
  {
    name: "Pelican Isle",
    adress: "16400 Pacific Coast Hwy., Huntington Beach",
    date: "12.01.23",
    time: "7:00 PM",
  },
  {
    name: "Pelican Isle",
    adress: "16400 Pacific Coast Hwy., Huntington Beach",
    date: "12.29.23",
    time: "7:00 PM",
  },
  {
    name: "Mother’s Tavern",
    adress: "16701 Pacific Coast Hwy, Sunset Beach, CA 90742",
    date: "03.10.24",
    time: "5:00 PM",
  },
  {
    name: "Marina Park in Seal Beach",
    adress: "151 Marina Dr., Seal Beach",
    date: "04.06.24",
    time: "12:00 PM",
  },
];

export default component$(() => {
  useTask$(() => {
    venueItems.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate < bDate ? -1 : 1;
    });

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    venueItems.forEach((venueItem, index) => {
      const venueDate = new Date(venueItem.date);
      if (venueDate < currentDate) {
        venueItems.splice(index, 1);
      }
    });
  });

  return (
    <div class="container mx-auto px-4">
      <h1 class="text-4xl text-center text-white font-bold mb-4">Venues</h1>
      <hr class="border-gray-600" />
      <div class="flex flex-wrap justify-center">
        <ul class="grid gap-2">
          {venueItems.map((venueItem) => (
            <VenueItem {...venueItem} key={venueItem.date} />
          ))}
        </ul>
      </div>
      <hr class="border-gray-600 mb-16" />
    </div>
  );
});
