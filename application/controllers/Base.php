<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Base extends CI_Controller {

	public function index()
	{
		$data['chart'] = $this->uri->segment(1);
		$this->load->view('home',$data);
	}

	public function Geochart()
	{
		$dados['regioes'] = array(
			'Country' => 'Popularity',
			'Germany' => 200,
			'United States' => 300,
			'Brazil' => 400,
			'Canada' => 500,
			'France' => 600,
			'RU' => 700
		);

		echo json_encode($dados);
	}

	public function Donnutchart()
	{
		$dados['tarefas'] = array(
			'Tarefas' => 'Horas por dia',
			'Trabalho' => 6,
			'Escrever livros e tutoriais' => 4,
			'Redes Sociais' => 2,
			'Assistir TV' => 4,
			'Dormir' => 8
		);
		$dados['opcoes'] = array(
			'title' => 'Atividades Diárias',
			'pieHole' => 0.4
		);

		echo json_encode($dados);
	}

	public function Piechart()
	{
		$dados['tarefas'] = array(
			'Tarefas' => 'Horas por dia',
			'Trabalho' => 6,
			'Escrever livros e tutoriais' => 4,
			'Redes Sociais' => 2,
			'Assistir TV' => 4,
			'Dormir' => 8
		);
		$dados['opcoes'] = array(
			'title' => 'Atividades Diárias'
		);

		echo json_encode($dados);
	}

}
