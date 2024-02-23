<script>
    import Card from "../../components/Card.svelte";
    
    let isSidebarOpen = false;
  
    function openNav() {
      isSidebarOpen = true;
    }
  
    function closeNav() {
      isSidebarOpen = false;
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
  
    .sidebar a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }
  
    .sidebar a:hover {
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
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
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
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </details></div>
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
  