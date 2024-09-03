
let baseelement=document.querySelector("#basevalue");
function increament()
{
    let value=baseelement.innerText;
    value=parseInt(value);
    value++;
    baseelement.innerText=value;
}
function decreament()
{
    let value=baseelement.innerText;
    value=parseInt(value);
    value--;
    baseelement.innerText = value;

}