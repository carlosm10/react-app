import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm(){
	const navigate = useNavigate();

	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("");

	const isFormValid = 
        date && time && guests >= 1 && guests <= 10;
	
	const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/confirmed");
	};

    return (
        <form onSubmit={handleSubmit}>
        {/* DATE */}
        <label htmlFor="res-date">Choose date</label>
        <input
            id="res-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
        />

        {/* TIME */}
        <label htmlFor="res-time">Choose time</label>
        <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
        >
            <option value="">Select time</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
        </select>

        {/* GUESTS */}
        <label htmlFor="guests">Number of guests</label>
        <input
            id="guests"
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
        />

        {/* OCCASION */}
        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
        >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
        </select>

        <button disabled={!isFormValid}>
            Make Your Reservation
        </button>
        </form>
    );


}

export default BookingForm;