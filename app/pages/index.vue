<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue"
import { useRouter } from "#vue-router"

const router = useRouter()
const query = ref("")

const inputEl = ref<HTMLInputElement | null>(null)
const showTooltip = ref(false)

let cancelled = false

function goSearch() {
  showTooltip.value = false
  const q = query.value.trim()
  if (!q) return
  router.push({ path: "/search", query: { q, tab: "all" } })
}

function stopAuto() {
  cancelled = true
  showTooltip.value = false
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

onMounted(async () => {
  const el = inputEl.value
  if (!el) return

  el.focus({ preventScroll: true })

  el.addEventListener("keydown", stopAuto)
  el.addEventListener("mousedown", stopAuto)
  el.addEventListener("touchstart", stopAuto)

  await sleep(1500)
  if (cancelled || query.value.trim()) return

  const text = "개발자 최대희 포트폴리오"
  for (const ch of text) {
    if (cancelled) return
    if (document.activeElement !== el) el.focus({ preventScroll: true })
    query.value += ch
    await sleep(140)
  }

  showTooltip.value = true
})

onBeforeUnmount(() => {
  cancelled = true
})
</script>


<template>
  <div class="container">
    <main class="card">
      <h1 class="title">Search</h1>
      <p class="subtitle">검색으로 저를 확인하실 수 있습니다.</p>

      <div class="searchRow">
        <input
            ref="inputEl"
            v-model="query"
            class="searchInput"
            placeholder="예) 개발자 최대희 포트폴리오"
            @keydown.enter="goSearch"
        />
        <div class="iconWrap">
          <button
              class="iconBtn"
              @click="goSearch"
              @mouseenter="stopAuto"
              aria-label="search button"
              title="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                  d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  stroke-width="2"
              />
              <path
                  d="M16.5 16.5 21 21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
              />
            </svg>
          </button>

          <!-- 툴팁 -->
          <div v-if="showTooltip" class="searchTooltip">
            버튼을 클릭해 주세요!
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
.iconWrap {
  position: relative;
}
.searchTooltip {
  position: absolute;
  right: 0;
  bottom: calc(100% + 8px);
  background: rgba(20, 20, 20, 0.9);
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  white-space: nowrap;
  pointer-events: none;
  animation: tooltipFade 0.25s ease forwards;
}

@keyframes tooltipFade {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
