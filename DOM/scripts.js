    var friends=['Lazor','Tazor','Blazor','Mazor','Dazor','Azor','Khazor','Zazor','Chuck','Steve']
    var div=document.createElement('div')
    var div2=document.createElement('div')
    var button=document.createElement('button')
    var button2 = document.createElement('button')
    var button3=document.createElement('button')
    var para=document.createElement('p')
    var span=document.createElement('span')
    var array=document.getElementById('friend')

    

document.addEventListener('DOMContentLoaded', function(){

    button.className="buttonStyle"
    button2.className="buttonStyle"
    div.className='buttonStyle'
    para.className='buttonStyle'
    button3.className='buttonStyle'
    document.body.appendChild(button)
    document.body.appendChild(button2)
    document.body.appendChild(div)
    document.body.appendChild(para)
    document.body.appendChild(div2)
    document.body.appendChild(button3)
    button.innerHTML=('1')
    button2.innerHTML=('2')
    button3.innerHTML=('5')
    div.innerHTML=('3')
    para.innerHTML=('4.I am dying on the inside')
    span.innerHTML=('Gregory Programming Genius Carver')
})
button.addEventListener('click',function(){
    alert('This is a nice message')
})

button2.addEventListener('click', function(){
        alert('example')
})

div.addEventListener('mouseover', function() {
  div.style.backgroundColor='red';
});
  div.addEventListener('mouseleave', function() {
  div.style.backgroundColor='green';
});

para.addEventListener('click',function(){
    para.style.backgroundColor = randomColor();

    function randomColor() {
    var randomRed = Math.floor(Math.random() * 350);
    var randomGreen = Math.floor(Math.random() * 350);
    var randomBlue = Math.floor(Math.random() * 350);
    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
    return randomColor
    }
})
button3.addEventListener('click',function(){
    div2.innerHTML=span.innerHTML
})
array.addEventListener('click',function(){
        var uList=document.getElementsByTagName('ul')
        var list=document.createElement('li')
        document.uList.appendChild(list)
})