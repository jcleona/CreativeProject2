$(document).ready(function() {

  $("#goldSubmit").click(function(e) {
    e.preventDefault();

      var myurl= "https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json?api_key=gQqkTz5DACN5-hJUbaxY";
     	$.ajax({
     	    url : myurl,
     	    dataType : "json",
     	    success : function(json) {
       		console.log(json);
          var chartDate = [];
          var amGold = [];
          for (var i = 0; i < 7; i++) {
            var date = json.dataset.data[i][0];
            chartDate[i] = date.substring(5,10).replace(/-/g,"/").replace(/0/g,"");
            amGold[i] = json.dataset.data[i][1];
          }
          var resultsAM = "";
          resultsAM += '<p>Gold Rate for ' + json.dataset.data[0][0] + ': &nbsp $' + json.dataset.data[0][1] + '</p>';
          $("#goldResultsAM").html(resultsAM);
          google.charts.load('current', {packages: ['corechart', 'line']});
          google.charts.setOnLoadCallback(drawBasic);
          function drawBasic() {
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Date');
                data.addColumn('number', '');
                data.addRows([
                  [chartDate[6], amGold[6]],  [chartDate[5], amGold[5]],  [chartDate[4], amGold[4]],  [chartDate[3], amGold[3]],  [chartDate[2], amGold[2]],  [chartDate[1], amGold[1]],
                  [chartDate[0], amGold[0]]
                ]);
                var options = {
                  legend: {position:'none'},
                  hAxis: {title: 'Date'},
                  vAxis: {  title: 'US $',
                  format: '0'}
                };
                var chart = new
                google.visualization.LineChart(document.getElementById('chart_div'));
                chart.draw(data, options);
              }
              $(window).resize(function(){
                drawBasic();
              });
     	 }
     	});
    });


    $("#silverSubmit").click(function(e) {
      e.preventDefault();

        var myurl= "https://www.quandl.com/api/v3/datasets/LBMA/SILVER.json?api_key=gQqkTz5DACN5-hJUbaxY";
       	$.ajax({
       	    url : myurl,
       	    dataType : "json",
       	    success : function(json) {
         		console.log(json);
            var chartDateSilver = [];
            var amSilver = [];
            for (var i = 0; i < 7; i++) {
              var date = json.dataset.data[i][0];
              chartDateSilver[i] = date.substring(5,10).replace(/-/g,"/").replace(/0/g,"");
              amSilver[i] = json.dataset.data[i][1];
            }
            var resultsAM = "";
            resultsAM += '<p>Silver Rate for ' + json.dataset.data[0][0] + ': &nbsp $' + json.dataset.data[0][1] + '</p>';
            $("#silverResultsAM").html(resultsAM);
            google.charts.load('current', {packages: ['corechart', 'line']});
            google.charts.setOnLoadCallback(drawBasic);
            function drawBasic() {
                  var data = new google.visualization.DataTable();
                  data.addColumn('string', 'Date');
                  data.addColumn('number', '');
                  data.addRows([
                    [chartDateSilver[6], amSilver[6]],  [chartDateSilver[5], amSilver[5]],  [chartDateSilver[4], amSilver[4]],  [chartDateSilver[3], amSilver[3]],  [chartDateSilver[2], amSilver[2]],  [chartDateSilver[1], amSilver[1]],
                    [chartDateSilver[0], amSilver[0]]
                  ]);
                  var options = {
                    legend: {position:'none'},
                    hAxis: {title: 'Date'},
                    vAxis: {  title: 'US $',
                    format: '0.00'}
                  };
                  var chart = new
                  google.visualization.LineChart(document.getElementById('chart_div_silver'));
                  chart.draw(data, options);
                }
                $(window).resize(function(){
                  drawBasic();
                });
       	 }
       	});
      });


});
