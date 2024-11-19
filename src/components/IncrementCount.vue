<script setup>
import { useBreakpoints } from "@vueuse/core";

// Define custom breakpoints
const breakpoints = useBreakpoints({
  xs: 0,        // Extra small devices (phones)
  sm: 640,      // Small devices (tablets)
  md: 768,      // Medium devices (small laptops)
  lg: 1024,     // Large devices (desktops)
  xl: 1280,     // Extra large devices (large desktops)
});

// Reactive values for different breakpoints
const isMobile = breakpoints.smaller("sm"); // True if screen width < 640px
const isTablet = breakpoints.between("sm", "lg"); // True if 640px <= width < 1024px
const isDesktop = breakpoints.greater("lg"); // True if screen width >= 1024px
</script>

<template>
  <div>
    <p>Current View:</p>
    <ul>
      <li v-if="isMobile">Mobile View</li>
      <li v-else-if="isTablet">Tablet View</li>
      <li v-else-if="isDesktop">Desktop View</li>
    </ul>
  </div>
</template>
