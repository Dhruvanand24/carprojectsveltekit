<!-- YourMainFile.svelte -->

<script>
    import CollapsibleSidebar from '../../components/Sidebar.svelte'
    import Navbar from '../../components/Navbar.svelte'
  </script>
  
  <div class="flex flex-col w-full">
    <Navbar />
    <div class="flex w-full">
    
        <slot/></div>      
   
  </div>
  