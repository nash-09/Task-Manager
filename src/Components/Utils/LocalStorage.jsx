const Employees = [
  {
    "id": 1,
    "firstName": "Aman",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "newTask": 0,
      "active": 1,
      "completed": 3,
      "failed": 3
    },
    "tasks": [
      {
        "id": 101,
        "title": "Create Dashboard",
        "description": "Develop admin dashboard in React",
        "date": "2026-01-05",
        "category": "Frontend",
        "newTask": false,
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "id": 102,
        "title": "Fix Bugs",
        "description": "Resolve UI and logic bugs",
        "date": "2026-01-06",
        "category": "Frontend",
        "newTask": false,
        "active": false,
        "completed": true,
        "failed": false
      },
      {
        "id": 103,
        "title": "Write Tests",
        "description": "Add unit tests",
        "date": "2026-01-07",
        "category": "Testing",
        "newTask": false,
        "active": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "newTask": 1,
      "active": 1,
      "completed": 2,
      "failed": 2
    },
    "tasks": [
      {
        "id": 201,
        "title": "Create Login Page",
        "description": "Design login UI",
        "date": "2026-01-06",
        "category": "Frontend",
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 202,
        "title": "Chart Integration",
        "description": "Add charts to dashboard",
        "date": "2026-01-07",
        "category": "Frontend",
        "newTask": false,
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "id": 203,
        "title": "Optimize Code",
        "description": "Improve performance",
        "date": "2026-01-08",
        "category": "Backend",
        "newTask": false,
        "active": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Vikas",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "newTask": 1,
      "active": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "id": 301,
        "title": "API Integration",
        "description": "Connect backend APIs",
        "date": "2026-01-09",
        "category": "Backend",
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 302,
        "title": "Deploy App",
        "description": "Deploy on server",
        "date": "2026-01-10",
        "category": "DevOps",
        "newTask": false,
        "active": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Suresh",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "newTask": 1,
      "active": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "id": 401,
        "title": "Database Design",
        "description": "Design MongoDB schema",
        "date": "2026-01-08",
        "category": "Database",
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 402,
        "title": "API Testing",
        "description": "Test APIs using Postman",
        "date": "2026-01-09",
        "category": "Testing",
        "newTask": false,
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "id": 403,
        "title": "Bug Fixing",
        "description": "Fix backend bugs",
        "date": "2026-01-10",
        "category": "Backend",
        "newTask": false,
        "active": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "newTask": 1,
      "active": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "id": 501,
        "title": "UI Improvements",
        "description": "Improve UI consistency",
        "date": "2026-01-09",
        "category": "Frontend",
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false
      },
      {
        "id": 502,
        "title": "Responsive Fix",
        "description": "Fix mobile responsiveness",
        "date": "2026-01-10",
        "category": "Frontend",
        "newTask": false,
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "id": 503,
        "title": "Code Review",
        "description": "Review team code",
        "date": "2026-01-11",
        "category": "Management",
        "newTask": false,
        "active": false,
        "completed": true,
        "failed": false
      }
    ]
  }
]

const Admin = [
    {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
]

export function setItem(){
  localStorage.setItem('Employees', JSON.stringify(Employees))
  localStorage.setItem('Admin', JSON.stringify(Admin))
}

export function getItem(){
  const employees = JSON.parse(localStorage.getItem('Employees'))
  const admin = JSON.parse(localStorage.getItem('Admin'))
  return {employees,admin}
}