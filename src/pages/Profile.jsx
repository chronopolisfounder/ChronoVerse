import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const defaultAvatar = "/avatar-default.png"; // Make sure this exists in /public or /src/assets

export default function Profile() {
  const [user, setUser] = useState(null);
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(defaultAvatar);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Fetch profile from Firestore
        const docRef = doc(db, "profiles", firebaseUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setBio(data.bio || "");
          setPreview(data.photoURL || firebaseUser.photoURL || defaultAvatar);
        } else {
          setBio("");
          setPreview(firebaseUser.photoURL || defaultAvatar);
        }
      } else {
        setUser(null);
        setBio("");
        setPreview(defaultAvatar);
      }
    });
    return () => unsub();
  }, []);

  // Sign in with Google
  const handleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setError("");
    } catch (err) {
      setError("Google Sign-In failed: " + err.message);
    }
  };

  // Sign out
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setError("");
    } catch (err) {
      setError("Sign out failed: " + err.message);
    }
  };

  // Handle file select
  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfilePic(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle profile update
  const handleSave = async () => {
    if (!user) return setError("Not signed in.");
    setSaving(true);
    setError("");
    let photoURL = preview;

    try {
      // Upload photo if a new file is selected
      if (profilePic) {
        const storageRef = ref(storage, `profilePics/${user.uid}/${profilePic.name}`);
        await uploadBytes(storageRef, profilePic);
        photoURL = await getDownloadURL(storageRef);
      }
      // Update Firestore profile
      await setDoc(
        doc(db, "profiles", user.uid),
        {
          bio,
          photoURL,
          updatedAt: new Date(),
          email: user.email,
          displayName: user.displayName,
        },
        { merge: true }
      );
      setError("");
      alert("Profile updated!");
    } catch (err) {
      setError("Save failed: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white/5 rounded-2xl shadow-xl p-8 mt-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {!user ? (
        <>
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mb-4"
            onClick={handleSignIn}
          >
            Sign in with Google
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </>
      ) : (
        <>
          <img
            src={preview}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <input type="file" accept="image/*" onChange={handlePicChange} className="mb-2" />
          <input
            type="text"
            className="w-full p-2 rounded-lg border mb-4 text-black"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Your bio..."
            maxLength={280}
          />
          <div className="flex space-x-4 mb-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Profile"}
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </>
      )}
    </div>
  );
}
