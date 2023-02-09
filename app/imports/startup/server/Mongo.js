import { Meteor } from 'meteor/meteor';
import { Passwords } from '../../api/password/Password.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.website} (${data.owner})`);
  // Stuffs.collection.insert(data);
  Passwords.collection.insert(data);

};

// Initialize the StuffsCollection if empty.
if (Passwords.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}
