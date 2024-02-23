<script>
  import {dealerStore}  from '../../../stores/dealerstore'; // Replace with the correct path to your dealer store
  import { onMount } from 'svelte';

  let name = '';
  let model = '';
  let imageurl = '';
  let type = '';

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
      const response = await fetch('https://car-viewer-ochre.vercel.app/addcars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          name,
          model,
          car_info: { imageurl, dealership_id: id }, // Modify this based on your backend structure
          dealership_id: id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        alert('Car added successfully');
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
    <label for="name" class="block mb-2 text-sm font-semibold text-gray-600">Name:</label>
<input type="text" id="name" bind:value={name} class="w-full p-2 border rounded-md " required />

<label for="model" class="block mt-4 mb-2 text-sm font-semibold text-gray-600">Model:</label>
<input type="text" id="model" bind:value={model} class="w-full p-2 border rounded-md" required />

<label for="type" class="block mt-4 mb-2 text-sm font-semibold text-gray-600">Type:</label>
<input type="text" id="type" bind:value={type} class="w-full p-2 border rounded-md" required />

<label for="image" class="block mt-4 mb-2 text-sm font-semibold text-gray-600">Image:</label>
<input type="text" id="image" bind:value={imageurl} class="w-full p-2 mb-4 border rounded-md" required />

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
  </form>
</main>

