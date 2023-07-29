import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import YoutubeVideo from "../youtubeVideo/youtubeVideo";
import fs from 'fs';

const channel = "UCxR0eaKXmx2g-5LiiL3VTDQ";

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
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel}&maxResults=6&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
    );
    const json = await res.json();
    if (json.error) {
      const data = fs.readFileSync('./youtube.json', 'utf8');
      feed.value = JSON.parse(data).items;
    } else {
      fs.writeFileSync('./youtube.json', JSON.stringify(json));
      feed.value = json.items;
    }
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
