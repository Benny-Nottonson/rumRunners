import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import YoutubeVideo from "../youtubeVideo/youtubeVideo";
import { fullFeed } from "~/feed";

type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export default component$(() => {
  const feed = useSignal<Video[]>([]);

  useTask$(async () => {
    feed.value = JSON.parse(fullFeed).items;
  });

  return (
    <div class="container mx-auto px-4">
      <h1 class="text-4xl text-center text-white font-bold mb-4">
        Latest Videos
      </h1>
      <hr class="border-gray-600" />
      <div class="flex flex-wrap -mx-2">
        {feed.value.map((video) => (
          <YoutubeVideo video={video} key={video.snippet.title} />
        ))}
      </div>
      <hr class="border-gray-600" />
    </div>
  );
});
