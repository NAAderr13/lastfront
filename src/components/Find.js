import React, { useState } from 'react';

function OfferForm() {
  const [offer, setOffer] = useState({
    destination: '',
    startingLocation: '',
    phone: '',
    seats: '',
    additionalInfo: ''
  });

  const [offers, setOffers] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!offer.destination || !offer.startingLocation || !offer.phone || !offer.seats) {
      setError('Tous les champs obligatoires doivent être remplis');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(offer)
      });

      if (response.ok) {
        alert('Offre enregistrée avec succès');
        setOffer({ destination: '', startingLocation: '', phone: '', seats: '', additionalInfo: '' });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erreur lors de l\'enregistrement de l\'offre');
      }
    } catch (err) {
      setError('Erreur de connexion ou de serveur');
    }
  };

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:8080/api/offer/search?destination=${offer.destination}&startingLocation=${offer.startingLocation}`);
    const data = await response.json();

    if (response.ok) {
      setOffers(data);
    } else {
      setError('Aucune offre trouvée');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-xl shadow-lg max-w-4xl">
      {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center mb-6">{error}</div>}

      <h2 className="text-3xl text-blue-900 font-bold text-center mb-6">Rechercher des offres de covoiturage</h2>

      <div className="flex gap-6 justify-center mb-8 pb-4 border-b-2 border-gray-300">
        <input
          type="text"
          placeholder="Destination"
          value={offer.destination}
          onChange={(e) => setOffer({ ...offer, destination: e.target.value })}
          className="p-4 border border-gray-300 rounded-lg w-64 text-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Lieu de départ"
          value={offer.startingLocation}
          onChange={(e) => setOffer({ ...offer, startingLocation: e.target.value })}
          className="p-4 border border-gray-300 rounded-lg w-64 text-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Rechercher
        </button>
      </div>

      <h3 className="text-xl text-blue-900 font-bold mt-6">Résultats de la recherche :</h3>

      {offers.length > 0 ? (
        <div className="space-y-6 mt-4">
          {offers.map((offer, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300">
              <div className="text-lg font-bold text-blue-700 mb-2">Destination: {offer.destination}</div>
              <div className="text-gray-700 mb-2"><span className="font-semibold">Lieu de départ:</span> {offer.startingLocation}</div>
              <div className="text-gray-700 mb-2"><span className="font-semibold">Téléphone:</span> {offer.phone}</div>
              <div className="text-gray-700 mb-2"><span className="font-semibold">Places disponibles:</span> {offer.seats}</div>
              <div className="text-gray-700"><span className="font-semibold">Informations supplémentaires:</span> {offer.additionalInfo || 'Aucune'}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center mt-6">
          Aucune offre disponible pour cette recherche.
        </div>
      )}
    </div>
  );
}

export default OfferForm;
