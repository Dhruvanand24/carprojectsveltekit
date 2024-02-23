import { writable } from 'svelte/store';

// Initial values for the store
const initialDealerData = {
  dealership_email: '',
  id: '',
};

// Create a writable store with the initial values
export const dealerStore = writable(initialDealerData);

// Export a function to reset the store to its initial state
export const resetDealerStore = () => dealerStore.set(initialDealerData);