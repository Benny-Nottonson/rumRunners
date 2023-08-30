import { component$ } from "@builder.io/qwik";

interface Props {
  name: string;
  adress: string;
  date: string;
  time: string;
}

export default component$(({ name, adress, date, time }: Props) => {
  const dayOfWeekString = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <li class="p-4 rounded-md">
      <h2 class="text-lg font-bold mt-2 text-gray-100 text-center">
        {name} - {dayOfWeekString}, {date} • {time}
      </h2>
      <p class="text-sm text-gray-300 mt-1 text-center">{adress}</p>
    </li>
  );
});
