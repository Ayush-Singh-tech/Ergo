document.getElementById('PurchasingHardware').addEventListener('click', () => toggleAccordion(1));
document.getElementById('Storage').addEventListener('click', () => toggleAccordion(2));
document.getElementById('Memory').addEventListener('click', () => toggleAccordion(3));
document.getElementById('ProcessingUnits').addEventListener('click', () => toggleAccordion(4));
document.getElementById('Gpu').addEventListener('click', () => toggleAccordion(5));
document.getElementById('Cpu').addEventListener('click', () => toggleAccordion(6));
document.getElementById('Motherboard').addEventListener('click', () => toggleAccordion(7));
document.getElementById('Cooling').addEventListener('click', () => toggleAccordion(8));
document.getElementById('Power').addEventListener('click', () => toggleAccordion(9));
document.getElementById('YourCase').addEventListener('click', () => toggleAccordion(10));
document.getElementById('Software').addEventListener('click', () => toggleAccordion(11));
document.getElementById('PuttingItTogether').addEventListener('click', () => toggleAccordion(12));

function toggleAccordion(id) {
    const content = document.getElementById(`content${id}`);
    const icon = document.getElementById(`icon${id}`);
  
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '-';
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
    }
}
