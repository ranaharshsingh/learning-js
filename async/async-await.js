// Simulated login function
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "1234") {
        resolve(email);
      } else {
        reject("❌ Invalid credentials");
      }
    }, 2000);
  });
};

// Simulated getUserProfile function
const getUserProfile = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Rana Harsh",
        email: email,
        role: "Student",
      });
    }, 1500);
  });
};

// ✅ Using async/await
const runLoginFlow = async () => {
  try {
    console.log("🔐 Logging in...");
    const userEmail = await loginUser("user@example.com", "1234");

    console.log("📡 Fetching profile...");
    const profile = await getUserProfile(userEmail);

    console.log("📄 User Profile:", profile);
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

// 🔁 Start the flow
runLoginFlow();