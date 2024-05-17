//bagian pertama
const tUbahWarna = document.getElementById('tUbahWarna')
tUbahWarna.onclick = function() {
    //document.body.style.backgroundColor = 'lightblue'
    //document.body.setAttribute('class','biru-muda')
    document.body.classList.toggle('biru-muda')
}

//bagian kedua
const tAcakWarna = document.createElement('button')
const textTombol = document.createTextNode('ACAK WARNA')
tAcakWarna.appendChild(textTombol)
tAcakWarna.setAttribute('type', 'button')
tAcakWarna.setAttribute('id','btn2')
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click',function() {
  const r = Math.round(Math.random() * 255 + 1)
  const g = Math.round(Math.random() * 255 + 1)
  const b = Math.round(Math.random() * 255 + 1)

  document.body.style.backgroundColor = 'rgb('+ r + ', '+ g +', '+ b +')'
})



//bagian ketiga
const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')


sMerah.addEventListener('input', function(){
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor =
  'rgb('+ r +','+ g +', '+ b +')'
})

sHijau.addEventListener('input', function(){
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor =
  'rgb('+ r +','+ g +', '+ b +')'
})

sBiru.addEventListener('input', function(){
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor =
  'rgb('+ r +','+ g +', '+ b +')'
})


//bagian keempat
document.body.addEventListener('mousemove', function(event){
 const xPos = Math.round((event.clientX / window.innerWidth) * 255)
 const yPos = Math.round((event.clientY / window.innerHeight) * 255)
document.body.style.backgroundColor = 
'rgb('+ xPos +','+ yPos +',100 )'
})