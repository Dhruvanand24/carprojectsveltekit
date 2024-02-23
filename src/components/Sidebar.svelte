

<script>
  let isSidebarOpen = true;

  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
  };
</script>

<div class="flex flex-col bg-yellow-200">
  <div class="flex">
    <div class="sidebar-button p-2" on:click={toggleSidebar}>
      ☰ 
    </div>
    <div class={`sidebar ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
   
    </div>
    <div class="flex flex-1">
      <slot />
    </div>
  </div>
</div>

<style>
 
  .sidebar {
    height: 100vh;
    width: 20px;
    background-color: #fe0000;
    color: white;
    transition: transform 0.3s ease-in-out;
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .sidebar-closed {
    transform: translateX(-120%);
  }

  .sidebar-button {
    cursor: pointer;
  }
</style>
