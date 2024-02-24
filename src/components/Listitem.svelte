<script>
  import { onMount } from "svelte";
  export let name = name;
  let car;
  // onMount(async () => {
  //   try {
  //     const response = await fetch(
  //       "https://car-viewer-ochre.vercel.app/getcardetails",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           car_id: car_id,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       car = await response.json();
  //       console.log(car);
  //     } else {
  //       console.error("Failed to fetch dealership cars:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error during fetch:", error);
  //   }
  // });
</script>

<li><a>{name}</a></li>
