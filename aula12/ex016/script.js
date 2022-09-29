function verificar(){
        var data = new Date();
        var anoatual = data.getFullYear() ;
        var anoent = window.document.querySelector('input#ano');
        var saida = window.document.getElementById('resultado');        
      
        if(anoent.value.length == 0 || anoent.value > anoatual){
                window.alert('Verifique os dados e tente novamente.');
                
        }else if( anoent.value < 1900 ){
                window.alert('Ano muito baixo!')
                }else{
                var idade = 2022 - Number(anoent.value);
                var sex = window.document.getElementsByName('radsex');
                var genero = '';
                var imagem = window.document.createElement('img');
                imagem.setAttribute('id', 'foto');
                
                if(sex[0].checked){
                        genero = 'Homem';
                        if(idade<5){
                                imagem.setAttribute('src', 'img/kidm.jpg');
                        }else if(idade<12){
                                imagem.setAttribute('src', 'img/kidm.jpg');
                        }else if(idade<18){
                                imagem.setAttribute('src', 'img/youngm.jpg');
                        }else if(idade<60){
                                imagem.setAttribute('src','img/adultm.jpg');
                        }else if(idade>=60){
                                imagem.setAttribute('src','img/seniorm.jpg');
                        }
                } else if(sex[1].checked){
                        genero = 'Mulher';
                        if(idade<5){
                                imagem.setAttribute('src', 'img/kidm.jpg');
                        }else if(idade<12){
                                imagem.setAttribute('src', 'img/kidf.jpg');
                        }else if(idade<18){
                                imagem.setAttribute('src', 'img/youngf.jpg');
                        }else if(idade<60){
                                imagem.setAttribute('src','img/adultf.jpg');
                        }else if(idade>=60){
                                imagem.setAttribute('src','img/seniorf.jpg');
                        }
                }
                
                saida.innerHTML = (`<strong>Você é ${genero} e tem ${idade} anos de idade.</strong>`);
                saida.appendChild(imagem);
        }
}