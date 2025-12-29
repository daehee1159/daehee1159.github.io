<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { type DetailBlock, results } from "~/data/portfolio"
import { snippets } from "~/data/portfolio.snippet"

import { problemDetailById } from "~/data/portfolio.details.problem"
import { productDetailById } from "~/data/portfolio.details.product"
import { systemDetailById } from "~/data/portfolio.details.system"
import { techDetailById } from "~/data/portfolio.details.tech"
import {aboutDetailById} from "~/data/portfolio.details.about";

const detailMapByTab: Partial<Record<string, Record<string, DetailBlock[]>>> = {
  problem: problemDetailById,
  product: productDetailById,
  system: systemDetailById,
  tech: techDetailById,
  about: aboutDetailById
}

const route = useRoute()
const id = computed(() => String(route.params.slug || ""))

const item = computed(() => {
  const d = results.find((x) => x.id === id.value)
  const s = snippets[id.value]
  if (!d || !s) return null

  const blocks = detailMapByTab[d.tab]?.[id.value] ?? []
  return { ...d, ...s, blocks }
})

/**
 * Tech 탭 전용: image + paragraph를 한 카드로 묶기
 */
function isImageBlock(b: DetailBlock | undefined): b is Extract<DetailBlock, { type: "image" }> {
  return !!b && b.type === "image"
}

function isParagraphBlock(
    b: DetailBlock | undefined,
): b is Extract<DetailBlock, { type: "paragraph" }> {
  return !!b && b.type === "paragraph"
}

const techCards = computed(() => {
  const v = item.value
  if (!v || v.tab !== "tech") return []

  const blocks = v.blocks ?? []

  const cards: Array<{
    img?: Extract<DetailBlock, { type: "image" }>
    text?: Extract<DetailBlock, { type: "paragraph" }>
  }> = []

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i] // DetailBlock (정상) + 혹시 모를 undefined 방어
    const next = blocks[i + 1]

    if (isImageBlock(b) && isParagraphBlock(next)) {
      cards.push({ img: b, text: next })
      i++
      continue
    }

    if (isImageBlock(b)) cards.push({ img: b })
    else if (isParagraphBlock(b)) cards.push({ text: b })
  }

  return cards
})

if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: "Not Found" })
}

useHead(() => ({
  title: `${item.value!.title} | Portfolio`,
  meta: [{ name: "description", content: item.value!.snippet }],
}))
</script>

<template>
  <div v-if="item" class="page">
    <header class="detailHeader">
      <NuxtLink to="/" class="back">← 검색 결과로</NuxtLink>
      <h1 class="h1">{{ item.title }}</h1>
      <p class="sub">{{ item.snippet }}</p>
    </header>

    <main class="content" :class="`tab-${item.tab}`">
      <!-- Tech 탭 전용 렌더링(카드형) -->
      <template v-if="item.tab === 'tech' && techCards.length">
        <section class="techGrid" aria-label="tech cards">
          <article v-for="(c, i) in techCards" :key="i" class="techCard">
            <figure v-if="c.img" class="techLogo">
              <img :src="c.img.src" :alt="c.img.alt ?? ''" />
            </figure>
            <p v-if="c.text" class="techText">
              {{ c.text.text }}
            </p>
          </article>
        </section>
      </template>

      <!-- Tech가 아닌 탭은 기존 blocks 렌더링 -->
      <template v-else-if="item.blocks?.length">
        <div v-for="(b, i) in item.blocks" :key="i">
          <p v-if="b.type === 'paragraph'" class="paragraph">
            {{ b.text }}
          </p>

          <ul v-else-if="b.type === 'bullets'">
            <li v-for="(t, j) in b.items" :key="j">{{ t }}</li>
          </ul>

          <figure v-else-if="b.type === 'image'">
            <img :src="b.src" :alt="b.alt ?? ''" />
            <figcaption v-if="b.caption">{{ b.caption }}</figcaption>
          </figure>

          <DetailGalleryCarousel
              v-else-if="b.type === 'gallery'"
              :images="b.images"
              aria-label="screenshots"
          />

          <pre v-else-if="b.type === 'code'"><code>{{ b.code }}</code></pre>

          <a v-else-if="b.type === 'link'" :href="b.href" target="_blank" rel="noreferrer">
            {{ b.label }}
          </a>
        </div>
      </template>

      <p v-else>{{ item.content }}</p>
    </main>
  </div>
  <div v-else>
    <h2>일시적인 오류입니다.</h2>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--bg);
  padding: 22px 18px;
}
.detailHeader,
.content {
  max-width: 980px;
  margin: 0 auto;
}
.back {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--accent);
  font-weight: 700;
}
.h1 {
  margin: 0 0 8px;
  letter-spacing: -0.3px;
}
.sub {
  margin: 0 0 18px;
  color: var(--muted);
}
.content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: 18px;
  box-shadow: var(--shadow);
  line-height: 1.8;
}

.content figure:not(.galleryFigure) img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid var(--border);
}
.content figure:not(.galleryFigure) figcaption {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.92rem;
}

figure img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid var(--border);
}
figcaption {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.92rem;
}

pre {
  overflow: auto;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
}
a {
  color: var(--accent);
  font-weight: 700;
}
.paragraph {
  white-space: pre-line;
}

.content.tab-tech {
  text-align: center;
}

.techGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.techCard {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  padding: 18px 14px;
}

.techLogo img {
  width: auto !important;
  max-width: 180px;
  max-height: 72px;
  height: auto !important;
  object-fit: contain;
  display: block;
  margin: 0 auto 10px;

  border: none !important;
  border-radius: 0 !important;
}

.techText {
  margin: 0;
  line-height: 1.7;
}

@media (min-width: 860px) {
  .techGrid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
