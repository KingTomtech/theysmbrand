// Meal Prep Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('mealPrepOrderForm');
    
    if (orderForm) {
        // Set minimum week to current week
        const weekInput = document.getElementById('week');
        if (weekInput) {
            const today = new Date();
            const year = today.getFullYear();
            const week = getWeekNumber(today);
            weekInput.min = `${year}-W${week.toString().padStart(2, '0')}`;
            weekInput.value = `${year}-W${week.toString().padStart(2, '0')}`;
        }
        
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(orderForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const location = formData.get('location');
            const servings = formData.get('servings');
            const week = formData.get('week');
            const notes = formData.get('notes') || 'None';
            
            // Calculate total price
            const pricePerServing = 200;
            const totalPrice = parseInt(servings) * pricePerServing;
            
            // Format WhatsApp message
            const message = `*NEW MEAL PREP ORDER*\n\n` +
                `*Name:* ${name}\n` +
                `*Phone:* ${phone}\n` +
                `*Location:* ${location}\n` +
                `*Servings:* ${servings}\n` +
                `*Total:* K${totalPrice.toLocaleString()}\n` +
                `*Delivery Week:* ${week}\n` +
                `*Special Requests:* ${notes}\n\n` +
                `Please confirm my order. Thank you!`;
            
            // Encode and open WhatsApp
            const whatsappUrl = `https://wa.me/260975228899?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Show confirmation
            alert(`Thank you, ${name}! Your order will be sent via WhatsApp. Total: K${totalPrice.toLocaleString()}`);
        });
    }
});

// Helper function to get ISO week number
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}
