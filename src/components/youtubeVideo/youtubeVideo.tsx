import { component$ } from "@builder.io/qwik";

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

export default component$(({ video }: { video: Video }) => {
  return (
    <div
      key={video.id.videoId}
      class="w-full md:w-1/2 lg:w-1/3 p-2 h-90 bg-gray-100/90 my-4 border-gray-900 border"
    >
      <div class="p-4">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          class="w-full h-auto"
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
        />
        <h2 class="text-lg font-bold mt-2">{video.snippet.title}</h2>
        <p class="text-sm text-gray-600 mt-1">{video.snippet.description}</p>
        <a
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Watch Video
        </a>
      </div>
    </div>
  );
});
