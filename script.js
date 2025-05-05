// script.js
 
// Βρίσκουμε όλα τα thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');
 
// Επιλέγουμε το container του fullscreen και τα επιμέρους στοιχεία
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImage = document.getElementById('fullscreen-image');
const description = document.getElementById('description');
 
// Όταν κάνεις κλικ σε ένα thumbnail, εμφανίζεται το fullscreen
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    fullscreenImage.src = thumbnail.src;
    fullscreenContainer.classList.remove('hidden');
 
    // Εδώ μπορείς να ορίσεις ξεχωριστή περιγραφή για κάθε εικόνα
    // Παράδειγμα με alt:
    description.querySelector('p').textContent = thumbnail.alt || 'Περιγραφή ταινίας';
  });
});
 
// Πατώντας εκτός του fullscreen ή του image, το κλείνει
fullscreenContainer.addEventListener('click', (e) => {
  if (!e.target.closest('#fullscreen-image') && !e.target.closest('#description')) {
    fullscreenContainer.classList.add('hidden');
  }
});
const closeBtn = document.getElementById('close-fullscreen');

closeBtn.addEventListener('click', () => {
  fullscreenContainer.classList.add('hidden');
});
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const movies = document.querySelectorAll('.movie-item');

  movies.forEach(movie => {
    const title = movie.querySelector('.movie-title').textContent.toLowerCase();
    movie.style.display = title.includes(query) ? 'flex' : 'none';
  });
});
// Όταν κάνεις κλικ σε ένα thumbnail, εμφανίζεται το fullscreen
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    fullscreenImage.src = thumbnail.src;
    fullscreenContainer.classList.remove('hidden');

    // Περιγραφές ταινιών
    const descriptions = {
      'snowfall.jpg': 'Ο φρανκλιν και η παρέα του προσπαθούν να επιβιώσουν στους δρόμους τις αμερικής', 
      'topboy.jpg': 'Ολα αρχίζουν απο 2 φιλους που θελουν να κατακτήσουν τον κόσμο κάνωντας τα πάντα για να πετύχουν τον στόχο τους ',   
      'sons.jpg': 'Μια συμμορία στα βόρεια της Αμερικής ξεκινάει να διαχειρίζεται περιοχές που δεν ξέρει αμα μπορεί να αντέξει',    
      'deadboy.jpg': 'Δύο έφηβοι που γεννήθηκαν με διαφορά δεκατιών προσπαθούν να λύσουν διάφορα μυστήρια που τους προκείπτου κατά την διάρκεια', 
      'agatha.jpg': 'Μια συγγραφέας με προβλήματα στον γάμο της δέχεται να διερεύνηση εναν φόνο',
      'american.jpg': 'Η ιστορία ξεκινά το 1857, όταν μια μητέρα με τον γιο της ξεκινούν ένα ταξίδι γεμάτο περιπέτειες και δυσκολίες ',
      'dope.jpg': 'Η ζωή αλλάζει για τον Μάλκολμ, έναν σπασίκλα που προσπαθεί να επιβιώσει σε μια δύσκολη γειτονιά',
      'doc.jpg': 'Ο Ντοκ Χόλιντεϊ, ο ψυχρόαιμος σκοπευτής, επανενώνεται με τον παλιό του φίλο, Μάρσαλ Γουάιατ Ερπ, για να εξοντώσουν τη συμμορία Κλάντον στην σκονισμένη πόλη Τόμπστοουν, στην Αριζόνα.',
      'ncis.jpg': 'Ακολουθεί την Ομάδα Αντιμετώπισης Μείζονων Υποθέσεων (MCRT) της Υπηρεσίας Ποινικών Ερευνών του Ναυτικού (NCIS), καθώς φτάνουν στην ουσία ποινικών υποθέσεων που σχετίζονται με προσωπικό του Ναυτικού και του Σώματος Πεζοναυτών.',
      'point.jpg': 'Πρωταγωνίστρια της ιστορίας η Isla Gordon, ένα αναμορφωμένο κορίτσι των πάρτι, η οικογένεια της οποίας έχει μια επαγγελματική ομάδα μπάσκετ,τους Los Angeles Waves. ',
      'oneday.jpg': '20 χρόνια, δύο άνθρωποι, μία ημέρα… Η ταινία επισκέπτεται την Έμα και τον Ντέξτερ σε μια περίοδο είκοσι ετών, από την ημέρα που γνωρίστηκαν και για μία ημέρα κάθε χρόνο, την ίδια πάντα ημερομηνία - η οποία είναι η ημερομηνία της γνωριμίας τους.',
      'kitty.jpg': 'Η ταινία Cat Postale, αφηγείται το οδοιπορικό μιας ομάδας αδέσποτων γατών σε ένα Κυκλαδίτικο νησί κατά τη διάρκεια ενός χειμώνα όπου έχουν εξαφανιστεί οι άνθρωποι. Η ιστορία αποτελεί ένα μικρό απόσπασμα από το βιβλίο του Ζαχαρία Μαυροειδή, “Εφτά ψυχές στο στόμα”.'
    };

    // Βρες την περιγραφή με βάση το όνομα του αρχείου
    const filename = thumbnail.src.split('/').pop(); // παίρνει μόνο το "xxx.jpg"
    description.querySelector('p').textContent = descriptions[filename] || 'Δεν υπάρχει περιγραφή.';
  });
});
