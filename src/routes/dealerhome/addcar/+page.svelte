<script>
    let name = '';
    let model = '';
    let imageurl = '';
    let type = '';
  
    const handleSubmit = () => {
      // Handle form submission logic here
      console.log('Name:', name);
      console.log('Model:', model);
      console.log('Image:', selectedImage);
    };
  
    
  </script>
  
  <style>
    /* Add your styles here */
    /* You can add custom styles or override Tailwind styles here */
  </style>
  
  <main class="min-h-screen flex items-center justify-center w-full p-8">
    <form class="max-w-md p-4  rounded-md shadow-md bg-gray-900">
      <label for="name" class="block mb-2 text-sm font-semibold text-gray-600">Name:</label>
      <input type="text" id="name" bind:value={name} class="w-full p-2 border rounded-md " required />
  
      <label for="model" class="block mt-4 mb-2 text-sm font-semibold text-gray-600">Model:</label>
      <input type="text" id="model" bind:value={model} class="w-full p-2 border rounded-md" required />

      <label for="type" class="block mt-4 mb-2 text-sm font-semibold text-gray-600">Type:</label>
      <input type="text" id="type" bind:value={type} class="w-full p-2 border rounded-md" required />
  
      <label for="image" class="block mt-4 mb-2 text-sm font-semibold text-gray-600">Image:</label>
      <input type="text" id="image" bind:value={imageurl} class="w-full p-2 mb-4 border rounded-md" required />
     
  
      <button type="submit" class=" bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
    </form>
  </main>
  