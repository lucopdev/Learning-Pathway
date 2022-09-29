    var agora = new Date();
    var dia = agora.getDay();
    var horas = agora.getHours();
    var minuto = agora.getMinutes();
    var cumprimento = '';
    var img = window.document.getElementById('bomdia');
    var horas =18;
    
    function turno(){
        if(horas < 5){
                cumprimento = 'Boa madrugada!';
                img.src = 'img/boamadrugada.jpg';
                document.body.style.backgroundColor = 'rgb(85, 80, 90)';
            }else if(horas < 12){
                cumprimento = 'Bom dia!';
                img.src = 'img/bomdia.jpg';
                document.body.style.backgroundColor = 'rgb(156, 207, 214)';
            }else if(horas < 18){
                cumprimento = 'Boa tarde!';
                img.src = 'img/boatarde.jpg';
                document.body.style.backgroundColor = 'rgb(219, 158, 101)';
            }else if(horas <= 24){
                cumprimento = 'Boa noite!';
                img.src = 'img/boanoite.jpg';
                document.body.style.backgroundColor = 'rgb(140, 120, 140)';
            }   
            return cumprimento;
        }
        
        switch(dia){
            case 0: window.document.write(`${turno()} Hoje é ${'Domingo.'}<br>`);
            break;
            case 1: window.document.write(`${turno()} Hoje é ${'Segunda-feira.'}}<br>`);
            break;
            case 2: window.document.write(`${turno()} Hoje é ${'Terça-feira.'}<br>`);
            break;
            case 3: window.document.write(`${turno()} Hoje é ${'Quarta-feira.'}<br>`);
            break;
            case 4: window.document.write(`${turno()} Hoje é ${'Quinta-feira.'}<br>`);
            break;
            case 5: window.document.write(`${turno()} Hoje é ${'Sexta-feira.'}<br>`);
            break;
            case 6: window.document.write(`${turno()} Hoje é ${'Sábado.'}<br>`);
            break;
        }

    
        
        window.document.writeln(`<strong>Agora são ${horas} horas.</strong>`);