const ticketPrices = {
    premium: 250,
    elite: 200,
    gold: 150
};

function generateSeats(containerId, seatCount, category) {
    const container = document.querySelector(containerId + " .row");
    for (let i = 0; i < seatCount; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.dataset.category = category;
        container.appendChild(seat);
    }
}

// Generate Seats for Each Section
generateSeats("#premium-section", 30, "premium");
generateSeats("#elite-section", 50, "elite");
generateSeats("#gold-section", 70, "gold");

// Booking Logic
const seats = document.querySelectorAll('.seat:not(.occupied)');
const bookButton = document.getElementById('bookButton');
const bookingTable = document.getElementById('bookingTable');
const seatCountElement = document.getElementById('seatCount');
const seatPriceElement = document.getElementById('seatPrice');
const gstElement = document.getElementById('gst');
const finalPriceElement = document.getElementById('finalPrice');

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
    });
});

bookButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const seatCategoryCount = {
        premium: 0,
        elite: 0,
        gold: 0
    };

    selectedSeats.forEach(seat => {
        seatCategoryCount[seat.dataset.category]++;
    });

    const totalSeats = selectedSeats.length;
    if (totalSeats === 0) {
        alert("Please select at least one seat.");
        return;
    }

    const totalPrice = Object.keys(seatCategoryCount).reduce((total, category) => {
        return total + seatCategoryCount[category] * ticketPrices[category];
    }, 0);

    const gst = (totalPrice * 18) / 100;
    const finalPrice = totalPrice + gst;

    // Update table data
    seatCountElement.textContent = totalSeats;
    seatPriceElement.textContent = `₹${totalPrice}`;
    gstElement.textContent = `₹${gst.toFixed(2)}`;
    finalPriceElement.textContent = `₹${finalPrice.toFixed(2)}`;

    // Show booking table
    bookingTable.classList.remove('d-none');
});