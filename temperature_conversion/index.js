const text = document.getElementById("text");
const c = document.getElementById("c");
const f = document.getElementById("f");
const placeholder = document.getElementById("placeholder");
let temperatura;

function conversion()
{
    if (!f.checked && !c.checked)
    {
        placeholder.textContent = "Selecione um tipo de conversão.";
    }
    else if (c.checked)
    {
        temperatura = Number(text.value);
        temperatura = temperatura * 1.8 + 32;
        placeholder.textContent = temperatura.toFixed(1) + "°F";
    }
    else if (f.checked)
    {
        temperatura = Number(text.value);
        temperatura = (temperatura - 32) / 1.8;
        placeholder.textContent = temperatura.toFixed(1) + "°C";
    }
}
