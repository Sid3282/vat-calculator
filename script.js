// Get elements
const amountInput = document.getElementById('amount');
const addVatButton = document.getElementById('add-vat');
const subtractVatButton = document.getElementById('subtract-vat');
const originalAmountDisplay = document.getElementById('original-amount');
const vatAmountDisplay = document.getElementById('vat-amount');
const totalAmountDisplay = document.getElementById('total-amount');

// VAT rate according to Nepal's VAT law
const vatRate = 0.13; // 13%

// Event listener for the + VAT button
addVatButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        const vatAmount = amount * vatRate;
        const totalAmount = amount + vatAmount;

        // Update the display
        originalAmountDisplay.textContent = amount.toFixed(2);
        vatAmountDisplay.textContent = vatAmount.toFixed(2);
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    } else {
        alert("Please enter a valid amount.");
    }
});

// Event listener for the - VAT button
subtractVatButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        const totalAmount = amount;
        const vatAmount = totalAmount / (1 + vatRate);
        const originalAmount = totalAmount - vatAmount;

        // Update the display
        originalAmountDisplay.textContent = originalAmount.toFixed(2);
        vatAmountDisplay.textContent = (totalAmount - originalAmount).toFixed(2);
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    } else {
        alert("Please enter a valid amount.");
    }
});

// Modal functionality
const vatInfoButton = document.getElementById('vat-info-btn');
const vatGuideButton = document.getElementById('vat-guide-btn');
const aboutVatModal = document.getElementById('about-vat-modal');
const vatGuideModal = document.getElementById('vat-guide-modal');
const closeVatInfo = document.getElementById('close-vat-info');
const closeVatGuide = document.getElementById('close-vat-guide');

// Show the "About VAT" modal
vatInfoButton.addEventListener('click', () => {
    aboutVatModal.style.display = "block";
});

// Show the "VAT Guide" modal
vatGuideButton.addEventListener('click', () => {
    vatGuideModal.style.display = "block";
});

// Close the "About VAT" modal
closeVatInfo.addEventListener('click', () => {
    aboutVatModal.style.display = "none";
});

// Close the "VAT Guide" modal
closeVatGuide.addEventListener('click', () => {
    vatGuideModal.style.display = "none";
});

// Close modal if clicked outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === aboutVatModal) {
        aboutVatModal.style.display = "none";
    } else if (event.target === vatGuideModal) {
        vatGuideModal.style.display = "none";
    }
});
