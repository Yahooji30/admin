import Config from "./fireConfig";
import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  getDoc,
  deleteDoc,
  addDoc,
  getFirestore,
  collection,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import {
  getStorage,
  ref as stRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { ref } from "vue";

const firebaseApp = initializeApp(Config);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

// Collections
const branchCollection = collection(db, "branches");
const conactForm = collection(db, "messages");
const contact = collection(db, "contact");
const teamCollection = collection(db, "teamMember");
const messageCollection = collection(db, "messages");
const userColection = collection(db, "users");
const productcollection = collection(db, "products");

// Refrences
const profileRef = doc(userColection, "uLLXmarMCfOK9r1mpwej1e036442");
const contactRef = doc(db, "contact", "7EycdcYIMtJKslLrAkvp");

export const createBranch = (branch) => {
  return addDoc(branchCollection, branch);
};

export const getBranches = () => {
  const branches = ref([]);
  getDocs(branchCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        branches.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Branches : ", branches);
    })
    .catch((err) => {
      console.log(err);
    });
  return branches;
};

export const getBranch = async (id) => {
  const branchData = await getDoc(doc(branchCollection, id));
  console.log(branchData.data());
  return branchData.exists ? branchData.data() : null;
};

export const updateBranch = async (id, data) => {
  console.log("Data : ", data);
  const contactData = await updateDoc(doc(branchCollection, id), data);
};

export const deleteBranch = async (id) => {
  await deleteDoc(doc(branchCollection, id));
};

// Contacts

export const getContact = async () => {
  const contactData = await getDoc(contactRef);
  console.log(contactData.data());
  return contactData.exists ? contactData.data() : null;
};

export const updateContact = async (id, data) => {
  await updateDoc(doc(contact, id), data);
};

// Team Members
export const addTeamMember = async (team) => {
  addDoc(teamCollection, team);
};

export const getTeamMemeber = () => {
  const members = ref([]);
  getDocs(teamCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        members.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Members : ", members);
    })
    .catch((err) => {
      console.log(err);
    });
  return members;
};

export const updateTeamMember = async (id, data) => {
  await updateDoc(doc(teamCollection, id), data);
};

export const getMember = async (id) => {
  const teamData = await getDoc(doc(teamCollection, id));
  console.log(teamData.data());
  return teamData.exists ? teamData.data() : null;
};

export const deleteMember = async (id) => {
  await deleteDoc(doc(teamCollection, id));
};

// Messages
export const sendMessage = (message) => {
  addDoc(conactForm, message);
};

export const getMessages = () => {
  const inqueries = ref([]);
  getDocs(messageCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        inqueries.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Messages : ", inqueries);
    })
    .catch((err) => {
      console.log(err);
    });
  return inqueries;
};

// Profile
export const getProfileDetail = async () => {
  const profileData = await getDoc(profileRef);
  console.log(profileData.data());
  return profileData.exists ? profileData.data() : null;
};

export const updateUserProfile = (data) => {
  updateDoc(doc(userColection, "OZHFaj6AeAX9ORvIZCkjMkYUwI23"), data);
};

export const uploadImage = async (file) => {
  const storageRef = stRef(storage, "profile/" + file.name);
  const uploadedImage = await uploadBytes(storageRef, file);
  const getUrl = await getDownloadURL(storageRef);
  console.log(getUrl);
  return getUrl;
};

// Product

export const uploadProductImage = async (file) => {
  const storageRef = stRef(storage, "productImages/" + file.name);
  await uploadBytes(storageRef, file);
  const getUrl = await getDownloadURL(storageRef);
  console.log("Product Image : ", getUrl);
  return getUrl;
};
export const insertProduct = (product) => {
  return addDoc(productcollection, product);
};
export const getProducts = () => {
  const items = ref([]);
  getDocs(productcollection)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Items : ", items);
    })
    .catch((err) => {
      console.log(err);
    });
  return items;
};

export const deleteProduct = async (id) => {
  await deleteDoc(doc(productcollection, id));
};

export const updateProduct = async (id, data) => {
  await updateDoc(doc(productcollection, id), data);
};

export const getproduct = async (id) => {
  const productDetail = await getDoc(doc(db, "products", id));
  console.log(productDetail.data());
  return productDetail.exists ? productDetail.data() : null;
};

// Get Products by categories

export const getKitchenProducts = () => {
  const items = ref([]);
  const q = query(
    productcollection,
    where("category", "==", "Modular Kitchens")
  );
  getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Kitchen Products : ", items);
    })
    .catch((err) => {
      console.log(err);
    });
  return items;
};

export const getFurnitureProducts = () => {
  const items = ref([]);
  const q = query(productcollection, where("category", "==", "Furniture"));
  getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Furniture Products : ", items);
    })
    .catch((err) => {
      console.log(err);
    });
  return items;
};

export const getFDProducts = () => {
  const items = ref([]);
  const q = query(
    productcollection,
    where("category", "==", "Furnishings and Decor Accessories")
  );
  getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Furnishings and Decor Accessories Products : ", items);
    })
    .catch((err) => {
      console.log(err);
    });
  return items;
};

export const getLightingProducts = () => {
  const items = ref([]);
  const q = query(productcollection, where("category", "==", "Lighting"));
  getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Lighting Products : ", items);
    })
    .catch((err) => {
      console.log(err);
    });
  return items;
};

export const getPWProducts = () => {
  const items = ref([]);
  const q = query(
    productcollection,
    where("category", "==", "Painting and Wallpaper")
  );
  getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Painting and Wallpaper Products : ", items);
    })
    .catch((err) => {
      console.log(err);
    });
  return items;
};

export const getWardrobeProducts = () => {
  const items = ref([]);
  const q = query(
    productcollection,
    where("category", "==", "Wardrobe Designs")
  );
  getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      console.log("Wardrobe Designs Products : ", items);
    })
    .catch((err) => {
      console.log(err);
    });
  return items;
};
