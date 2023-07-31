import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import env from "dotenv";

env.config();
const api_key = process.env.YOUTUBE_API_KEY;

const channel = "UCxR0eaKXmx2g-5LiiL3VTDQ";

const res = await fetch(
  `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel}&maxResults=6&order=date&type=video&key=${api_key}`,
);
const json = await res.json();

let final = readFileSync("./youtube.json", "utf8");

if (!json.error) {
  writeFileSync("./youtube.json", JSON.stringify(json));
  final = json;
}

writeFileSync(
  join(process.cwd(), "src/feed.ts"),
  `export const fullFeed: string = \`${JSON.stringify(final)}\`;`,
);

writeFileSync(join(process.cwd(), "src/feed.json"), JSON.stringify(final));
