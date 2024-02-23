<script>
  import {dealerStore}  from '../../../../stores/dealerstore.js'; // Replace with the correct path to your dealer store
  import { onMount } from 'svelte';
  import {page} from '$app/stores'
  const car_id = $page.params.carid 

  
  let price = ''
  let traveled = '';
  let dealership_email;
  let id;


  onMount(() => {
    const unsubscribe = dealerStore.subscribe(value => {
      dealership_email = value.dealership_email;
      id = value.id;
    });
    console.log(id);
    return unsubscribe;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/adddeals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          car_id: car_id,
          
        
          deal_info: { price, traveled, dealership_id: id  },
          dealership_id: id
          // Modify this based on your backend structure
          
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        alert('deal added successfully');
      } else {
        console.error('Failed to add car:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };
</script>

<main class="min-h-screen flex items-center justify-center w-full p-8">
  <form on:submit={handleSubmit} class="max-w-md p-4 rounded-md shadow-md bg-gray-900">
    <label for="Price" class="block mb-2 text-sm font-semibold text-gray-600">Price:</label>
<input type="number" id="name" bind:value={price} class="w-full p-2 border rounded-md " required />

<label for="travelled" class="block mt-4 mb-2 text-sm font-semibold text-gray-600">Travelled:</label>
<input type="number" id="model" bind:value={traveled} class="w-full p-2 border rounded-md" required />




    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Add Deal</button>
  </form>
</main>

