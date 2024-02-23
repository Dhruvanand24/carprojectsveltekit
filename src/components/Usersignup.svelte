<script>
  import { onMount, createEventDispatcher } from "svelte";

  let user_email = "";
  let password = "";
  let user_location = "";
  let showPassword = false;
  const dispatch = createEventDispatcher();

  const handleSignup = async () => {
    alert("trying to create account");
    try {
      const response = await fetch(
        "https://car-viewer-ochre.vercel.app/usersignup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_email,
            password,
            user_location,
          }),
        }
      );

      if (response.ok) {
        console.log("Signup successful");
        alert("Signup successful");
       
      } else {
        console.error("Signup failed:", response.statusText);
        
      }
    } catch (error) {
      console.error("Error during signup:", error);
    
    }
  };

  const togglePasswordVisibility = () => {
    showPassword = !showPassword;
  };

  onMount(() => {
    
  });
</script>

<main
  class="flex flex-col items-center h-full gap-4 p-4 bg-[#e52165] rounded-xl"
>
  <h2 class="text-4xl text-white font-bold mb-4">User Signup</h2>
  <form class="flex flex-col" on:submit|preventDefault={handleSignup}>
    <label for="user_email" class="text-white">Email:</label>
    <input
      type="email"
      placeholder="enter email"
      id="user_email"
      class="input bg-white input-bordered w-full max-w-xs"
      bind:value={user_email}
      required
    />
    <label for="user_location" class="text-white">Location:</label>
    <input
      type="text"
      placeholder="enter location"
      id="user_location"
      class="input bg-white input-bordered w-full max-w-xs"
      bind:value={user_location}
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
      <button class="btn mt-2" type="submit">Sign Up</button>
    </div>
  </form>

  <p class="text-white">
    Already have an account? <span
      on:click={() => dispatch("flip", "user")}
      class="text-black font-bold cursor-pointer select-none">Log in</span
    >
  </p>
</main>

<style>

  .password-toggle {
    cursor: pointer;
    user-select: none;
  }
</style>
