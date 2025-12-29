<script setup lang="ts">
import { computed, ref, watchEffect } from "vue"
import { useRoute, useRouter } from "vue-router"


import {results, type TabKey, tabs} from "~/data/portfolio"
import { snippets } from "~/data/portfolio.snippet"
import TabsBar from "~/components/search/TabsBar.vue";
import ResultList from "~/components/search/ResultList.vue";

const route = useRoute()
const router = useRouter()

const query = ref("")
const activeTab = ref<TabKey>("all")

type ResultView = (typeof results)[number] & {
  title: string
  snippet: string
}

const resultsView = computed<ResultView[]>(() => {
  return results.map((r) => {
    const s = snippets[r.id]
    if (!s) {
      // 개발 중 누락 바로 잡기
      throw new Error(`[portfolio] snippet missing: ${r.id}`)
    }
    return { ...r, title: s.title, snippet: s.snippet }
  })
})

/* URL → 상태 동기화 */
watchEffect(() => {
  query.value = (route.query.q as string) ?? ""
  activeTab.value = (route.query.tab as TabKey) ?? "all"
})

const normalizedQuery = computed(() => query.value.trim().toLowerCase())

const filtered = computed(() => {
  // 1) 탭 필터
  const base =
      activeTab.value === "all"
          ? resultsView.value
          : resultsView.value.filter((r) => r.tab === activeTab.value)

  // 2) 검색어 필터
  const q = normalizedQuery.value
  if (!q) return base

  return base.filter((r) => {
    const hay = [
      r.title,
      r.snippet,
      r.content,
      ...(r.keywords ?? []),
      ...(r.bullets ?? []),
    ]
        .join(" ")
        .toLowerCase()
    return hay.includes(q)
  })
})

function search() {
  const q = query.value.trim()
  if (!q) return

  router.replace({
    path: "/search",
    query: { q, tab: activeTab.value },
  })
}

function resetToHome() {
  router.push("/")
}

function setTab(tab: TabKey) {
  activeTab.value = tab
  router.replace({
    path: "/search",
    query: { q: query.value.trim(), tab },
  })
}
</script>

<template>
  <div class="searchPage">
    <SearchHeader
        v-model:query="query"
        @search="search"
        @home="resetToHome"
    />

    <main class="resultWrap">
      <TabsBar
          v-model:activeTab="activeTab"
          :tabs="tabs"
          @change="setTab"
      />

      <ResultList
          :items="filtered"
          :query="query"
      />
    </main>
  </div>
</template>


<style scoped>
.searchPage {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}

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

.resultWrap {
  max-width: 980px;
  margin: 0 auto;
  padding: 18px;
}

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
  border-color: rgba(0, 0, 0, 0.15);
}

.tab.active {
  border-color: var(--accent);
  background: var(--accent-soft);
}

.meta {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 13px;
}

.resultList {
  display: grid;
  gap: 14px;
}

.resultItem {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 16px;
  box-shadow: 0 10px 30px rgba(17, 18, 20, 0.04);
}

.rTitle {
  margin: 0 0 6px;
  font-size: 16px;
  letter-spacing: -0.2px;
}

.rSnippet {
  margin: 0 0 10px;
  color: var(--muted);
  line-height: 1.55;
  font-size: 14px;
}

.actions {
  display: flex;
  justify-content: flex-start;
}

.detailLink {
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}
</style>
