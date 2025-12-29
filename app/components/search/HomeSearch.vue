<script setup lang="ts">
const query = defineModel<string>("query", { required: true })
const emit = defineEmits<{ (e: "search"): void }>()
</script>

<template>
  <div class="container">
    <main class="card">
      <h1 class="title">Search</h1>
      <p class="subtitle">검색으로 저를 확인하실 수 있습니다.</p>

      <div class="searchRow">
        <input
            v-model="query"
            class="searchInput"
            placeholder="예) 최대희"
            @keydown.enter="emit('search')"
        />
        <button class="iconBtn" @click="emit('search')" aria-label="search button" title="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" stroke-width="2"/>
            <path d="M16.5 16.5 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </main>
  </div>
</template>
