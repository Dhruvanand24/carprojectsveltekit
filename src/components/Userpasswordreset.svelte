<script>
  import { onMount, createEventDispatcher } from "svelte";

  let user_email = "";
  let password = "";
  let showPassword = false;
  const dispatch = createEventDispatcher();

  const login = async () => {
    try {
      const response = await fetch(
        "https://car-viewer-ochre.vercel.app/changeuserpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_email,
            password,
          }),
        }
      );

      if (response.ok) {
        console.log("password changed successfully");
        
      } else {
        console.error("Login failed:", response.statusText);
        
      }
    } catch (error) {
      console.error("Error during login:", error);
     
    }
  };

  const togglePasswordVisibility = () => {
    showPassword = !showPassword;
  };

  onMount(() => {
   
  });
</script>

<main class="flex flex-col items-center h-full gap-4 p-4 bg-red-400 rounded-xl">
  <h2 class="text-4xl text-white font-bold mb-4">User Password Reset</h2>
  <form class="flex flex-col" on:submit|preventDefault={login}>
    <label for="user_email" class="text-white">Email:</label>
    <input
      type="email"
      placeholder="enter email"
      id="user_email"
      class="input bg-white input-bordered w-full max-w-xs"
      bind:value={user_email}
      required
    />

    <label for="password" class="text-white">Password:</label>
    <div
      class="flex bg-[#fafafe] justify-between items-center rounded-md relative"
    >
      {#if !showPassword}
        <input
          class="input bg-[#fafafe] w-full outline-none"
          placeholder="enter password"
          type="password"
          id="password"
          bind:value={password}
          required
        />
      {:else}
        <input
          class="input bg-[#fafafe] w-full outline-none"
          placeholder="enter password"
          type="text"
          id="password"
          bind:value={password}
          required
        />
      {/if}
      <div
        role="button"
        tabindex="0"
        on:click={togglePasswordVisibility}
        on:keydown={(event) => {
          if (event.key === "Enter" || event.key === "Space") {
            togglePasswordVisibility();
          }
        }}
        class="mr-2 absolute right-0 cursor-pointer"
      >
        {showPassword ? "🙈" : "👁️"}
      </div>
    </div>
    <div class="flex justify-center">
      <button class="btn mt-2" type="submit">Change Password</button>
    </div>
  </form>
</main>

<style>
  
  .password-toggle {
    cursor: pointer;
    user-select: none;
  }
</style>
