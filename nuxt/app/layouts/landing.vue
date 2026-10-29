<template>
  <main class=" w-screen h-screen flex flex-col overflow-hidden">
    <div class="fixed -inset-3 -z-1 blur-md grayscale">
      <img
        src="/img/loading-map.webp"
        alt=""
        class="size-full object-cover absolute"
      />
    </div>
    <slot></slot>
  </main>
</template>