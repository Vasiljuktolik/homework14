window.onload = function() {


    function someFunc(){
        speed = document.getElementById("quantity").value;
        console.log(speed);
        return speed;
        } 
        document.getElementById("zakazat").onclick = someFunc;
        

    
    
    var unique1 = document.querySelector('.good1');

    unique1
        .addEventListener('click', function(event){            
            this.classList.toggle('good-bot');
            this.style.transition = 'ease-in-out ' + speed + 's';
        });
    
    
    var unique2 = document.querySelector('.good2');

    unique2
            .addEventListener('click', function(event){            
                this.classList.toggle('good-bot');
                this.style.transition = 'ease-in-out ' + speed + 's';
            });
            var unique3 = document.querySelector('.good3');

    unique3
        .addEventListener('click', function(event){            
            this.classList.toggle('good-bot');
            this.style.transition = 'ease-in-out ' + speed + 's';
        });
    }