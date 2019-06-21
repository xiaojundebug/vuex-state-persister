const Key = '__VUEX_STATE__'

export default function(store) {
  if (localStorage[key]) store.replaceState(JSON.parse(localStorage[Key]));
  store.subscribe(function(mutation, state) {
    localStorage.setItem(Key, JSON.stringify(state));
  });
}
