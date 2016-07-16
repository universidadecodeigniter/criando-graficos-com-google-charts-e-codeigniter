<?php $this->load->view('commons/cabecalho'); ?>

<div class="container">
	<div class="col-md-12">
		<div class="page-header">
			<h1>Criando gráficos com Google Charts e CodeIgniter</h1>
		</div>
	</div>
	<div class="col-md-3">
		<p class="lead">Escolha nas opções abaixo o gráfico que deseja visualizar:</p>
		<div class="list-group">
			<a href="<?=base_url('donnutchart')?>" class="list-group-item">DonnutChart</a>
			<a href="<?=base_url('geochart')?>" class="list-group-item">GeoChart</a>
			<a href="<?=base_url('piechart')?>" class="list-group-item">PieChart</a>
			<a href="<?=base_url('piechart-png')?>" class="list-group-item">PieChart (PNG)</a>
		</div>
	</div>
	<div class="col-md-9" id="<?=$chart?>-container" style="height:600px;">

	</div>
</div>

<?php $this->load->view('commons/rodape'); ?>
