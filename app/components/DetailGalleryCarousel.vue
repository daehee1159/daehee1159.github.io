<script setup lang="ts">
import { computed, onMounted, ref } from "vue"

type GalleryImage = { src: string; alt?: string }

const props = defineProps<{
  images: GalleryImage[]
  ariaLabel?: string
}>()

const trackEl = ref<HTMLElement | null>(null)
const canScroll = computed(() => (props.images?.length ?? 0) > 1)

function getStep() {
  const el = trackEl.value
  if (!el) return 0

  const step = Math.floor(el.clientWidth * 0.85)
  return step > 0 ? step : 300
}

function scrollBySlides(direction: 1 | -1) {
  const el = trackEl.value
  if (!el) return
  el.scrollBy({ left: getStep() * direction, behavior: "smooth" })
}

function onKeydown(e: KeyboardEvent) {
  if (!canScroll.value) return
  if (e.key === "ArrowRight") scrollBySlides(1)
  if (e.key === "ArrowLeft") scrollBySlides(-1)
}

onMounted(() => {
  trackEl.value?.setAttribute("tabindex", "0")
})
</script>

<template>
  <section class="gallery" :aria-label="ariaLabel ?? 'image gallery'">
    <header v-if="canScroll" class="controls">
      <button type="button" class="nav" @click="scrollBySlides(-1)" aria-label="previous">
        ‹
      </button>
      <button type="button" class="nav" @click="scrollBySlides(1)" aria-label="next">
        ›
      </button>
    </header>

    <div
        ref="trackEl"
        class="track"
        role="list"
        @keydown="onKeydown"
        :aria-label="ariaLabel ?? 'image carousel'"
    >
      <figure
          v-for="(img, i) in images"
          :key="img.src + '-' + i"
          class="slide galleryFigure"
          role="listitem"
      >
        <img :src="img.src" :alt="img.alt ?? ''" loading="lazy" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  margin: 12px 0 18px;
  position: relative;
}

.controls {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 8px;
}

.nav {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  border-radius: 999px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 18px;
  line-height: 36px;
}

.track {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  padding: 2px 2px 5px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  outline: none;
  touch-action: pan-x;
}

.track:focus {
  box-shadow: 0 0 0 2px rgba(100, 116, 139, 0.25);
  border-radius: 12px;
}

.slide {
  flex: 0 0 clamp(250px, 60vw, 100px);
  scroll-snap-align: start;
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 16px;
  overflow: hidden;
  margin: 10px 10px;
}

.slide img {
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  height: auto;
  object-fit: cover;
  display: block;
}
</style>
