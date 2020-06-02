<?php
function formatDate($item)
{
    return date('d-m-Y H:i:s', $item);
}

function retrieveWeather($zipCode)
{
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "api.openweathermap.org/data/2.5/weather?zip={$zipCode}&appid=e07fdcbfcc218eb6cfbdeb7fec313fab&units=imperial",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    $response = json_decode($response, true);
    $response['apiType'] = 'retrieveWeather';
    $response = json_encode($response);
    // echo $response;
    return $response;
}

function forecast($zipCode)
{
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "api.openweathermap.org/data/2.5/forecast?zip={$zipCode}&appid=e07fdcbfcc218eb6cfbdeb7fec313fab&units=imperial",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    $response = json_decode($response, true);
    $response['apiType'] = 'forecastApi';

    // return $response;
    echo $response
}



if (isset($_POST['values']) && is_numeric($_POST['values'])) {
    retrieveWeather($zipCode);
}
