<script>
  import { onMount } from 'svelte';
  import {userStore}  from '../stores/userstore.js';
  let user_id;
  export let id = id;
  export let deal_info = deal_info;
  let car;
  

  const handlebuy = async() => {
    
    try {
      const response = await fetch('https://car-viewer-ochre.vercel.app/addsoldvehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          car_id: id,
          
          user_id: user_id,
          vehicle_info: deal_info,
          dealership_id: deal_info.dealership_id,
          car_info: car.car_info
          // Modify this based on your backend structure
          
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        alert('Car purchased successfully');
      } else {
        console.error('Failed to add car:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding car:', error);
    }
  }
  onMount(async () => {
    const unsubscribe = userStore.subscribe(value => {
      
      user_id = value.id;
    });
    console.log(id);
    try {
      const response = await fetch('https://car-viewer-ochre.vercel.app/getcardetails', {
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
    return unsubscribe;
   
  });
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img class="object-fill h-52 w-full" src={car?.car_info?.imageurl} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{car?.name}!</h2>
      <p>Price:{deal_info?.price}</p>
      <p>KM Traveled:{deal_info?.traveled}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={handlebuy}>Buy Now</button>
      </div>
    </div>
  </div>