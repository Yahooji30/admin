import Config from "./fireConfig";
import { useRouter } from "vue-router";
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
} from "firebase/firestore";

import { getAuth } from "firebase/auth";
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
const auth = getAuth();
const route = useRouter();
const branchCollection = collection(db, "branches");
const conactForm = collection(db, "messages");
const contact = collection(db, "contact");
const teamCollection = collection(db, "teamMember");
const messageCollection = collection(db, "messages");
const userColection = collection(db, "users");
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

export const getContact = async () => {
  const contactData = await getDoc(contactRef);
  console.log(contactData.data());
  return contactData.exists ? contactData.data() : null;
};

export const updateContact = async (id, data) => {
  await updateDoc(doc(contact, id), data);
};

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
