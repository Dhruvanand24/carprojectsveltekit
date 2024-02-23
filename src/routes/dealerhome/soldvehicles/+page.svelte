<script>
  import Myvehiclecard from '../../../components/Myvehiclecard.svelte';
   import { onMount } from 'svelte';
   import {dealerStore}  from '../../../stores/dealerstore.js'; // Replace with the correct path to your dealer store
 

   
   let isSidebarOpen = false;
 let myvehicles = [];
 


 let id;
 
  
   onMount(async () => {1
     const unsubscribe = dealerStore.subscribe(value => {
     
     id = value.id;
   });
   console.log(id);
   try {
     const response = await fetch('https://car-viewer-ochre.vercel.app/mysoldvehicles',{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         dealership_id: id, // Replace with the actual dealership_id
       }),

     });

     if (response.ok) {
       myvehicles = await response.json();
    
      
       
      
     } else {
       console.error('Failed to fetch dealership cars:', response.statusText);
     }
   } catch (error) {
     console.error('Error during fetch:', error);
   }
   return unsubscribe;
   
 });
 
 
 </script>
 
 <style>
   
 </style>
 
 <div class="h-screen w-full relative bg-gray-200">
  
   <div class="flex flex-col ml-0 transition-all duration-500" style="margin-left: {isSidebarOpen ? '250px' : '0'}">
     
      <div class="flex flex-col flex-1 items-center p-4 bg-gray-200">
       <h1 class="text-black font-bold text-4xl">
           My Sold vehicles
       </h1>
       
       <div class="flex flex-wrap gap-4 mt-2 justify-center">
           
         {#each myvehicles as vehicle (vehicle)}
         <!-- Use the car data here to display the cards -->
         <Myvehiclecard vehicle_id={vehicle} />
       {/each}
          
       </div>
      </div>
     
   </div>
 </div>
 