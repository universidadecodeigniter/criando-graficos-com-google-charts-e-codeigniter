<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'Base';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['geochart'] = "Base";
$route['donnutchart'] = "Base";
$route['piechart'] = "Base";
$route['piechart-png'] = "Base";

$route['geochart/data'] = "Base/Geochart";
$route['donnutchart/data'] = "Base/Donnutchart";
$route['piechart/data'] = "Base/Piechart";
$route['piechart-png/data'] = "Base/Piechart";