<script setup lang="ts">
const query = defineModel<string>("query", { required: true })
const emit = defineEmits<{ (e: "search"): void; (e: "home"): void }>()
</script>

<template>
  <header class="topBar">
    <div class="topInner">
      <button class="brand" @click="emit('home')" title="Back to home">DaeHee</button>

      <div class="topSearch">
        <input v-model="query" class="topInput" @keydown.enter="emit('search')" aria-label="search" />
        <button class="topBtn" @click="emit('search')" aria-label="search button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" stroke-width="2"/>
            <path d="M16.5 16.5 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topBar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.topInner {
  max-width: 980px;
  margin: 0 auto;
  padding: 14px 18px;
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 14px;
  align-items: center;
}
.brand {
  border: none;
  background: transparent;
  font-weight: 800;
  letter-spacing: -0.4px;
  cursor: pointer;
  font-size: 16px;
  color: var(--text);
  text-align: left;
}
.topSearch {
  display: grid;
  grid-template-columns: 1fr 44px;
  gap: 10px;
  align-items: center;
}
.topInput {
  height: 44px;
  border-radius: 14px;
  border: 1px solid var(--border);
  padding: 0 14px;
  font-size: 15px;
  outline: none;
}
.topInput:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}
.topBtn {
  height: 44px;
  width: 44px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--surface);
  display: grid;
  place-items: center;
  cursor: pointer;
}
</style>
