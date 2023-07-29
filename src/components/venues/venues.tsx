import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="container mx-auto px-4">
      <h1 class="text-4xl text-center text-white font-bold mb-4">Venues</h1>
      <hr class="border-gray-600" />
      <div class="flex flex-wrap justify-center">
        <ul class="grid gap-2">
          <li class="p-4 rounded-md">
            <h2 class="text-lg font-bold mt-2 text-gray-100 text-center">
              Rum Runners
            </h2>
            <p class="text-sm text-gray-300 mt-1 text-center">
              1234 Main St, Anytown, USA
            </p>
          </li>
          <li class="p-4 rounded-md">
            <h2 class="text-lg font-bold mt-2 text-gray-100 text-center">
              Rum Runners
            </h2>
            <p class="text-sm text-gray-300 mt-1 text-center">
              1234 Main St, Anytown, USA
            </p>
          </li>
          <li class="p-4 rounded-md">
            <h2 class="text-lg font-bold mt-2 text-gray-100 text-center">
              Rum Runners
            </h2>
            <p class="text-sm text-gray-300 mt-1 text-center">
              1234 Main St, Anytown, USA
            </p>
          </li>
        </ul>
      </div>
      <hr class="border-gray-600 mb-16" />
    </div>
  );
});
