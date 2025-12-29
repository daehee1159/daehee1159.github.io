<script setup lang="ts">
import { computed } from "vue"
import type { Result } from "~/data/portfolio"
import ResultItem from "~/components/search/ResultItem.vue";

const props = defineProps<{ items: Result[]; query: string }>()

const sectionLabels: Record<Result["tab"], string> = {
  problem: "문제 해결",
  product: "제품/서비스",
  system: "업무 시스템",
  tech: "기술 스택",
  about: "나에 대하여",
}
const sectionOrder: Result["tab"][] = [
  "problem",
  "product",
  "system",
  "tech",
  "about",
]

const grouped = computed(() => {
  const map = new Map<Result["tab"], Result[]>()
  for (const t of sectionOrder) map.set(t, []) // 순서 고정

  for (const item of props.items) {
    map.get(item.tab)?.push(item)
  }
  return map
})

// 섹션에 내용이 있는 것만 추려서 렌더링
const visibleSections = computed(() =>
    sectionOrder
        .map((tab) => ({ tab, label: sectionLabels[tab], items: grouped.value.get(tab) || [] }))
        .filter((s) => s.items.length > 0)
)
</script>

<template>
  <section class="resultList" aria-label="results">
    <p class="meta">“{{ query }}” 검색 결과 {{ items.length }}건</p>

    <div class="sections">
      <section v-for="s in visibleSections" :key="s.tab" class="sectionBlock">
        <header class="sectionHeader">
          <h3 class="sectionTitle">{{ s.label }}</h3>
          <span class="sectionCount">{{ s.items.length }}건</span>
        </header>

        <div class="list">
          <ResultItem v-for="item in s.items" :key="item.id" :item="item" />
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.meta {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 13px;
}

.sections {
  display: grid;
  gap: 18px;
}

.sectionBlock {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: 14px;
  box-shadow: 0 10px 30px rgba(17, 18, 20, 0.04);
}

.sectionHeader {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 2px 4px 12px;
  border-bottom: 1px solid rgba(229, 231, 235, 0.7);
  margin-bottom: 12px;
}

.sectionTitle {
  margin: 0;
  font-size: 15px;
  letter-spacing: -0.2px;
}

.sectionCount {
  color: var(--muted);
  font-size: 12px;
}

.list {
  display: grid;
}

/* 행 사이 구분선 */
.list :deep(a.row) {
  border-bottom: 1px solid rgba(229, 231, 235, 0.7);
}

.list :deep(a.row:last-child) {
  border-bottom: none;
}
</style>
