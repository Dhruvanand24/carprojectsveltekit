<script>
  import { goto } from "$app/navigation";
  const handlegoto = () => {
    goto("/userhome/myvehicles");
  };
</script>

<div class="navbar bg-white text-black">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Carviewer</a>
  </div>
  <div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
      <div tabIndex={0} role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
      >
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li on:click={handlegoto}><a>My vehicles</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
