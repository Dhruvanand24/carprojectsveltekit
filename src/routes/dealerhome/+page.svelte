<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Carddealer from "../../components/Carddealer.svelte";
  import { dealerStore } from "../../stores/dealerstore";
  let dealership_email;
  let id;
  let cars = [];

  onMount(async () => {
    const unsubscribe = dealerStore.subscribe((value) => {
      dealership_email = value.dealership_email;
      id = value.id;
    });
    console.log(id);
    try {
      const response = await fetch(
        "https://car-viewer-ochre.vercel.app/dealershipcars",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dealership_id: id,
          }),
        }
      );

      if (response.ok) {
        cars = await response.json();
      } else {
        console.error("Failed to fetch dealership cars:", response.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
    return unsubscribe;
  });

  const handlegoto = () => {
    goto("/dealerhome/addcar");
  };

  const handlesold = () => {
    goto("/dealerhome/soldvehicles");
  };
</script>

<div class="h-screen w-full relative bg-gray-200">
  <div class="flex flex-col ml-0 transition-all duration-500">
    <div class="flex flex-col flex-1 items-center p-4 bg-gray-200">
      <h1 class="text-black font-bold text-4xl">All Vehicles</h1>
      <div class="flex w-full gap-4">
        <button class="btn" on:click={handlegoto}>Add Car</button>
        <button class="btn" on:click={handlesold}>Sold Vehicles</button>
      </div>

      <div class="flex flex-wrap gap-4 mt-2 justify-center">
        {#each cars as car (car._id)}
          
          <Carddealer id={car._id} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  
</style>
