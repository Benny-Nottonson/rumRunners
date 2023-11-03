import { component$, useTask$ } from "@builder.io/qwik";
import VenueItem from "../venueItem/venueItem";

const venueItems = [
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
  }
];

export default component$(() => {
  useTask$(() => {
    venueItems.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate < bDate ? -1 : 1;
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
