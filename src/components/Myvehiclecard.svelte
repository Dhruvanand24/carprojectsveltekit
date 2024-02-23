<script>
  import { onMount } from "svelte";


  let vehicle;


  export let vehicle_id = "";


  let car;

  onMount(async () => {
    try {
      // Fetch data from "soldvehicles" using the vehicle_id
      const response = await fetch(
        "https://car-viewer-ochre.vercel.app/soldvehiclesdata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vehicle_id: vehicle_id,
          }),
        }
      );

      if (response.ok) {
        // Assign the fetched data to the local variable
        vehicle = await response.json();
        console.log("vehicle is:", vehicle);

        
        const carResponse = await fetch(
          "https://car-viewer-ochre.vercel.app/getcardetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              car_id: vehicle.car_id,
            }),
          }
        );

        if (carResponse.ok) {
          // Assign the fetched car data to the local variable
          car = await carResponse.json();
          console.log(car);
        } else {
          console.error("Failed to fetch car details:", carResponse.statusText);
        }
      } else {
        console.error("Failed to fetch vehicle details:", response.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  });
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img
      class="object-fill h-52 w-full"
      src={car?.car_info?.imageurl}
      alt="carimage"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{car?.name}!</h2>
    <p>price:{vehicle?.vehicle_info?.price}</p>
    <p>price:{vehicle?.vehicle_info?.traveled}</p>
    <div class="card-actions justify-end">
     
    </div>
  </div>
</div>
