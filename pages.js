/* ═══════════════════════════════════════════════════════════
   ASPHALTE PACA — pages intérieures
   Le site est statique : candidatures et commandes partent par
   e-mail. Le script prépare un message pré-rempli et ouvre la
   messagerie du visiteur, rien n'est envoyé à un serveur.
   ═══════════════════════════════════════════════════════════ */
(() => {
  const EMAIL = 'contact.asphaltepaca@gmail.com';
  const mailto = (subject, lines) =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;

  /* ── candidature d'adhésion ── */
  const form = document.getElementById('candidature');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const v = (n) => (form.elements[n]?.value || '').trim();
      const lines = [
        'Bonjour,',
        '',
        'Je souhaite adhérer à Asphalte Paca. Voici ma candidature :',
        '',
        `Nom et prénom : ${v('nom')}`,
        `Téléphone : ${v('telephone')}`,
        `E-mail : ${v('email')}`,
        `Ville : ${v('ville')}`,
        `Véhicule (marque et modèle) : ${v('vehicule')}`,
        `Année : ${v('annee') || '—'}`,
        `Immatriculation : ${v('immatriculation')}`,
        '',
        v('message') ? `Quelques mots : ${v('message')}\n` : '',
        '→ Je joins une photo de mon véhicule à ce message.',
        '',
        'Merci !'
      ];
      window.location.href = mailto(`Candidature d'adhésion — ${v('nom')}`, lines);
      const done = document.getElementById('candidatureDone');
      if (done) done.hidden = false;
    });
  }

  /* ── commandes boutique ── */
  document.querySelectorAll('[data-order]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.prod');
      const name = card.querySelector('h3').textContent.trim();
      const price = card.dataset.price;
      const size = card.querySelector('.sizes input:checked');
      const sizeBox = card.querySelector('.sizes');
      if (sizeBox && !size) {
        sizeBox.querySelector('input').focus();
        sizeBox.querySelector('legend').textContent = 'CHOISISSEZ UNE TAILLE';
        return;
      }
      const lines = [
        'Bonjour,',
        '',
        'Je souhaite commander :',
        '',
        `• ${name}${size ? ` — taille ${size.value}` : ''} — ${price} € (prix indicatif)`,
        'Quantité : 1',
        '',
        'Nom et prénom :',
        'Téléphone :',
        '',
        'Merci de me confirmer le prix, la disponibilité et les modalités de retrait.'
      ];
      window.location.href = mailto(`Commande boutique — ${name}`, lines);
    });
  });
})();
