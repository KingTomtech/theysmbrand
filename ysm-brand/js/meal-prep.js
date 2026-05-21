document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("mealPrepOrderForm");

    if (!orderForm) {
        return;
    }

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const location = formData.get("location");
        const servings = formData.get("servings");
        const notes = formData.get("notes") || "No special notes";

        const message = [
            "Hi The YSM Brand, I would like to request meal prep.",
            "",
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Delivery area: ${location}`,
            `Servings requested: ${servings}`,
            `Meal goals or notes: ${notes}`,
            "",
            "Please confirm menu options, pricing, and delivery timing."
        ].join("\n");

        window.open(`https://wa.me/260975228899?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
});
