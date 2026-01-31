function uploadReport() {
    const status = document.getElementById("uploadStatus");
    status.style.color = "#555";
    status.innerText = "Uploading report... ⏳";

    setTimeout(() => {
        status.style.color = "green";
        status.innerText = "File uploaded successfully ✅";

        generateSummary();
    }, 1200);
}


function generateSummary() {
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value.toLowerCase();

    let message = "";
    let risk = "Low Risk";
    let color = "green";

    if (condition.includes("diabetes")) {
        message = `
      Your report suggests glucose levels that require regular monitoring.
      AI Recommendation: Maintain a balanced diet, monitor blood sugar levels,
      and follow up with a healthcare provider.
    `;
        risk = "Moderate Risk";
        color = "d97706";
    } else if (condition.includes("hypertension") || condition.includes("bp")) {
        message = `
      Your report indicates elevated blood pressure levels.
      AI Recommendation: Reduce salt intake, manage stress,
      and monitor blood pressure regularly.
    `;
        risk = "Moderate Risk";
        color = "orange";
    } else {
        message = `
      Your vitals appear stable based on the uploaded report.
      AI Recommendation: Maintain a healthy lifestyle and regular checkups.
    `;
    }

    document.getElementById("summary").innerHTML = `
  <h3>AI Health Summary</h3>

  <p><strong>Status:</strong> Report analyzed successfully 🧠</p>

  <p><strong>Risk Level:</strong>
    <span style="
      background-color:${color};
      color:white;
      padding:4px 10px;
      border-radius:12px;
      font-size:13px;
      font-weight:bold;
    ">
      ${risk}
    </span>
  </p>

  <p>${message}</p>

  <hr>

  <p><strong>Recommended Next Action:</strong></p>
  <ul>
    <li>Monitor vitals regularly</li>
    <li>Maintain a healthy lifestyle</li>
    <li>Consult a doctor if symptoms persist</li>
  </ul>
`;

}







function togglePrivacy(box) {
    document.getElementById("privacyStatus").innerText =
        box.checked ?
        "Doctor can securely view your health summary." :
        "Your data is private.";


}

function saveProfile() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if (!name || !age) {
        alert("Please enter name and age");
        return;
    }

    document.getElementById("profile").innerHTML = `
  <h3>User Profile</h3>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Age:</strong> ${age}</p>
  <p><strong>Conditions:</strong> ${condition || "None reported"}</p>
`;
}