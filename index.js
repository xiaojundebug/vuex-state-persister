export default function(store) {
  if (localStorage.vuexState) store.replaceState(JSON.parse(localStorage.vuexState));
  store.subscribe(function(mutation, state) {
    localStorage.setItem('vuexState', JSON.stringify(state));
  });
}
