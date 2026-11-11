// ===================================================================
// CONFIGURATION DE LA BOUTIQUE DIGITALE (TUNISIE)
// Adam Atef Shop — Abonnements, AI & Cartes de Jeux Vidéo
// ===================================================================

const STORE_CONFIG = {
  // Nom officiel de la boutique
  storeName: "Adam Atef Shop",
  tagline: "Abonnements Digitaux, IA & Jeux Vidéo payables en Dinars Tunisiens",
  
  // NUMÉRO WHATSAPP OFFICIEL (Format international : 21651725481)
  whatsappNumber: "21651725481", 
  displayPhone: "+216 51 725 481",
  contactEmail: "adam.atefShop@gmail.com",
  
  // TAUX DE CHANGE (1 USD = 3.85 DT)
  exchangeRateUSD: 3.85,

  // Coordonnées de Paiement en Tunisie
  paymentDetails: {
    d17: {
      name: "D17 (La Poste Tunisienne)",
      number: "51 725 481",
      instructions: "Transfert mobile instantané D17 vers le 51725481"
    },
    flouci: {
      name: "Flouci",
      number: "51 725 481",
      instructions: "Transfert instantané gratuit via l'application Flouci vers le 51725481"
    },
    virement: {
      name: "Virement Bancaire / Mandat",
      number: "Sur demande par WhatsApp",
      instructions: "Envoyez le reçu ou capture de transaction directement sur WhatsApp"
    }
  },

  // Réseaux Sociaux & Contact
  social: {
    facebook: "https://facebook.com/adam.atefShop",
    email: "adam.atefShop@gmail.com",
    whatsappLink: function() {
      return `https://wa.me/${this.whatsappNumber}`;
    }
  }
};
