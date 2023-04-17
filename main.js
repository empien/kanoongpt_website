const airtableApiKey = 'patX7lW70J6mf4xRW.c191703123604afb116fe40c14a6140bb33764c14a96bcf047e4501dcdc5fb8b'; // Replace with your Airtable API key
const airtableBaseId = 'appJ77BjNrXfB4wkR'; // Replace with your Airtable Base ID
const airtableTableName = 'kanoongpt_waitlist'; // Replace with your Airtable table name

const Airtable = require('airtable');
const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);

document.getElementById('join-waitlist-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  try {
    await base(airtableTableName).create([
      {
        fields: {
          'Email': email,
          'Phone': phone
        }
      }
    ]);
    alert('Your information has been added to the waitlist.');
  } catch (error) {
    console.error(error);
    alert('An error occurred while adding your information to the waitlist.');
  }
});



document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initJoinWaitlistButton();
});



function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  for (const link of navLinks) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

function initJoinWaitlistButton() {
  const joinWaitlistButton = document.querySelector('.cta button');

  joinWaitlistButton.addEventListener('click', () => {
    // Replace the alert with the desired action, such as opening a signup form or redirecting to another page.
    alert('Join waitlist button clicked');
  });
}
