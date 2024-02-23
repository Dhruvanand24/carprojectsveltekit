<script>
    import Carddealer from '../../../components/Carddealer.svelte';
    import {goto} from '$app/navigation';
  
    let isSidebarOpen = false;
  
    function openNav() {
      isSidebarOpen = true;
    }
  
    function closeNav() {
      isSidebarOpen = false;
    }
  </script>
  
  <style>
   
  </style>
  
  <div class="h-screen w-full relative bg-gray-200">

  
    <div class="flex flex-col ml-0 transition-all duration-500" style="margin-left: {isSidebarOpen ? '250px' : '0'}">
      
       <div class="flex flex-col flex-1 items-center p-4 bg-gray-200">
        <h1 class="text-black font-bold text-4xl">
            Sold Vehicles
        </h1>
       
        
      
        <div class="flex flex-wrap gap-4 mt-2 justify-center">
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
            <Carddealer />
        </div>
       </div>
      
    </div>
  </div>
  