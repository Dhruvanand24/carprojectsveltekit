import { writable } from "svelte/store";

// Initial values for the store
const initialUserData = {
  user_email: "",
  id: "",
};

// Create a writable store with the initial values
export const userStore = writable(initialUserData);

// Export a function to reset the store to its initial state
export const resetUserStore = () => userStore.set(initialUserData);
