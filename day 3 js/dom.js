
function print()
{
  let name=document.querySelector('#name').value;
  let city=document.querySelector('#city').value;
  document.querySelector('.division').innerText=`NAME: ${name} AND CITY: ${city} HAS BEEN ADDED`;
}
