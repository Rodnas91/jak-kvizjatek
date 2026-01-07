/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 50.0, "minX": 0.0, "maxY": 1059.0, "series": [{"data": [[0.0, 50.0], [0.1, 50.0], [0.2, 50.0], [0.3, 50.0], [0.4, 50.0], [0.5, 50.0], [0.6, 50.0], [0.7, 50.0], [0.8, 50.0], [0.9, 50.0], [1.0, 51.0], [1.1, 51.0], [1.2, 51.0], [1.3, 51.0], [1.4, 51.0], [1.5, 51.0], [1.6, 51.0], [1.7, 51.0], [1.8, 51.0], [1.9, 51.0], [2.0, 51.0], [2.1, 51.0], [2.2, 51.0], [2.3, 51.0], [2.4, 51.0], [2.5, 51.0], [2.6, 51.0], [2.7, 51.0], [2.8, 51.0], [2.9, 51.0], [3.0, 51.0], [3.1, 51.0], [3.2, 51.0], [3.3, 51.0], [3.4, 51.0], [3.5, 51.0], [3.6, 51.0], [3.7, 51.0], [3.8, 51.0], [3.9, 51.0], [4.0, 52.0], [4.1, 52.0], [4.2, 52.0], [4.3, 52.0], [4.4, 52.0], [4.5, 52.0], [4.6, 52.0], [4.7, 52.0], [4.8, 52.0], [4.9, 52.0], [5.0, 52.0], [5.1, 52.0], [5.2, 52.0], [5.3, 52.0], [5.4, 52.0], [5.5, 52.0], [5.6, 52.0], [5.7, 52.0], [5.8, 52.0], [5.9, 52.0], [6.0, 53.0], [6.1, 53.0], [6.2, 53.0], [6.3, 53.0], [6.4, 53.0], [6.5, 53.0], [6.6, 53.0], [6.7, 53.0], [6.8, 53.0], [6.9, 53.0], [7.0, 53.0], [7.1, 53.0], [7.2, 53.0], [7.3, 53.0], [7.4, 53.0], [7.5, 53.0], [7.6, 53.0], [7.7, 53.0], [7.8, 53.0], [7.9, 53.0], [8.0, 53.0], [8.1, 53.0], [8.2, 53.0], [8.3, 53.0], [8.4, 53.0], [8.5, 53.0], [8.6, 53.0], [8.7, 53.0], [8.8, 53.0], [8.9, 53.0], [9.0, 53.0], [9.1, 53.0], [9.2, 53.0], [9.3, 53.0], [9.4, 53.0], [9.5, 53.0], [9.6, 53.0], [9.7, 53.0], [9.8, 53.0], [9.9, 53.0], [10.0, 53.0], [10.1, 53.0], [10.2, 53.0], [10.3, 53.0], [10.4, 53.0], [10.5, 53.0], [10.6, 53.0], [10.7, 53.0], [10.8, 53.0], [10.9, 53.0], [11.0, 53.0], [11.1, 53.0], [11.2, 53.0], [11.3, 53.0], [11.4, 53.0], [11.5, 53.0], [11.6, 53.0], [11.7, 53.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 53.0], [12.2, 53.0], [12.3, 53.0], [12.4, 53.0], [12.5, 53.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 54.0], [13.1, 54.0], [13.2, 54.0], [13.3, 54.0], [13.4, 54.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 54.0], [14.1, 54.0], [14.2, 54.0], [14.3, 54.0], [14.4, 54.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 54.0], [15.3, 54.0], [15.4, 54.0], [15.5, 54.0], [15.6, 54.0], [15.7, 54.0], [15.8, 54.0], [15.9, 54.0], [16.0, 54.0], [16.1, 54.0], [16.2, 54.0], [16.3, 54.0], [16.4, 54.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 54.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 54.0], [18.1, 54.0], [18.2, 54.0], [18.3, 54.0], [18.4, 54.0], [18.5, 54.0], [18.6, 54.0], [18.7, 54.0], [18.8, 54.0], [18.9, 54.0], [19.0, 54.0], [19.1, 54.0], [19.2, 54.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 54.0], [20.4, 54.0], [20.5, 54.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 54.0], [21.5, 54.0], [21.6, 54.0], [21.7, 54.0], [21.8, 54.0], [21.9, 54.0], [22.0, 54.0], [22.1, 54.0], [22.2, 54.0], [22.3, 54.0], [22.4, 54.0], [22.5, 54.0], [22.6, 54.0], [22.7, 54.0], [22.8, 54.0], [22.9, 54.0], [23.0, 54.0], [23.1, 54.0], [23.2, 54.0], [23.3, 54.0], [23.4, 54.0], [23.5, 54.0], [23.6, 54.0], [23.7, 54.0], [23.8, 54.0], [23.9, 54.0], [24.0, 54.0], [24.1, 54.0], [24.2, 54.0], [24.3, 54.0], [24.4, 54.0], [24.5, 54.0], [24.6, 54.0], [24.7, 54.0], [24.8, 54.0], [24.9, 54.0], [25.0, 54.0], [25.1, 54.0], [25.2, 54.0], [25.3, 54.0], [25.4, 54.0], [25.5, 54.0], [25.6, 54.0], [25.7, 54.0], [25.8, 54.0], [25.9, 54.0], [26.0, 54.0], [26.1, 54.0], [26.2, 54.0], [26.3, 54.0], [26.4, 54.0], [26.5, 54.0], [26.6, 54.0], [26.7, 54.0], [26.8, 54.0], [26.9, 54.0], [27.0, 55.0], [27.1, 55.0], [27.2, 55.0], [27.3, 55.0], [27.4, 55.0], [27.5, 55.0], [27.6, 55.0], [27.7, 55.0], [27.8, 55.0], [27.9, 55.0], [28.0, 55.0], [28.1, 55.0], [28.2, 55.0], [28.3, 55.0], [28.4, 55.0], [28.5, 55.0], [28.6, 55.0], [28.7, 55.0], [28.8, 55.0], [28.9, 55.0], [29.0, 55.0], [29.1, 55.0], [29.2, 55.0], [29.3, 55.0], [29.4, 55.0], [29.5, 55.0], [29.6, 55.0], [29.7, 55.0], [29.8, 55.0], [29.9, 55.0], [30.0, 55.0], [30.1, 55.0], [30.2, 55.0], [30.3, 55.0], [30.4, 55.0], [30.5, 55.0], [30.6, 55.0], [30.7, 55.0], [30.8, 55.0], [30.9, 55.0], [31.0, 55.0], [31.1, 55.0], [31.2, 55.0], [31.3, 55.0], [31.4, 55.0], [31.5, 55.0], [31.6, 55.0], [31.7, 55.0], [31.8, 55.0], [31.9, 55.0], [32.0, 55.0], [32.1, 55.0], [32.2, 55.0], [32.3, 55.0], [32.4, 55.0], [32.5, 55.0], [32.6, 55.0], [32.7, 55.0], [32.8, 55.0], [32.9, 55.0], [33.0, 55.0], [33.1, 55.0], [33.2, 55.0], [33.3, 55.0], [33.4, 55.0], [33.5, 55.0], [33.6, 55.0], [33.7, 55.0], [33.8, 55.0], [33.9, 55.0], [34.0, 55.0], [34.1, 55.0], [34.2, 55.0], [34.3, 55.0], [34.4, 55.0], [34.5, 55.0], [34.6, 55.0], [34.7, 55.0], [34.8, 55.0], [34.9, 55.0], [35.0, 55.0], [35.1, 55.0], [35.2, 55.0], [35.3, 55.0], [35.4, 55.0], [35.5, 55.0], [35.6, 55.0], [35.7, 55.0], [35.8, 55.0], [35.9, 55.0], [36.0, 55.0], [36.1, 55.0], [36.2, 55.0], [36.3, 55.0], [36.4, 55.0], [36.5, 55.0], [36.6, 55.0], [36.7, 55.0], [36.8, 55.0], [36.9, 55.0], [37.0, 55.0], [37.1, 55.0], [37.2, 55.0], [37.3, 55.0], [37.4, 55.0], [37.5, 55.0], [37.6, 55.0], [37.7, 55.0], [37.8, 55.0], [37.9, 55.0], [38.0, 55.0], [38.1, 55.0], [38.2, 55.0], [38.3, 55.0], [38.4, 55.0], [38.5, 55.0], [38.6, 55.0], [38.7, 55.0], [38.8, 55.0], [38.9, 55.0], [39.0, 56.0], [39.1, 56.0], [39.2, 56.0], [39.3, 56.0], [39.4, 56.0], [39.5, 56.0], [39.6, 56.0], [39.7, 56.0], [39.8, 56.0], [39.9, 56.0], [40.0, 56.0], [40.1, 56.0], [40.2, 56.0], [40.3, 56.0], [40.4, 56.0], [40.5, 56.0], [40.6, 56.0], [40.7, 56.0], [40.8, 56.0], [40.9, 56.0], [41.0, 56.0], [41.1, 56.0], [41.2, 56.0], [41.3, 56.0], [41.4, 56.0], [41.5, 56.0], [41.6, 56.0], [41.7, 56.0], [41.8, 56.0], [41.9, 56.0], [42.0, 56.0], [42.1, 56.0], [42.2, 56.0], [42.3, 56.0], [42.4, 56.0], [42.5, 56.0], [42.6, 56.0], [42.7, 56.0], [42.8, 56.0], [42.9, 56.0], [43.0, 56.0], [43.1, 56.0], [43.2, 56.0], [43.3, 56.0], [43.4, 56.0], [43.5, 56.0], [43.6, 56.0], [43.7, 56.0], [43.8, 56.0], [43.9, 56.0], [44.0, 56.0], [44.1, 56.0], [44.2, 56.0], [44.3, 56.0], [44.4, 56.0], [44.5, 56.0], [44.6, 56.0], [44.7, 56.0], [44.8, 56.0], [44.9, 56.0], [45.0, 56.0], [45.1, 56.0], [45.2, 56.0], [45.3, 56.0], [45.4, 56.0], [45.5, 56.0], [45.6, 56.0], [45.7, 56.0], [45.8, 56.0], [45.9, 56.0], [46.0, 56.0], [46.1, 56.0], [46.2, 56.0], [46.3, 56.0], [46.4, 56.0], [46.5, 56.0], [46.6, 56.0], [46.7, 56.0], [46.8, 56.0], [46.9, 56.0], [47.0, 56.0], [47.1, 56.0], [47.2, 56.0], [47.3, 56.0], [47.4, 56.0], [47.5, 56.0], [47.6, 56.0], [47.7, 56.0], [47.8, 56.0], [47.9, 56.0], [48.0, 56.0], [48.1, 56.0], [48.2, 56.0], [48.3, 56.0], [48.4, 56.0], [48.5, 56.0], [48.6, 56.0], [48.7, 56.0], [48.8, 56.0], [48.9, 56.0], [49.0, 56.0], [49.1, 56.0], [49.2, 56.0], [49.3, 56.0], [49.4, 56.0], [49.5, 56.0], [49.6, 56.0], [49.7, 56.0], [49.8, 56.0], [49.9, 56.0], [50.0, 56.0], [50.1, 56.0], [50.2, 56.0], [50.3, 56.0], [50.4, 56.0], [50.5, 56.0], [50.6, 56.0], [50.7, 56.0], [50.8, 56.0], [50.9, 56.0], [51.0, 56.0], [51.1, 56.0], [51.2, 56.0], [51.3, 56.0], [51.4, 56.0], [51.5, 56.0], [51.6, 56.0], [51.7, 56.0], [51.8, 56.0], [51.9, 56.0], [52.0, 57.0], [52.1, 57.0], [52.2, 57.0], [52.3, 57.0], [52.4, 57.0], [52.5, 57.0], [52.6, 57.0], [52.7, 57.0], [52.8, 57.0], [52.9, 57.0], [53.0, 57.0], [53.1, 57.0], [53.2, 57.0], [53.3, 57.0], [53.4, 57.0], [53.5, 57.0], [53.6, 57.0], [53.7, 57.0], [53.8, 57.0], [53.9, 57.0], [54.0, 57.0], [54.1, 57.0], [54.2, 57.0], [54.3, 57.0], [54.4, 57.0], [54.5, 57.0], [54.6, 57.0], [54.7, 57.0], [54.8, 57.0], [54.9, 57.0], [55.0, 57.0], [55.1, 57.0], [55.2, 57.0], [55.3, 57.0], [55.4, 57.0], [55.5, 57.0], [55.6, 57.0], [55.7, 57.0], [55.8, 57.0], [55.9, 57.0], [56.0, 57.0], [56.1, 57.0], [56.2, 57.0], [56.3, 57.0], [56.4, 57.0], [56.5, 57.0], [56.6, 57.0], [56.7, 57.0], [56.8, 57.0], [56.9, 57.0], [57.0, 57.0], [57.1, 57.0], [57.2, 57.0], [57.3, 57.0], [57.4, 57.0], [57.5, 57.0], [57.6, 57.0], [57.7, 57.0], [57.8, 57.0], [57.9, 57.0], [58.0, 57.0], [58.1, 57.0], [58.2, 57.0], [58.3, 57.0], [58.4, 57.0], [58.5, 57.0], [58.6, 57.0], [58.7, 57.0], [58.8, 57.0], [58.9, 57.0], [59.0, 58.0], [59.1, 58.0], [59.2, 58.0], [59.3, 58.0], [59.4, 58.0], [59.5, 58.0], [59.6, 58.0], [59.7, 58.0], [59.8, 58.0], [59.9, 58.0], [60.0, 58.0], [60.1, 58.0], [60.2, 58.0], [60.3, 58.0], [60.4, 58.0], [60.5, 58.0], [60.6, 58.0], [60.7, 58.0], [60.8, 58.0], [60.9, 58.0], [61.0, 58.0], [61.1, 58.0], [61.2, 58.0], [61.3, 58.0], [61.4, 58.0], [61.5, 58.0], [61.6, 58.0], [61.7, 58.0], [61.8, 58.0], [61.9, 58.0], [62.0, 58.0], [62.1, 58.0], [62.2, 58.0], [62.3, 58.0], [62.4, 58.0], [62.5, 58.0], [62.6, 58.0], [62.7, 58.0], [62.8, 58.0], [62.9, 58.0], [63.0, 58.0], [63.1, 58.0], [63.2, 58.0], [63.3, 58.0], [63.4, 58.0], [63.5, 58.0], [63.6, 58.0], [63.7, 58.0], [63.8, 58.0], [63.9, 58.0], [64.0, 58.0], [64.1, 58.0], [64.2, 58.0], [64.3, 58.0], [64.4, 58.0], [64.5, 58.0], [64.6, 58.0], [64.7, 58.0], [64.8, 58.0], [64.9, 58.0], [65.0, 58.0], [65.1, 58.0], [65.2, 58.0], [65.3, 58.0], [65.4, 58.0], [65.5, 58.0], [65.6, 58.0], [65.7, 58.0], [65.8, 58.0], [65.9, 58.0], [66.0, 58.0], [66.1, 58.0], [66.2, 58.0], [66.3, 58.0], [66.4, 58.0], [66.5, 58.0], [66.6, 58.0], [66.7, 58.0], [66.8, 58.0], [66.9, 58.0], [67.0, 59.0], [67.1, 59.0], [67.2, 59.0], [67.3, 59.0], [67.4, 59.0], [67.5, 59.0], [67.6, 59.0], [67.7, 59.0], [67.8, 59.0], [67.9, 59.0], [68.0, 59.0], [68.1, 59.0], [68.2, 59.0], [68.3, 59.0], [68.4, 59.0], [68.5, 59.0], [68.6, 59.0], [68.7, 59.0], [68.8, 59.0], [68.9, 59.0], [69.0, 59.0], [69.1, 59.0], [69.2, 59.0], [69.3, 59.0], [69.4, 59.0], [69.5, 59.0], [69.6, 59.0], [69.7, 59.0], [69.8, 59.0], [69.9, 59.0], [70.0, 59.0], [70.1, 59.0], [70.2, 59.0], [70.3, 59.0], [70.4, 59.0], [70.5, 59.0], [70.6, 59.0], [70.7, 59.0], [70.8, 59.0], [70.9, 59.0], [71.0, 59.0], [71.1, 59.0], [71.2, 59.0], [71.3, 59.0], [71.4, 59.0], [71.5, 59.0], [71.6, 59.0], [71.7, 59.0], [71.8, 59.0], [71.9, 59.0], [72.0, 60.0], [72.1, 60.0], [72.2, 60.0], [72.3, 60.0], [72.4, 60.0], [72.5, 60.0], [72.6, 60.0], [72.7, 60.0], [72.8, 60.0], [72.9, 60.0], [73.0, 60.0], [73.1, 60.0], [73.2, 60.0], [73.3, 60.0], [73.4, 60.0], [73.5, 60.0], [73.6, 60.0], [73.7, 60.0], [73.8, 60.0], [73.9, 60.0], [74.0, 60.0], [74.1, 60.0], [74.2, 60.0], [74.3, 60.0], [74.4, 60.0], [74.5, 60.0], [74.6, 60.0], [74.7, 60.0], [74.8, 60.0], [74.9, 60.0], [75.0, 60.0], [75.1, 60.0], [75.2, 60.0], [75.3, 60.0], [75.4, 60.0], [75.5, 60.0], [75.6, 60.0], [75.7, 60.0], [75.8, 60.0], [75.9, 60.0], [76.0, 60.0], [76.1, 60.0], [76.2, 60.0], [76.3, 60.0], [76.4, 60.0], [76.5, 60.0], [76.6, 60.0], [76.7, 60.0], [76.8, 60.0], [76.9, 60.0], [77.0, 60.0], [77.1, 60.0], [77.2, 60.0], [77.3, 60.0], [77.4, 60.0], [77.5, 60.0], [77.6, 60.0], [77.7, 60.0], [77.8, 60.0], [77.9, 60.0], [78.0, 60.0], [78.1, 60.0], [78.2, 60.0], [78.3, 60.0], [78.4, 60.0], [78.5, 60.0], [78.6, 60.0], [78.7, 60.0], [78.8, 60.0], [78.9, 60.0], [79.0, 60.0], [79.1, 60.0], [79.2, 60.0], [79.3, 60.0], [79.4, 60.0], [79.5, 60.0], [79.6, 60.0], [79.7, 60.0], [79.8, 60.0], [79.9, 60.0], [80.0, 61.0], [80.1, 61.0], [80.2, 61.0], [80.3, 61.0], [80.4, 61.0], [80.5, 61.0], [80.6, 61.0], [80.7, 61.0], [80.8, 61.0], [80.9, 61.0], [81.0, 61.0], [81.1, 61.0], [81.2, 61.0], [81.3, 61.0], [81.4, 61.0], [81.5, 61.0], [81.6, 61.0], [81.7, 61.0], [81.8, 61.0], [81.9, 61.0], [82.0, 62.0], [82.1, 62.0], [82.2, 62.0], [82.3, 62.0], [82.4, 62.0], [82.5, 62.0], [82.6, 62.0], [82.7, 62.0], [82.8, 62.0], [82.9, 62.0], [83.0, 62.0], [83.1, 62.0], [83.2, 62.0], [83.3, 62.0], [83.4, 62.0], [83.5, 62.0], [83.6, 62.0], [83.7, 62.0], [83.8, 62.0], [83.9, 62.0], [84.0, 62.0], [84.1, 62.0], [84.2, 62.0], [84.3, 62.0], [84.4, 62.0], [84.5, 62.0], [84.6, 62.0], [84.7, 62.0], [84.8, 62.0], [84.9, 62.0], [85.0, 66.0], [85.1, 66.0], [85.2, 66.0], [85.3, 66.0], [85.4, 66.0], [85.5, 66.0], [85.6, 66.0], [85.7, 66.0], [85.8, 66.0], [85.9, 66.0], [86.0, 69.0], [86.1, 69.0], [86.2, 69.0], [86.3, 69.0], [86.4, 69.0], [86.5, 69.0], [86.6, 69.0], [86.7, 69.0], [86.8, 69.0], [86.9, 69.0], [87.0, 82.0], [87.1, 82.0], [87.2, 82.0], [87.3, 82.0], [87.4, 82.0], [87.5, 82.0], [87.6, 82.0], [87.7, 82.0], [87.8, 82.0], [87.9, 82.0], [88.0, 84.0], [88.1, 84.0], [88.2, 84.0], [88.3, 84.0], [88.4, 84.0], [88.5, 84.0], [88.6, 84.0], [88.7, 84.0], [88.8, 84.0], [88.9, 84.0], [89.0, 92.0], [89.1, 92.0], [89.2, 92.0], [89.3, 92.0], [89.4, 92.0], [89.5, 92.0], [89.6, 92.0], [89.7, 92.0], [89.8, 92.0], [89.9, 92.0], [90.0, 103.0], [90.1, 103.0], [90.2, 103.0], [90.3, 103.0], [90.4, 103.0], [90.5, 103.0], [90.6, 103.0], [90.7, 103.0], [90.8, 103.0], [90.9, 103.0], [91.0, 115.0], [91.1, 115.0], [91.2, 115.0], [91.3, 115.0], [91.4, 115.0], [91.5, 115.0], [91.6, 115.0], [91.7, 115.0], [91.8, 115.0], [91.9, 115.0], [92.0, 163.0], [92.1, 163.0], [92.2, 163.0], [92.3, 163.0], [92.4, 163.0], [92.5, 163.0], [92.6, 163.0], [92.7, 163.0], [92.8, 163.0], [92.9, 163.0], [93.0, 199.0], [93.1, 199.0], [93.2, 199.0], [93.3, 199.0], [93.4, 199.0], [93.5, 199.0], [93.6, 199.0], [93.7, 199.0], [93.8, 199.0], [93.9, 199.0], [94.0, 630.0], [94.1, 630.0], [94.2, 630.0], [94.3, 630.0], [94.4, 630.0], [94.5, 630.0], [94.6, 630.0], [94.7, 630.0], [94.8, 630.0], [94.9, 630.0], [95.0, 1054.0], [95.1, 1054.0], [95.2, 1054.0], [95.3, 1054.0], [95.4, 1054.0], [95.5, 1054.0], [95.6, 1054.0], [95.7, 1054.0], [95.8, 1054.0], [95.9, 1054.0], [96.0, 1057.0], [96.1, 1057.0], [96.2, 1057.0], [96.3, 1057.0], [96.4, 1057.0], [96.5, 1057.0], [96.6, 1057.0], [96.7, 1057.0], [96.8, 1057.0], [96.9, 1057.0], [97.0, 1058.0], [97.1, 1058.0], [97.2, 1058.0], [97.3, 1058.0], [97.4, 1058.0], [97.5, 1058.0], [97.6, 1058.0], [97.7, 1058.0], [97.8, 1058.0], [97.9, 1058.0], [98.0, 1059.0], [98.1, 1059.0], [98.2, 1059.0], [98.3, 1059.0], [98.4, 1059.0], [98.5, 1059.0], [98.6, 1059.0], [98.7, 1059.0], [98.8, 1059.0], [98.9, 1059.0], [99.0, 1059.0], [99.1, 1059.0], [99.2, 1059.0], [99.3, 1059.0], [99.4, 1059.0], [99.5, 1059.0], [99.6, 1059.0], [99.7, 1059.0], [99.8, 1059.0], [99.9, 1059.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 90.0, "series": [{"data": [[0.0, 90.0], [600.0, 1.0], [100.0, 4.0], [1000.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 94.0, "series": [{"data": [[0.0, 94.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.6299999999999997, "minX": 1.76777916E12, "maxY": 1.6299999999999997, "series": [{"data": [[1.76777916E12, 1.6299999999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76777916E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 55.2, "minX": 1.0, "maxY": 1055.5, "series": [{"data": [[1.0, 69.70731707317073], [2.0, 125.0], [4.0, 58.0], [5.0, 1055.5], [3.0, 488.8], [6.0, 55.2], [7.0, 372.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.6299999999999997, 116.57999999999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 7.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 211.66666666666666, "minX": 1.76777916E12, "maxY": 2358.3333333333335, "series": [{"data": [[1.76777916E12, 2358.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76777916E12, 211.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76777916E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 116.57999999999997, "minX": 1.76777916E12, "maxY": 116.57999999999997, "series": [{"data": [[1.76777916E12, 116.57999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76777916E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 115.32, "minX": 1.76777916E12, "maxY": 115.32, "series": [{"data": [[1.76777916E12, 115.32]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76777916E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 77.53, "minX": 1.76777916E12, "maxY": 77.53, "series": [{"data": [[1.76777916E12, 77.53]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76777916E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.76777916E12, "maxY": 1059.0, "series": [{"data": [[1.76777916E12, 1059.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76777916E12, 50.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76777916E12, 101.90000000000006]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76777916E12, 1059.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76777916E12, 56.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76777916E12, 1032.7999999999952]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76777916E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 55.0, "minX": 2.0, "maxY": 133.0, "series": [{"data": [[2.0, 133.0], [8.0, 55.5], [10.0, 56.0], [5.0, 55.0], [15.0, 60.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 54.0, "minX": 2.0, "maxY": 129.0, "series": [{"data": [[2.0, 129.0], [8.0, 55.5], [10.0, 55.0], [5.0, 54.0], [15.0, 59.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76777916E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76777916E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76777916E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76777916E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76777916E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76777916E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76777916E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76777916E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76777916E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76777916E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76777916E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76777916E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

