<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation';
  import { userStore, resetUserStore } from '../stores/userstore';

  let user_email = '';
  let password = '';
  let showPassword = false;
  const dispatch = createEventDispatcher();

  const handleforgot = () => {
    dispatch('forgot', 'userpasswordreset');
  };

  const handleclick = () => {
    dispatch('flip', 'usersignup');
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:8000/userlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_email,
          password,
        }),
      });

      if (response.ok) {
        const userInfo = {
          // You may customize this based on the actual user information you receive
          email: user_email,
          // Add other user details as needed
        };

        // Save user info to the session store
        
        const data = await response.json();
        console.log(data);
        userStore.set({
          user_email: data.user_email,
          id: data.user_id,
        });
        alert("login successfull");
        // Redirect to "/userhome" on successful login
        goto('/userhome');
      } else {
        console.error('Login failed:', response.statusText);
        // Handle errors, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle unexpected errors
    }
  };

  const togglePasswordVisibility = () => {
    showPassword = !showPassword;
  };

  onMount(() => {
    // Additional initialization code can be added here
  });
</script>

<style>
  /* Add your styles here */
  .password-toggle {
    cursor: pointer;
    user-select: none;
  }
</style>

<main class="flex flex-col items-center h-full gap-4 p-4">
  <h2 class="text-4xl text-white font-bold mb-4">User Login</h2>
  <form class="flex flex-col" on:submit|preventDefault={login}>
    <label for="user_email" class="text-white">Email:</label>
    <input type="email" placeholder="enter email" id="user_email" class="input bg-white input-bordered w-full max-w-xs" bind:value={user_email} required />

    <label for="password" class="text-white">Password:</label>
    <div class="flex bg-[#fafafe] justify-between items-center rounded-md relative">
      {#if !showPassword}
        <input class="input bg-[#fafafe] w-full outline-none" placeholder="enter password" type="password" id="password" bind:value={password} required />
      {:else}
        <input class="input bg-[#fafafe] w-full outline-none" placeholder="enter password" type="text" id="password" bind:value={password} required />
      {/if}
      <div
        role="button"
        tabindex="0"
        on:click={togglePasswordVisibility}
        on:keydown={(event) => {
          if (event.key === 'Enter' || event.key === 'Space') {
            togglePasswordVisibility();
          }
        }}
        class="mr-2 absolute right-0 cursor-pointer"
      >
        {showPassword ? '🙈' : '👁️'}
      </div>
    </div>
    <div class="flex justify-center">
      <button class="btn mt-2" type="submit">Login</button>
    </div>
  </form>
  <p class="select-none cursor-pointer text-black" on:click={handleforgot}>
    Forgot Password?
  </p>
  <p class="text-white">
    Don't have an account? <span on:click={handleclick} class="text-black font-bold cursor-pointer select-none">Sign Up</span>
  </p>
</main>
