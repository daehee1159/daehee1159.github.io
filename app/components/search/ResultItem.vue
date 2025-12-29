<script setup lang="ts">
import type { Result } from "~/data/portfolio"
const props = defineProps<{ item: Result }>()
</script>

<template>
  <NuxtLink class="row" :to="`/detail/${props.item.id}`">
    <div class="left">
      <h4 class="title">{{ props.item.title }}</h4>
      <p class="snippet">{{ props.item.snippet }}</p>
    </div>

    <div class="right">
      <span class="more">자세히</span>
      <span class="arrow">›</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;

  padding: 12px 8px;
  border-radius: 12px;

  text-decoration: none;
  color: inherit;

  transition: background 140ms ease, transform 140ms ease;
}

.row:hover {
  background: var(--accent-soft);
}

.left {
  min-width: 0;
}

.title {
  margin: 0 0 6px;
  font-size: 15px;
  letter-spacing: -0.2px;
  line-height: 1.35;
}

.snippet {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;

  /* 한 줄/두 줄 제한 (선택) */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.right {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  color: var(--muted);
  font-size: 13px;
  white-space: nowrap;
}

.more {
  color: var(--accent);
  font-weight: 700;
}

.arrow {
  font-size: 18px;
  line-height: 1;
  color: var(--muted);
}
</style>
