<script>
  import { onMount } from 'svelte';
  import { dealerStore } from '../stores/dealerstore.js';
  import { goto } from '$app/navigation';

  export let id = id;
  let dealership_email;
  let dealer_id;
  let car;

  const handleadddeal = () => {
    goto(`/dealerhome/adddeal/${id}`);
  }
  const handleupdate = () => {
    goto(`/dealerhome/updatecar/${id}`);
  }

  onMount(async () => {
    const unsubscribe = dealerStore.subscribe(value => {
      dealership_email = value.dealership_email;
      dealer_id = value.id;
    });

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
      } else {
        console.error('Failed to fetch car details:', response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
    
    return unsubscribe;
  });

  
  async function addDeal() {
    try {
      const response = await fetch('http://localhost:8000/adddeals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          car_id: id,
          deal_info: {
            dealer_id: dealer_id,
            price: price,
            traveled: kmTraveled,
          },
        }),
      });

      if (response.ok) {
        console.log('Deal added successfully');
        closeModal();
      } else {
        console.error('Failed to add deal:', response.statusText);
      }
    } catch (error) {
      console.error('Error during deal addition:', error);
    }
  }
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img class="object-fill h-52 w-full" src={car?.car_info?.imageurl} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{car?.name}!</h2>
    
    <div class="card-actions justify-end">
      <button class="btn btn-primary" on:click={handleadddeal}>Add Deal</button>
      <button class="btn btn-primary" on:click={handleupdate}>View Details</button>
    </div>
  </div>

</div>
