import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const channel = "UCxR0eaKXmx2g-5LiiL3VTDQ";

const res = await fetch(
  `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel}&maxResults=6&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
);
const json = await res.json();
let final = readFileSync("./youtube.json", "utf8");
if (!json.error) {
  writeFileSync("./youtube.json", JSON.stringify(json));
  final = json.items;
}

writeFileSync(
  join(process.cwd(), "src/feed.ts"),
  `export const fullFeed = ${JSON.stringify(final)}`
);

writeFileSync(join(process.cwd(), "src/feed.json"), JSON.stringify(final));
