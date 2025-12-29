<script setup lang="ts">
import type { TabKey } from "~/data/portfolio"

defineProps<{
  tabs: { key: TabKey; label: string }[]
}>()

const model = defineModel<TabKey>("activeTab", { required: true })
</script>

<template>
  <nav class="tabs" aria-label="tabs">
    <button
        v-for="t in tabs"
        :key="t.key"
        class="tab"
        :class="{ active: model === t.key }"
        @click="model = t.key"
    >
      {{ t.label }}
    </button>
  </nav>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 8px 0 16px;
}
.tab {
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 9px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 14px;
  color: var(--text);
  transition: transform 140ms ease, border-color 140ms ease;
}
.tab:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--accent) 35%, transparent);
}
.tab.active {
  border-color: var(--accent);
  background: var(--accent-soft);
}
</style>
