import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.log('PUT to the db')
  // create connection to db
  const jateDb = await openDB('jate', 1);
  // create transaction
  const tx = jateDb.transaction('jate', 'readwrite');
  // create object store
  const store = tx.objectStore('jate');
  // use put method to update content in db
  const request = store.put({ id: 1, value: content });
  // wait for transaction to complete
  const result = await request;
  console.log('Data saved to db', result);
}

export const getDb = async () => {
  console.log('GET all from the db')
  // create connection to db
  const jateDb = await openDB('jate', 1);
  // create transaction
  const tx = jateDb.transaction('jate', 'readonly');
  // create object store
  const store = tx.objectStore('jate');
  // use getAll method to get all content from db
  const request = store.getAll();
  // wait for transaction to complete
  const result = await request;
  console.log('Data retrieved from db', result);
  return result.value;
}

initdb();
