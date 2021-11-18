<template>
  <div></div>
</template>

<script>
export default {
  name: "paixu",
  data() {
    return {
      tiem: []
    };
  },
  methods: {
    sortKey(array, key) {
      console.log(1111);
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    }
  }
};
</script>

<style></style>
