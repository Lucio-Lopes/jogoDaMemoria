class GameControler{
    constructor(){
        this.baralho = ["felipe","daniel","caio","ruan","lucio"]
        this.divEl = document.querySelectorAll(".wrap > div");
        this.grade = document.querySelector('.wrap')
        this.random = [];
        this.randomCards();
        this.criarCards();
        
    }
    
    criarCards(){
        
        let x = 0;
        
        for(let i = 0; i<this.baralho.length*2;i++){
            let mesa = document.createElement('div')
            mesa.innerHTML = `
            <div class="card">
                <div class="flip ${this.baralho[this.random[i]]}">
                    <div class="front-card">
                    <img src="./img/${this.baralho[this.random[i]]}.jpeg">
                    </div>
                    <div class="back-card">
                        <img src='./img/back-card.jpg'>
                    </div>
                </div>
            </div>
            `
            
            this.grade.appendChild(mesa);
        }
        this.flipCard();
    }

    flipCard(){
        let flip = document.querySelectorAll(".flip");
        let selected = [];
        let score = [];
        flip.forEach((e)=> {
            e.addEventListener('click',()=>{
                selected.push(e);
                e.style.transform = 'rotateY(180deg)';
                if(selected.length == 2){
                    if(selected[0].className == selected[1].className){
                        for(let i = 0; i<selected.length;i++){
                            score.push(selected[i]);
                        }
                        selected = [];
                        setTimeout(()=>{
                            if(score.length == 10){
                                alert('PARABÊNS, ARROMBADO!')
                            }
                        },1000);
                        
                    }else{
                        
                            setTimeout(()=>{
                                for(let i = 0; i<selected.length;i++){
                                    selected[i].style.transform = 'rotateY(0deg)';
                                }
                                selected = [];
                            },500) 
                        
                    }
                } 
            })
        })
    }

    randomCards(){
        let n;
        for(let i = 0; i <this.baralho.length*2;i++){
            n = parseInt(Math.random()*this.baralho.length);
            if(this.random.indexOf(n) != this.random.lastIndexOf(n)){
                i--;
            }else{
                this.random.push(n);
            }    
        }
    }

    
}