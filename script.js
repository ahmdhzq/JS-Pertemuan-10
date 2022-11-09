const convert = () => {
    let uang = document.getElementById("amount").value
    let opt1 = document.getElementById("awal").value
    let opt2 = document.getElementById("akhir").value
    let hasil = document.getElementById("hasil")

    if (opt1 == 'usd1' & opt2 == 'usd2'){
        hasil.value =("$ ") + uang;
    }
    else if (opt1 == 'usd1' & opt2 == 'idr2') {
        hasil.value = ("Rp. ") + (uang * 15000);
    }
    else if (opt1 == 'usd1' & opt2 == 'jpy2') {
        hasil.value = ("¥ ") + (uang * 146);
    }
    else if (opt1 == 'idr1' & opt2 == 'usd2') {
        hasil.value = ("$ ") + (uang * 0.000064);
    }
    else if (opt1 == 'idr1' & opt2 == 'idr2') {
        hasil.value = ("Rp. ") + uang
    }
    else if (opt1 == 'idr1' & opt2 == 'jpy2') {
        hasil.value = ("¥ ") + (uang * 0.0094)
    }
    else if (opt1 == 'jpy1' & opt2 == 'usd2'){
        hasil.value = ("$ ") + (uang * 0.0068)
    }
    else if (opt1 == 'jpy1' & opt2 == 'idr2'){
        hasil.value = ("Rp. ") + (uang * 107)
    }
    else {
        hasil.value = ("¥ ") + uang;
    }
}


const temper = () => {
    let suhu = document.getElementById("suhu").value
    let optS1 = document.getElementById("awalSuhu").value
    let optS2 = document.getElementById("akhirSuhu").value
    let hasilSuhu = document.getElementById("hasilSuhu")

    //dari celcius
    if (optS1 == 'cius1' & optS2 == 'cius2'){
        hasilSuhu.value = suhu + ("°C")
    }
    else if (optS1 == 'cius1' & optS2 == 'fah2') {
        hasilSuhu.value = ((suhu * 1.8) + 32) + ("°F")
    }
    else if (optS1 == 'cius1' & optS2 == 'vin2') {
        hasilSuhu.value = (suhu + 273.15) + ("K")
    }
    else if (optS1 == 'cius1' & optS2 == 'rea2') {
        hasilSuhu.value = (suhu * 0.8) ("°Re")
    }

    //dari fahrenheit
    else if (optS1 == 'fah1' & optS2 == 'cius2') {
        hasil.value = ((suhu - 32) / 1.8) + ("°C")
    }
    else if (optS1 == 'fah1' & optS2 == 'fah2') {
        hasilSuhu.value = suhu + ("°F")
    }
    else if (optS1 == 'fah1' & optS2 == 'vin2'){
        hasilSuhu.value = (((suhu - 32) / 1.8) + 273.15) + ("K")
    }
    else if (optS1 == 'fah1' & optS2 == 'rea2'){
        hasilSuhu.value = (((suhu - 32) / 1.8) * 0.8) + ("°Re")
    }

    //dari kelvin
    else if (optS1 == 'vin1' & optS2 == 'cius2') {
        hasilSuhu.value = (suhu - 273.15) - ("°C")
    }
    else if (optS1 == 'vin1' & optS2 == 'fah2') {
        hasilSuhu.value = (((suhu - 273.15) * 1.8) + 32) + ("°F")
    }
    else if (optS1 == 'vin1' & optS2 == 'vin2') {
        hasilSuhu.value = suhu + ("K")
    }
    else if (optS1 == 'vin1' & optS2 == 'rea2') {
        hasilSuhu.value = ((suhu - 273.15) + 0.8) + ("°Re")
    }

    //dari Reamur
    else if (optS1 == 'rea1' & optS2 == 'cius2') {
        hasilSuhu.value = (suhu * 1.25) + ("°C")
    }
    else if (optS1 == 'rea1' & optS2 == 'fah2') {
        hasilSuhu.value = ((suhu * 2.25) + 32) + ("°F")
    }
    else if (optS1 == 'rea1' & optS2 == 'vin2'){
        hasilSuhu.value = ((suhu * 1.25) + 273.15) + ("K")
    }
    else {
        hasilSuhu.value = suhu + ("°Re")
    }
}
