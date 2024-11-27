import React, { useState } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";  // Importation depuis le même dossier


const initialState = {
  email: '',
  password: '',
};

export default function SignIn() {
  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [disableInputs, setDisableInputs] = useState(false); // Pour désactiver les champs pendant le chargement
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisableInputs(true);  // Désactive les champs et le bouton pendant la requête
    setErrorMessage('');

    const { email, password } = formData;

    if (!email || !password) {
      setLoading(false);
      setDisableInputs(false); // Réactive les champs si le formulaire est incomplet
      setErrorMessage('Tous les champs sont requis.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/user/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);
      setDisableInputs(false); // Réactive les champs après la requête

      if (response.ok) {
        navigate('/hero');
      } else {
        setErrorMessage(data.message || 'Une erreur est survenue lors de la connexion.');
      }
    } catch (error) {
      setLoading(false);
      setDisableInputs(false);
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleRedirectToSignUp = () => {
    navigate('/signup');
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src="/covpic.jpg" alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook size={20} />
          </button>
          <button
            type="button"
            className="inline-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <AiOutlineTwitter size={20} />
          </button>
        </div>
        
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        
        <form onSubmit={handleSignIn} noValidate autoComplete="off">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={disableInputs}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={disableInputs}
          />
          
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              disabled={loading || disableInputs}
            >
              {loading ? 'Chargement...' : 'Se connecter'}
            </button>
          </div>
        </form>

        {errorMessage && (
          <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
        )}
        
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{' '}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="/signup"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
}
