<template>
  <div>
    <user />

    <v-card class="mt-1">
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title>
            <span class="text-caption">设置</span>
          </v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1"> mdi-chevron-right </v-icon>
        </v-row>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
import user from "./user.vue";
export default {
  components: { user },
  name: "account",
  data() {
    return {
      data: 123,
    };
  },
  created() {},
  methods: {},
};
</script>
