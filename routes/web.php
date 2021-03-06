<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', '\App\Http\Controllers\Controller@index')->name('/');

Auth::routes();

Route::get('/home', function (){

	return redirect()->route('/');
});

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout')->name('logout');


Route::post('password/email', '\App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');

Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');

Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');
