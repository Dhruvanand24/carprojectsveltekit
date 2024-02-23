<script>
  import UserLoginForm from '../components/Userloginform.svelte';
  import DealerLoginForm from '../components/Dealerloginform.svelte';
  import Usersignup from '../components/Usersignup.svelte';
  import Dealersignup from '../components/Dealersignup.svelte';
  import Userpasswordreset from '../components/Userpasswordreset.svelte';
  import Dealerpasswordreset from '../components/Dealerpasswordreset.svelte';

  let selectedOption = 'user'; // Default to user login
  const handleflip = (event)=> {
    selectedOption = event.detail
  }

</script>

<main>
  <div class="flex flex-col w-full h-screen justify-center items-center bg-[#9f9f9e]">
    <div class="flex flex-col p-8 h-[80vh] shadow-md w-[80vw] lg:w-[60vw] bg-white rounded-xl">
      <div class="flex mb-2">
        <div
          class="p-2 w-1/4 bg-[#e52165] select-none cursor-pointer transition-all duration-200 ease-linear z-10 rounded-lg hover:p-4"
          on:click={() => (selectedOption = 'user'||'usersignup')}
        >
          <h1 class="text-white font-bold ml-4 text-xl ">
            User
          </h1>
        </div>
        <div
          class="p-2 w-1/4 bg-[#0d1137] rounded-lg ml-1 select-none cursor-pointer transition-all duration-200 ease-linear z-10 rounded-lg hover:p-4"
          on:click={() => (selectedOption = 'dealer'|| 'dealersignup')}
        >
          <h1 class="font-bold text-xl ml-4 text-white">
            Dealer
          </h1>
        </div>
      </div>
      <div class={`flex transition-all duration-300 ease-linear flex-col h-full ${selectedOption === 'user' ? 'bg-[#e52165]' : 'bg-[#0d1137]'} rounded-xl`}>
        {#if selectedOption === 'user'}
          <UserLoginForm on:flip={handleflip} on:forgot={handleflip}/>
        {:else if selectedOption === 'dealer' }
          <DealerLoginForm on:flip={handleflip} on:forgot={handleflip}/>
        {:else if selectedOption === 'dealersignup'}
         <Dealersignup on:flip={handleflip} />
        {:else if selectedOption === 'usersignup'}
         <Usersignup on:flip={handleflip} />
         {:else if selectedOption === 'userpasswordreset'}
         <Userpasswordreset />
         {:else if selectedOption === 'dealerpasswordreset'}
         <Dealerpasswordreset />
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
  /* Add your shared styles here */
  .text-red-400 {
    color: #ff4444; /* Red color */
  }
</style>
