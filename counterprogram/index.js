let counter = Number(document.getElementById("counter").textContent);

document.getElementById("add").onclick = function()
{
    counter += 1;
    document.getElementById("counter").textContent = `${counter}`;
}

document.getElementById("reset").onclick = function()
{
    counter = 0;
    document.getElementById("counter").textContent = `${counter}`;
}

document.getElementById("minus").onclick = function()
{
    counter -= 1;
    document.getElementById("counter").textContent = `${counter}`;
}