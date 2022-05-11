<template>

    <div class="p-container">
        <div class="p-container_inner" style="width:800px;">

          <div class="vertical_chart_box">
            <div class="chart_box">
            <!-- <ul class="axis_y">
              <li class="item">0<span class="blind">시간</span></li>
              <li class="item">3<span class="blind">시간</span></li>
              <li class="item">6<span class="blind">시간</span></li>
              <li class="item">9<span class="blind">시간</span></li>
              <li class="item">12<span class="blind">시간</span></li>
            </ul> -->
            <ul class="axis_x">
              <li class="item">
                <div class="text_box">
                  <strong class="day">1Q</strong>
                </div>
                <button type="button" class="graph">
                  <span class="time data1" style="height:calc(33.2% + 20%);"><span>33.2</span></span>
                </button>
              </li>
              <li class="item">
                <div class="text_box">
                  <strong class="day">2Q</strong>
                </div>
                <button type="button" class="graph">
                  <span class="time data1" style="height:calc(47.8% + 20%);"><span>47.8</span></span>
                </button>
              </li>
              <li class="item">
                <div class="text_box">
                  <strong class="day">3Q</strong>
                </div>
                <button type="button" class="graph">
                  <span class="time data1" style="height:calc(36.5% + 20%);"><span>36.5</span></span>
                </button>
              </li>
              <li class="item">
                <div class="text_box">
                  <strong class="day">4Q</strong>
                </div>
                <button type="button" class="graph">
                  <span class="time data1" style="height:calc(41.1% + 20%);"><span>41.1</span></span>
                </button>
              </li>
            </ul>
            </div>
          </div>

        </div>
    </div>

</template>

<script>

export default {

}

</script>