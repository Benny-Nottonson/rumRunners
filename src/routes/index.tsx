import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import YoutubeFeed from "../components/youtubeFeed/youtubeFeed";
import Venues from "../components/venues/venues";

export default component$(() => {
  return (
    <>
      <div class="flex justify-center">
        <img src="./rumRunnersLogo.png" width={200} height={200} />
      </div>

      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col flex-1">
          <div class="flex justify-center">
            <Venues />
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <div class="flex justify-center">
            <YoutubeFeed />
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Rum Runners",
  meta: [
    {
      name: "description",
      content: "The official site for the Rum Runners band",
    },
  ],
};
