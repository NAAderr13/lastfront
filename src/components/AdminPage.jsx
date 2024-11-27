import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [users, setUsers] = useState([]); // Liste des utilisateurs
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [editingUser, setEditingUser] = useState(null); // Utilisateur en cours d'édition
  const [formData, setFormData] = useState({ name: "", email: "", password: "" }); // Données du formulaire
  const [error, setError] = useState(""); // Gestion des erreurs

  // Fonction pour récupérer les utilisateurs
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/get");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des utilisateurs");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Problème de récupération des utilisateurs");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Fonction pour supprimer un utilisateur
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/user/delete/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de l'utilisateur");
      }
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      setError("Erreur lors de la suppression de l'utilisateur");
      console.error(error);
    }
  };

  // Fonction pour ouvrir le formulaire d'édition d'un utilisateur
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, password: "" });
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour soumettre le formulaire de modification
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/user/update/${editingUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour de l'utilisateur");
      }
      const updatedUser = await response.json();
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setEditingUser(null); // Fermer le formulaire d'édition
    } catch (error) {
      setError("Erreur lors de l'édition de l'utilisateur");
      console.error(error);
    }
  };

  // Affichage du message de chargement ou erreur
  if (loading) {
    return <div>Chargement des utilisateurs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Liste des utilisateurs</h1>

      <div className="mb-6">
        <a
          className="text-red-600 hover:underline hover:underline-offset-4"
          href="/signup"
        >
          Ajouter un utilisateur
        </a>
      </div>

      {editingUser && (
        <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Modifier l'utilisateur</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nom :</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Mot de passe :</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-700"
            >
              Mettre à jour
            </button>
            <button
              type="button"
              onClick={() => setEditingUser(null)}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              Annuler
            </button>
          </form>
        </div>
      )}

      <table className="w-full table-auto border-collapse mt-6 bg-gray-50 shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Nom</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 text-sm text-gray-700">{user.id}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.name}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white py-1 px-4 rounded-md ml-2 hover:bg-red-600"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
