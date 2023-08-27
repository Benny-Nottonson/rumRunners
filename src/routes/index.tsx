import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import YoutubeFeed from "../components/youtubeFeed/youtubeFeed";
import Venues from "../components/venues/venues";

const brickBackground =
  "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 200 200'><rect fill='#BC4A3C' width='200' height='200'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient></defs><g  fill='#a7372c' fill-opacity='1'><rect x='100'  width='100' height='100'/><rect y='100'  width='100' height='100'/></g><g fill-opacity='1'><polygon fill='url(#a)' points='100 30 0 0 200 0'/><polygon fill='url(#b)' points='100 100 0 130 0 100 200 100 200 130'/></g></svg>";

export default component$(() => {
  return (
    <>
      <div class="fixed top-0 left-0 w-screen h-screen pointer-events-none">
        <div
          class="absolute top-0 left-0 w-screen h-screen bg-repeat -z-50 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              brickBackground,
            )}")`,
          }}
        ></div>
      </div>
      <div class="flex justify-center flex-col align-middle items-center">
        <img
          src="./logo.svg"
          width={200}
          height={200}
          style={{
            filter: "invert(1)",
          }}
        />
        <h2 class="w-2/3 text-white text-center p-8">
          The Rum Runners are a trio of amplified acoustic guitars and vocals,
          whose complementary styles blend in cool renditions of the classic
          1970's rock tunes they grew up with. They met in 2022, performing
          regularly at open mic. at Bogart's Coffee in Seal Beach, where they
          appear in local venues performing covers from Skynyrd, Clapton, Allman
          and Doobie Bro's., Hendrix, Santana, Seger, Zeppelin, and more. The
          band is comprised of Tony Nottonson (Lead Vocals, Lead Guitar). Ed
          Solis (Vocals, Bass Guitar), and Ken Cinotto, (Vocals, Guitar,
          Harmonicas).
        </h2>
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
