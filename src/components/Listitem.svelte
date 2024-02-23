<script>
    import { onMount } from 'svelte';
    export let car_id = car_id;
    let car;
    onMount(async () => {
   
   
   try {
     const response = await fetch('http://localhost:8000/getcardetails', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         car_id: car_id, // Replace with the actual dealership_id
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

<li><a>{car?.name}</a></li>
