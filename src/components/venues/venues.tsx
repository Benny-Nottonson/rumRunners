import { component$, useTask$ } from "@builder.io/qwik";
import VenueItem from "../venueItem/venueItem";

const venueItems = [
  {
    name: "Hennessey's",
    adress: "143 Main Street Seal Beach, CA 90740",
    date: "8.13.23",
    time: "3:00 PM - 6:00 PM",
  },
  {
    name: "Hennessey's",
    adress: "143 Main Street Seal Beach, CA 90740",
    date: "8.26.23",
    time: "8:00 PM - 11:00 PM",
  },
  {
    name: "Mother's Tavern",
    adress: "16701 CA-1, Sunset Beach, CA 90742",
    date: "10.13.23",
    time: "5:00 PM - 8:00 PM",
  },
]

export default component$(() => {
  useTask$(() => {
    venueItems.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate < bDate ? -1 : 1;
    });

    const now = new Date();
    now.setDate(now.getDate() + 1);
    venueItems.forEach((venueItem, index) => {
      if(new Date(venueItem.date) < now) {
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
