import { component$ } from "@builder.io/qwik";
import VenueItem from "../venueItem/venueItem";

export default component$(() => {
  return (
    <div class="container mx-auto px-4">
      <h1 class="text-4xl text-center text-white font-bold mb-4">Venues</h1>
      <hr class="border-gray-600" />
      <div class="flex flex-wrap justify-center">
        <ul class="grid gap-2">
          <VenueItem date="8.13.23" time="3:00 PM - 6:00 PM" name="Hennessey's" adress="143 Main Street Seal Beach, CA 90740"/>
          <VenueItem date="8.26.23" time="8:00 PM - 11:00 PM" name="Hennessey's" adress="143 Main Street Seal Beach, CA 90740"/>
          <VenueItem date="10.13.23" time="5:00 PM - 8:00 PM" name="Mother's Tavern" adress="16701 CA-1, Sunset Beach, CA 90742"/>
        </ul>
      </div>
      <hr class="border-gray-600 mb-16" />
    </div>
  );
});
