<script>
    import Card from "../../components/Carddealer.svelte";
    import {goto} from '$app/navigation';
    const handlegoto = ()=>{
        goto('/dealerhome/addcar')
    }
    const handlesold = ()=>{
        goto('/dealerhome/soldvehicles')
    }
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
            All Vehicles
        </h1>
        <div class="flex w-full gap-4">
            <button class="btn" on:click={handlegoto}>Add Car</button>
            <button class="btn" on:click={handlesold}>Sold Vehicles</button>
        </div>
        
      
        <div class="flex flex-wrap gap-4 mt-2 justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
       </div>
      
    </div>
  </div>
  