<script>
  import { onMount } from 'svelte';
  export let id = id;
  let car;
  onMount(async () => {
   
    console.log(id);
    try {
      const response = await fetch('http://localhost:8000/getcardetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          car_id: id, // Replace with the actual dealership_id
        }),
      });

      if (response.ok) {
        car = await response.json();
        console.log(car);
      } else {
        console.error('Failed to fetch dealership cars:', response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
   
  });
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img class="object-fill h-52 w-full" src={car?.car_info?.imageurl} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{car?.name}!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>