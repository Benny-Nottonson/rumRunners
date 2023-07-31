import { component$ } from "@builder.io/qwik";

interface Props {
    name: string;
    adress: string;
    date: string;
    time: string;
}

export default component$(({name, adress, date, time}: Props) => {
    return (
        <li class="p-4 rounded-md">
            <h2 class="text-lg font-bold mt-2 text-gray-100 text-center">
                {name} - {date} • {time}
            </h2>
            <p class="text-sm text-gray-300 mt-1 text-center">
                {adress}
            </p>
          </li>
    )
});