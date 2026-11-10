// Job Application Tracker — Steven Titchenor
// Built task by task while learning JavaScript. Each task was checked against tests.
// Task 1: Status enum, listCompanies, countByStatus
// Task 2: filterByStatus, addApplication, findByCompany
// Task 3: updateStatus, removeApplication, hasApplication
// Task 4 (next): sortByCompany, findByRole, getSummary

const Status = Object.freeze({
  APPLIED: "applied",
  INTERVIEWED: "interviewed",
  HIRED: "hired",
});

// --- Task 1 ---
function listCompanies(apps) {
  const names = [];
  for (const app of apps) {
    names.push(app.company);
  }
  return names;
}

function countByStatus(apps) {
  const counts = {};
  for (const app of apps) {
    counts[app.status] = (counts[app.status] || 0) + 1;
  }
  return counts;
}

// --- Task 2 ---
function filterByStatus(apps, status) {
  return apps.filter(function (application) {
    return application.status === status;
  });
}

function addApplication(apps, company, role, status) {
  apps.push({ company, role, status });
  return apps;
}

function findByCompany(apps, company) {
  return apps.find(function (app) {
    return app.company === company;
  });
}

// --- Task 3 ---
function updateStatus(apps, company, newStatus) {
  for (let app of apps) {
    if (app.company === company) {
      app.status = newStatus;
      return app;
    }
  }
  return undefined;
}

function removeApplication(apps, company) {
  for (let i = 0; i < apps.length; i++) {
    if (apps[i].company === company) {
      apps.splice(i, 1);
      return apps;
    }
  }
  return apps;
}

function hasApplication(apps, company) {
  for (let app of apps) {
    if (app.company === company) {
      return true;
    }
  }
  return false;
}

// --- Demo ---
const applications = [
  { company: "Wayfair", role: "Warehouse Associate", status: Status.APPLIED },
  { company: "Adecco", role: "Warehouse Worker", status: Status.INTERVIEWED },
  { company: "TruStile", role: "Production Associate", status: Status.APPLIED },
];

console.log("Companies:", listCompanies(applications));
console.log("Counts:", countByStatus(applications));
console.log("Applied:", filterByStatus(applications, "applied"));
console.log("Has Adecco:", hasApplication(applications, "Adecco"));
