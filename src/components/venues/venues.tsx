import { component$, useTask$ } from "@builder.io/qwik";
import VenueItem from "../venueItem/venueItem";

const venueItems = [
  {
    name: "Marina Wine Bar",
    adress: "194 N Marina Dr UNIT 101, Long Beach, CA 90803",
    date: "8.19.23",
    time: "6:00 PM",
  },
  {
    name: "Hennessey's",
    adress: "143 Main Street Seal Beach, CA 90740",
    date: "8.26.23",
    time: "8:00 PM",
  },
  {
    name: "Hennessey's",
    adress: "143 Main Street Seal Beach, CA 90740",
    date: "9.22.23",
    time: "8:00 PM",
  },
  {
    name: "Mother's Tavern",
    adress: "16701 CA-1, Sunset Beach, CA 90742",
    date: "10.13.23",
    time: "5:00 PM - 8:00 PM",
  },
  {
    name: "Hennessey's",
    adress: "143 Main Street Seal Beach, CA 90740",
    date: "10.14.23",
    time: "8:00 PM",
  },
  {
    name: "DiPiazza",
    adress: "5205 Pacific Coast Hwy, Long Beach, CA 90804",
    date: "9.21.23",
    time: "8:00 PM",
  },
  {
    name: "Marina Wine Bar",
    adress: "194 N Marina Dr UNIT 101, Long Beach, CA 90803",
    date: "9.23.23",
    time: "6:00 PM",
  },
  {
    name: "Marina Wine Bar",
    adress: "194 N Marina Dr UNIT 101, Long Beach, CA 90803",
    date: "10.21.23",
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
