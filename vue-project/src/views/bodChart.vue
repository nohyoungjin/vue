<template>

    <div class="p-container">
        <div class="p-container_inner"  style="width:800px;">

            <div class="stats_graph_box">

                <div class="graph">
                    <!-- 비율에 따라 width 값 조정 -->
                    <div class="bar red" v-bind:style="{ width: actVal() + '%' }">
                        <div class="desc">
                            <strong>첫 온도 36.5℃</strong>
                            <em style="color:transparent">온도 표시</em>
                        </div>
                    </div>
                    <div class="bar clear" v-bind:style="{ width: cleVal() + '%' }">
                        <div class="desc">
                            <strong>현재 온도 {{ defVal() }}℃</strong>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script>

export default {
  data() {
    return {
        defVa: 40.5,
        addVa: 13.5
        }
    },
    created() {
        this.defVal(),
        this.actVal(),
        this.cleVal()
    },
    methods: {
        defVal() {
            return this.defVa
        },
        actVal() {
            this.actVa = this.defVa + this.addVa
            return this.actVa
        },
        cleVal() {
            this.cleVa = 100 - (this.defVa + this.addVa)
            return this.cleVa
        }
    }
}

</script>

<style scoped>

</style>