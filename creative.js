const data = {
  name: "Pooja H N",
  referralCode: "pooja2025",
  totalDonations: 12500
};

document.getElementById("internName").textContent = data.name;
document.getElementById("referralCode").textContent = data.referralCode;

let current = 0;
const target = data.totalDonations;
const speed = 50;
const counter = document.getElementById("donationCounter");

const animateCounter = () => {
  current += Math.ceil((target - current) / 10);
  counter.textContent = current.toLocaleString();
  if (current < target) {
    setTimeout(animateCounter, speed);
  }
};

animateCounter();