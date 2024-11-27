import React, { useState } from 'react';

export default function Offer() {
  const [id, setId] = useState('');
  const [startingLocation, setStartingLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [seats, setSeats] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérification des champs avant soumission
    if (!startingLocation || !destination || !date || !seats || !phone) {
      setError('Tous les champs sont requis.');
      return;
    }

    // Remplacer les valeurs nulles ou vides par une chaîne vide
    const formData = {
      id: id.trim() || null,  // id peut être null si non fourni
      starting_location: startingLocation.trim() || '',
      destination: destination.trim() || '',
      date: date.trim() || '',
      seats: seats.trim() || '',
      phone: phone.trim() || '',
      additional_info: additionalInfo.trim() || '',
    };

    console.log('Form Data:', formData); // Log des données avant envoi

    try {
      // Envoyer les données au backend avec fetch
      const response = await fetch('http://localhost:8080/api/offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données');
      }

      const data = await response.json();
      setSuccessMessage(data.message || 'Offre enregistrée avec succès !');

      // Réinitialiser le formulaire après une soumission réussie
      setId('');
      setStartingLocation('');
      setDestination('');
      setDate('');
      setSeats('');
      setPhone('');
      setAdditionalInfo('');
    } catch (error) {
      setError('Erreur lors de l\'envoi des données : ' + error.message);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto">
        <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Offer a Ride</h2>

          {/* ID (optionnel, si tu souhaites le fournir manuellement) */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="id"
              id="id"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label
              htmlFor="id"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Offer ID (optional)
            </label>
          </div>

          {/* Starting Location */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="starting_location"
              id="starting_location"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={startingLocation}
              onChange={(e) => setStartingLocation(e.target.value)}
              required
            />
            <label
              htmlFor="starting_location"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Starting Location
            </label>
          </div>

          {/* Destination */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="destination"
              id="destination"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <label
              htmlFor="destination"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Destination
            </label>
          </div>

          {/* Date of the ride */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="date"
              id="date"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label
              htmlFor="date"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of Ride
            </label>
          </div>

          {/* Number of seats available */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="seats"
              id="seats"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              min="1"
              required
            />
            <label
              htmlFor="seats"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Number of Seats
            </label>
          </div>

          {/* Phone */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label
              htmlFor="phone"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>

          {/* Additional info */}
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="additional_info"
              id="additional_info"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
            <label
              htmlFor="additional_info"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Additional Information
            </label>
          </div>

          {/* Displaying errors or success messages */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Offer
          </button>
        </form>
      </div>
    </section>
  );
}
