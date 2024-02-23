<script>
    import Card from "../../components/Card.svelte";
    import { onMount } from 'svelte';
  import Listitem from "../../components/Listitem.svelte";
    
    let isSidebarOpen = false;
  let deals = [];
  let dealerships = [];
  let finaldata = [];
  let filtername = [];
  
    function openNav() {
      isSidebarOpen = true;
    }
  
    function closeNav() {
      isSidebarOpen = false;
    }
    onMount(async () => {
    try {
      const response = await fetch('http://localhost:8000/alldeals');

      if (response.ok) {
        deals = await response.json();
        finaldata = deals;
        filtername = [...new Set(deals.map(deal => deal.car_id))];
        
       
      } else {
        console.error('Failed to fetch dealership cars:', response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
    try {
      const response = await fetch('http://localhost:8000/alldealerships');
      
      if (response.ok) {
        dealerships = await response.json();
      } else {
        console.error('Failed to fetch dealership cars:', response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
    
  });
  const handledealershipselection = (selectedDeals) => {
    // Filter deals based on selectedDeals
    finaldata = deals.filter(deal => selectedDeals.includes(deal._id));
  }
  const handleall = () => {
    finaldata = deals;
  }
  </script>
  
  <style>
    .sidebar {
      height: 100%;
      width: 0;
      position: absolute;
      z-index: 50;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
    }
  
    .sidebar p {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }
  
    .sidebar p:hover {
      color: #f1f1f1;
    }
  
    .sidebar .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
  
    .openbtn {
      font-size: 20px;
      cursor: pointer;
      background-color: #111;
      color: white;
      padding: 10px 15px;
      border: none;
    }
  
    .openbtn:hover {
      background-color: #444;
    }
  
    .main {
      transition: margin-left 0.5s;
    }
  </style>
  
  <div class="h-screen w-full relative bg-gray-200">
    <div
      class="sidebar bg-gray-900 text-white absolute overflow-x-hidden transition-all duration-500"
      style="width: {isSidebarOpen ? '250px' : '0'}"
    >
      <a href="javascript:void(0)" class="closebtn" on:click={closeNav}>×</a>
      <p class="select-none cursor-pointer" on:click={handleall}>All Deals</p>
      {#each dealerships as dealership (dealership?._id)}
          <!-- Use the car data here to display the cards -->
          <p class="select-none cursor-pointer" on:click={()=>handledealershipselection(dealership.deals)}>{dealership?.dealership_name}</p>
        {/each}
     
    </div>
  
    <div class="flex flex-col ml-0 transition-all duration-500" style="margin-left: {isSidebarOpen ? '250px' : '0'}">
      <button class="openbtn w-20" on:click={openNav}>☰</button>
       <div class="flex flex-col flex-1 items-center p-4 bg-gray-200">
        <h1 class="text-black font-bold text-4xl">
            All Vehicles
        </h1>
        <div class="flex  w-full">
        <details class="dropdown">
            <summary class="m-1 btn">Filter by name</summary>
            <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              {#each filtername as filter (filter)}
              <Listitem car_id={filter}/>
              {/each}
            </ul>
          </details></div>
        <div class="flex flex-wrap gap-4 mt-2 justify-center">
            
          {#each finaldata as deal (deal._id)}
          <!-- Use the car data here to display the cards -->
          <Card id={deal.car_id} />
        {/each}
           
        </div>
       </div>
      
    </div>
  </div>
  