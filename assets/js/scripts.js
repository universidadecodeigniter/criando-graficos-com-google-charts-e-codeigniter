$(document).ready(function(){
  //Define a URL para obtenção dos dados para gerar o gráfico
  var url_data = window.location.href+"/data";

  //Renderização do gráfico com mapa
  if($('#geochart-container').length > 0)
  {
    //Define a variável que irá receber as regiões a serem marcadas no mapa
    var regioes;

    //Requisição AJAX ao servidor para obtenção dos dados
    $.ajax({
      type: 'GET',
      url: url_data,
      dataType: 'json',
      success: function(data) {
        regioes = json2array(data.regioes);
      },
      error: function() {
        alert("Ocorreu um erro ao processar a solicitação.");
      }
    });

    //Define qual é o pacote de gráficos que será utilizado
    google.charts.load('current', {'packages':['geochart']});

    //Operações executadas ao iniciar o processamento da biblioteca
    google.charts.setOnLoadCallback(function(){
      //Formata os dados para o padrão de exibição do gráfico
      data = google.visualization.arrayToDataTable(regioes);

      //Estrutura o gráfico para exibição
      var chart = new google.visualization.GeoChart(document.getElementById('geochart-container'));
      var options = {};

      //Exibe o gráfico na tela
      chart.draw(data, options);
    });
  }
  // Renderização do gráfico em formato de donnut
  else if($('#donnutchart-container').length > 0)
  {
    var tarefas;
    //Define a variável que irá receber as opções de configuração do gráfico
    var options;
    $.ajax({
      type: 'GET',
      url: url_data,
      dataType: 'json',
      success: function(data) {
        tarefas = json2array(data.tarefas);
        options = data.opcoes;
      },
      error: function() {
        alert("Ocorreu um erro ao processar a solicitação.");
      }
    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(function(){
      data = google.visualization.arrayToDataTable(tarefas);
      var chart = new google.visualization.PieChart(document.getElementById('donnutchart-container'));
      chart.draw(data, options);
    });
  }
  // Renderização do gráfico em formato pizza
  else if($('#piechart-container').length > 0)
  {
    var tarefas;
    var options;
    $.ajax({
      type: 'GET',
      url: url_data,
      dataType: 'json',
      success: function(data) {
        tarefas = json2array(data.tarefas);
        options = data.opcoes;
      },
      error: function() {
        alert("Ocorreu um erro ao processar a solicitação.");
      }
    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(function(){
      data = google.visualization.arrayToDataTable(tarefas);
      var chart = new google.visualization.PieChart(document.getElementById('piechart-container'));
      chart.draw(data, options);
    });
  }
  // Renderização do gráfico em formato pizza, mas como imagem e não como HTML
  else if($('#piechart-png-container').length > 0)
  {
    var tarefas;
    var options;
    $.ajax({
      type: 'GET',
      url: url_data,
      dataType: 'json',
      success: function(data) {
        tarefas = json2array(data.tarefas);
        options = data.opcoes;
      },
      error: function() {
        alert("Ocorreu um erro ao processar a solicitação.");
      }
    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(function(){
      data = google.visualization.arrayToDataTable(tarefas);

      var chart = new google.visualization.PieChart(document.getElementById('piechart-png-container'));

      // Define o que deve ser executado quando a criaçãodo gráfico for executada
      google.visualization.events.addListener(chart, 'ready', function () {
        document.getElementById('piechart-png-container').innerHTML = '<img src="' + chart.getImageURI() + '">';
      });

      chart.draw(data, options);

    });
  }

});

//Função responsável por converter um JSON em array
//no formato da biblioteca Google Charts
function json2array(json_data){
  var result = [];
  for(var i in json_data)
  result.push([i, json_data[i]]);

  return result;
}