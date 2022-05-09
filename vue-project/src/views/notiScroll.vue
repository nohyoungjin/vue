<template>

    <div class="p-container">
        <div class="p-container_inner">

            <div class="stats_graph_box">

                <div class="graph">
                    <!-- 비율에 따라 width 값 조정 -->
                    <div class="bar green" v-bind:style="{ width: actVal() + '%' }">
                        <dl class="desc">
                            <dt>첫 온도 36.5℃</dt>
                            <dd><em style="font-weight:normal;"></em></dd>
                        </dl>
                    </div>
                    <div class="bar clear" v-bind:style="{ width: cleVal() + '%' }">
                        <dl class="desc">
                            <dt>&nbsp;</dt>
                            <dd><em>{{ defVal() }}℃</em></dd>
                        </dl>
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
        defVa: 36.5,
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