import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
  getByTestId,
  findByTestId,
  findAllByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dashboard } from "../Components/Dashboard";
import fetchMock from "jest-fetch-mock";
import App from "../App";

beforeAll(() => {
  // attempt is 1
  global.score = 1;
  console.log("Resetting Score to 1");
});

beforeEach(() => {
  cleanup();
});

jest.setTimeout(60000);

function getEmployeeElements(container) {
  return {
    name: getByTestId(container, "employee-name"),
    salary: getByTestId(container, "employee-salary"),
  };
}

test("Dashboard loads properly", async () => {
  const fn = jest.fn();

  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
    <App />
  );

  await sleep(2000);

  const sortButton = getByTestId("sorting-btn");
  expect(sortButton.textContent.trim()).toBe("Bottom 10 Employees");

  const sortedEmployeesData = await findAllByTestId("employee-data");
  expect(sortedEmployeesData.length).toBe(10);
  global.score += 1;
});

test("Data loads properly", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
    <App />
  );

  await sleep(2000);

  const sortedEmployeesData = await findAllByTestId("employee-data");
  expect(sortedEmployeesData.length).toBe(10);

  var employeesData = [];

  sortedEmployeesData.map((item, index) => {
    var data = getEmployeeElements(sortedEmployeesData[index]);
    employeesData.push(data);
  });

  employeesData.map((el, index) => {
    expect(el.name.textContent.trim()).toBe(highToLowData[index].name);
  });
  global.score += 3;
});


test("High to low sorting works properly", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
    <App />
  );
  const sortButton = getByTestId("sorting-btn");

  await sleep(8000);
  expect(sortButton.textContent.trim()).toBe("Bottom 10 Employees");
  const sortedEmployeesData = await findAllByTestId("employee-data");
  expect(sortedEmployeesData.length).toBe(10);

  var employeesData = [];

  sortedEmployeesData.map((item, index) => {
    var data = getEmployeeElements(sortedEmployeesData[index]);
    employeesData.push(data);
  });

  employeesData.map((el, index) => {
    expect(el.name.textContent.trim()).toBe(highToLowData[index].name);
  });

  global.score += 3;
});

test("Data fetching is correct", async () => {
  fetchMock(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees",
    d[0]
  );
  [(1, 2, 3, 4, 5, 6, 7)].forEach((p) => {
    fetchMock(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${p}`,
      d[p - 1]
    );
  });
  const { getByTestId, findAllByTestId } = render(<App />);
  await sleep(8000);

  const items = await findAllByTestId("employee-data");
  expect(items.length).toBe(10);
  items.forEach((item, i) => {
    const { name, salary } = getEmployeeElements(item);
    expect(name.textContent.trim()).toBe(highToLowData[i].name);
    expect(salary.textContent.trim()).toBe(`${highToLowData[i].salary}`);
  });

  global.score += 2;
});

afterAll(() => {
  console.log("Max marks is, 15");
  console.log("Final Score is", global.score);
});

const sleep = (delay) => new Promise((res) => setTimeout(res, delay));

const d = [
  {
    data: [
      {
        id: 1,
        name: "Abram Langtry",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "female",
        salary: 95000,
      },
      {
        id: 2,
        name: "Flossy Arrell",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 20000,
      },
      {
        id: 3,
        name: "Giorgio Antonioni",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "others",
        salary: 95000,
      },
      {
        id: 4,
        name: "Benji Knapman",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 15000,
      },
      {
        id: 5,
        name: "Thedrick Sigfrid",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 115000,
      },
      {
        id: 6,
        name: "Leonora Pachmann",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "male",
        salary: 140000,
      },
      {
        id: 7,
        name: "Wait Hayworth",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "others",
        salary: 80000,
      },
      {
        id: 8,
        name: "Kalina Bispo",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 60000,
      },
      {
        id: 9,
        name: "Nevile Logan",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "female",
        salary: 145000,
      },
      {
        id: 10,
        name: "Tiffani Deshorts",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "others",
        salary: 40000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 11,
        name: "Waring Pemberton",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 105000,
      },
      {
        id: 12,
        name: "Udall Boston",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 145000,
      },
      {
        id: 13,
        name: "Juliette Macauley",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "female",
        salary: 60000,
      },
      {
        id: 14,
        name: "Dene Teenan",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "female",
        salary: 130000,
      },
      {
        id: 15,
        name: "Shirl St. Clair",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "female",
        salary: 50000,
      },
      {
        id: 16,
        name: "Wilbur Jewett",
        image: "https://imgur.com/9xEcfJj",
        department: "Accounting",
        gender: "male",
        salary: 105000,
      },
      {
        id: 17,
        name: "Ola Desouza",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 70000,
      },
      {
        id: 18,
        name: "Phyllis Tallowin",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "male",
        salary: 45000,
      },
      {
        id: 19,
        name: "Erich Gunther",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "male",
        salary: 75000,
      },
      {
        id: 20,
        name: "Lorna Tacey",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 85000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 21,
        name: "Mendy Burrells",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "others",
        salary: 120000,
      },
      {
        id: 22,
        name: "Rosy Gray",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "others",
        salary: 50000,
      },
      {
        id: 23,
        name: "Angel Abramamov",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 120000,
      },
      {
        id: 24,
        name: "Lewiss Chippindale",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "male",
        salary: 50000,
      },
      {
        id: 25,
        name: "Belinda Renzini",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "others",
        salary: 130000,
      },
      {
        id: 26,
        name: "Korry Champken",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "female",
        salary: 20000,
      },
      {
        id: 27,
        name: "Vale Fenny",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "male",
        salary: 145000,
      },
      {
        id: 28,
        name: "Itch Wagstaff",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "others",
        salary: 95000,
      },
      {
        id: 29,
        name: "Colet Tander",
        image: "https://imgur.com/9xEcfJj",
        department: "Human Resources",
        gender: "others",
        salary: 90000,
      },
      {
        id: 30,
        name: "Keeley Mizzi",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "others",
        salary: 45000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 31,
        name: "Thorny Rasper",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "others",
        salary: 45000,
      },
      {
        id: 32,
        name: "Nev Tinston",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "male",
        salary: 10000,
      },
      {
        id: 33,
        name: "Trevar Shearn",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 95000,
      },
      {
        id: 34,
        name: "Kittie Peschmann",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "female",
        salary: 75000,
      },
      {
        id: 35,
        name: "Rickie Westgate",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "female",
        salary: 75000,
      },
      {
        id: 36,
        name: "Noam Renard",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "female",
        salary: 85000,
      },
      {
        id: 37,
        name: "Brendan Cutill",
        image: "https://imgur.com/9xEcfJj",
        department: "Sales",
        gender: "male",
        salary: 130000,
      },
      {
        id: 38,
        name: "Carney Tripet",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "female",
        salary: 65000,
      },
      {
        id: 39,
        name: "Carlynn Joncic",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "male",
        salary: 15000,
      },
      {
        id: 40,
        name: "Anselma Dybald",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "female",
        salary: 20000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 41,
        name: "Jacki Bathowe",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "others",
        salary: 40000,
      },
      {
        id: 42,
        name: "Clayborn Bithell",
        image: "https://imgur.com/9xEcfJj",
        department: "Human Resources",
        gender: "others",
        salary: 80000,
      },
      {
        id: 43,
        name: "Akim Jaher",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "male",
        salary: 130000,
      },
      {
        id: 44,
        name: "Berty Bengtsson",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "male",
        salary: 75000,
      },
      {
        id: 45,
        name: "Diann Wyley",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "female",
        salary: 100000,
      },
      {
        id: 46,
        name: "Caleb O'Scanlan",
        image: "https://imgur.com/9xEcfJj",
        department: "Accounting",
        gender: "others",
        salary: 25000,
      },
      {
        id: 47,
        name: "Julian Woollam",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 10000,
      },
      {
        id: 48,
        name: "Ondrea Possel",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "female",
        salary: 115000,
      },
      {
        id: 49,
        name: "Eduardo Antognelli",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "female",
        salary: 55000,
      },
      {
        id: 50,
        name: "Dorie Weymont",
        image: "https://imgur.com/9xEcfJj",
        department: "Accounting",
        gender: "others",
        salary: 80000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 51,
        name: "Casar Longmore",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 90000,
      },
      {
        id: 52,
        name: "Verene Grice",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "others",
        salary: 15000,
      },
      {
        id: 53,
        name: "Latashia Merigon",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "female",
        salary: 90000,
      },
      {
        id: 54,
        name: "Russell Robel",
        image: "https://imgur.com/9xEcfJj",
        department: "Sales",
        gender: "male",
        salary: 70000,
      },
      {
        id: 55,
        name: "Imogen Tinton",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 95000,
      },
      {
        id: 56,
        name: "Stanfield Ind",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "male",
        salary: 130000,
      },
      {
        id: 57,
        name: "Taber Czadla",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 130000,
      },
      {
        id: 58,
        name: "Joceline Obee",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 105000,
      },
      {
        id: 59,
        name: "Timmie Paulino",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "male",
        salary: 145000,
      },
      {
        id: 60,
        name: "Ciel Taree",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "male",
        salary: 20000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 61,
        name: "Lesly Janousek",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 25000,
      },
      {
        id: 62,
        name: "Corey Whitsun",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 150000,
      },
      {
        id: 63,
        name: "Cosimo Heistermann",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "others",
        salary: 60000,
      },
      {
        id: 64,
        name: "Erek Giorgielli",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "male",
        salary: 85000,
      },
      {
        id: 65,
        name: "Fidelia Manilo",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 120000,
      },
      {
        id: 66,
        name: "Yoshi Gary",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "female",
        salary: 130000,
      },
      {
        id: 67,
        name: "Riccardo Michell",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 105000,
      },
      {
        id: 68,
        name: "Colly Kernoghan",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 20000,
      },
      {
        id: 69,
        name: "Allys Sangwin",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "female",
        salary: 45000,
      },
      {
        id: 70,
        name: "Norri Pechold",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "female",
        salary: 30000,
      },
    ],
    totalPages: 7,
  },
];

const d2 = [
  {
    data: [
      {
        id: 1,
        name: "Rahul Langtry",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "female",
        salary: 9500,
      },
      {
        id: 2,
        name: "Flower Arrell",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 20000,
      },
      {
        id: 3,
        name: "Giorgio Antonioni",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "others",
        salary: 9500,
      },
      {
        id: 4,
        name: "Anil Knapman",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 1500,
      },
      {
        id: 5,
        name: "Theodore Sigfrid",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 11000,
      },
      {
        id: 6,
        name: "LeonLunaora Pachmann",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "male",
        salary: 14000,
      },
      {
        id: 7,
        name: "Wat Hayworth",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "others",
        salary: 8000,
      },
      {
        id: 8,
        name: "Kalina Bispo",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 600000,
      },
      {
        id: 9,
        name: "Nevile Rose",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "female",
        salary: 1450000,
      },
      {
        id: 10,
        name: "Tiffani Deshorts",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "others",
        salary: 400090,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 11,
        name: "Warning longbottom",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 105000,
      },
      {
        id: 12,
        name: "Uday Boston",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 14500,
      },
      {
        id: 13,
        name: "Juicy Macauley",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "female",
        salary: 6000,
      },
      {
        id: 14,
        name: "Diana Teenan",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "female",
        salary: 130000,
      },
      {
        id: 15,
        name: "Shirl St. Clair",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "female",
        salary: 50000,
      },
      {
        id: 16,
        name: "Wilbur Jewett",
        image: "https://imgur.com/9xEcfJj",
        department: "Accounting",
        gender: "male",
        salary: 105000,
      },
      {
        id: 17,
        name: "Ola Desouza",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 70000,
      },
      {
        id: 18,
        name: "Syphilis Tallowin",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "male",
        salary: 45000,
      },
      {
        id: 19,
        name: "Erich Gunther",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "male",
        salary: 72000,
      },
      {
        id: 20,
        name: "Lorna Tacey",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 5000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 21,
        name: "Mendy Burrells",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "others",
        salary: 20000,
      },
      {
        id: 22,
        name: "Rosy Gray",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "others",
        salary: 500000,
      },
      {
        id: 23,
        name: "Angel Abramamov",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 1200000,
      },
      {
        id: 24,
        name: "Levis Chippindale",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "male",
        salary: 500000,
      },
      {
        id: 25,
        name: "Rosi Renzini",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "others",
        salary: 100000,
      },
      {
        id: 26,
        name: "Korry Champken",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "female",
        salary: 20000,
      },
      {
        id: 27,
        name: "Kale Venny",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "male",
        salary: 15000,
      },
      {
        id: 28,
        name: "Itchy Wagstaff",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "others",
        salary: 9005000,
      },
      {
        id: 29,
        name: "Colet Tander",
        image: "https://imgur.com/9xEcfJj",
        department: "Human Resources",
        gender: "others",
        salary: 80000,
      },
      {
        id: 30,
        name: "Keley Mizzi",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "others",
        salary: 45000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 31,
        name: "Thor Rasper",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "others",
        salary: 500,
      },
      {
        id: 32,
        name: "Nev Tinston",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "male",
        salary: 10000,
      },
      {
        id: 33,
        name: "Trevar Sharma",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 95000,
      },
      {
        id: 34,
        name: "Katty Peschmann",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "female",
        salary: 73000,
      },
      {
        id: 35,
        name: "Rickie Westgate",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "female",
        salary: 75000,
      },
      {
        id: 36,
        name: "Noah Renard",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "female",
        salary: 78890,
      },
      {
        id: 37,
        name: "Bran Cutill",
        image: "https://imgur.com/9xEcfJj",
        department: "Sales",
        gender: "male",
        salary: 1030000,
      },
      {
        id: 38,
        name: "Carney Tripet",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "female",
        salary: 65000,
      },
      {
        id: 39,
        name: "Carlynn Joncic",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "male",
        salary: 15000,
      },
      {
        id: 40,
        name: "Anselma Dybald",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "female",
        salary: 20000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 41,
        name: "Jacky Bathowe",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "others",
        salary: 400000,
      },
      {
        id: 42,
        name: "Clay Bithell",
        image: "https://imgur.com/9xEcfJj",
        department: "Human Resources",
        gender: "others",
        salary: 80000,
      },
      {
        id: 43,
        name: "Akky Bhie",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "male",
        salary: 130000,
      },
      {
        id: 44,
        name: "Berty Bengtsson",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "male",
        salary: 75000,
      },
      {
        id: 45,
        name: "Diann Wyley",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "female",
        salary: 100000,
      },
      {
        id: 46,
        name: "Caleb O'Scanlan",
        image: "https://imgur.com/9xEcfJj",
        department: "Accounting",
        gender: "others",
        salary: 25000,
      },
      {
        id: 47,
        name: "Julian Woollam",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "others",
        salary: 10000,
      },
      {
        id: 48,
        name: "Ondrea Possel",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "female",
        salary: 115000,
      },
      {
        id: 49,
        name: "Eduardo Antognelli",
        image: "https://imgur.com/9xEcfJj",
        department: "Services",
        gender: "female",
        salary: 55000,
      },
      {
        id: 50,
        name: "Dorie Weymont",
        image: "https://imgur.com/9xEcfJj",
        department: "Accounting",
        gender: "others",
        salary: 80000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 51,
        name: "Casar Longmore",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 90000,
      },
      {
        id: 52,
        name: "Verene Grice",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "others",
        salary: 15000,
      },
      {
        id: 53,
        name: "Latashia Merigon",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "female",
        salary: 90000,
      },
      {
        id: 54,
        name: "Russell Robel",
        image: "https://imgur.com/9xEcfJj",
        department: "Sales",
        gender: "male",
        salary: 70000,
      },
      {
        id: 55,
        name: "Imogen Tinton",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 95000,
      },
      {
        id: 56,
        name: "Stanfield Ind",
        image: "https://imgur.com/9xEcfJj",
        department: "Product Management",
        gender: "male",
        salary: 130000,
      },
      {
        id: 57,
        name: "Taber Czadla",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "male",
        salary: 130000,
      },
      {
        id: 58,
        name: "Joceline Obee",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 105000,
      },
      {
        id: 59,
        name: "Timmie Paulino",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "male",
        salary: 145000,
      },
      {
        id: 60,
        name: "Ciel Taree",
        image: "https://imgur.com/9xEcfJj",
        department: "Legal",
        gender: "male",
        salary: 20000,
      },
    ],
    totalPages: 7,
  },
  {
    data: [
      {
        id: 61,
        name: "Lesly Janousek",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "male",
        salary: 25000,
      },
      {
        id: 62,
        name: "Corey Whitsun",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 150000,
      },
      {
        id: 63,
        name: "Cosimo Heistermann",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "others",
        salary: 60000,
      },
      {
        id: 64,
        name: "Erek Giorgielli",
        image: "https://imgur.com/9xEcfJj",
        department: "Support",
        gender: "male",
        salary: 85000,
      },
      {
        id: 65,
        name: "Fidelia Manilo",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 120000,
      },
      {
        id: 66,
        name: "Yoshi Gary",
        image: "https://imgur.com/9xEcfJj",
        department: "Training",
        gender: "female",
        salary: 130000,
      },
      {
        id: 67,
        name: "Riccardo Michell",
        image: "https://imgur.com/9xEcfJj",
        department: "Marketing",
        gender: "others",
        salary: 105000,
      },
      {
        id: 68,
        name: "Colly Kernoghan",
        image: "https://imgur.com/9xEcfJj",
        department: "Engineering",
        gender: "others",
        salary: 20000,
      },
      {
        id: 69,
        name: "Allys Sangwin",
        image: "https://imgur.com/9xEcfJj",
        department: "Business Development",
        gender: "female",
        salary: 45000,
      },
      {
        id: 70,
        name: "Norri Pechold",
        image: "https://imgur.com/9xEcfJj",
        department: "Research and Development",
        gender: "female",
        salary: 30000,
      },
    ],
    totalPages: 7,
  },
];

const highToLowData = [
  {
    id: 62,
    name: "Corey Whitsun",
    image: "https://imgur.com/9xEcfJj",
    department: "Engineering",
    gender: "others",
    salary: 150000,
  },
  {
    id: 9,
    name: "Nevile Logan",
    image: "https://imgur.com/9xEcfJj",
    department: "Support",
    gender: "female",
    salary: 145000,
  },
  {
    id: 12,
    name: "Udall Boston",
    image: "https://imgur.com/9xEcfJj",
    department: "Business Development",
    gender: "male",
    salary: 145000,
  },
  {
    id: 27,
    name: "Vale Fenny",
    image: "https://imgur.com/9xEcfJj",
    department: "Services",
    gender: "male",
    salary: 145000,
  },
  {
    id: 59,
    name: "Timmie Paulino",
    image: "https://imgur.com/9xEcfJj",
    department: "Marketing",
    gender: "male",
    salary: 145000,
  },
  {
    id: 6,
    name: "Leonora Pachmann",
    image: "https://imgur.com/9xEcfJj",
    department: "Training",
    gender: "male",
    salary: 140000,
  },
  {
    id: 14,
    name: "Dene Teenan",
    image: "https://imgur.com/9xEcfJj",
    department: "Services",
    gender: "female",
    salary: 130000,
  },
  {
    id: 25,
    name: "Belinda Renzini",
    image: "https://imgur.com/9xEcfJj",
    department: "Training",
    gender: "others",
    salary: 130000,
  },
  {
    id: 37,
    name: "Brendan Cutill",
    image: "https://imgur.com/9xEcfJj",
    department: "Sales",
    gender: "male",
    salary: 130000,
  },
  {
    id: 43,
    name: "Akim Jaher",
    image: "https://imgur.com/9xEcfJj",
    department: "Services",
    gender: "male",
    salary: 130000,
  },
];

const lowToHighData = [
  {
    id: 32,
    name: "Nev Tinston",
    image: "https://imgur.com/9xEcfJj",
    department: "Product Management",
    gender: "male",
    salary: 10000,
  },
  {
    id: 47,
    name: "Julian Woollam",
    image: "https://imgur.com/9xEcfJj",
    department: "Product Management",
    gender: "others",
    salary: 10000,
  },
  {
    id: 4,
    name: "Benji Knapman",
    image: "https://imgur.com/9xEcfJj",
    department: "Research and Development",
    gender: "male",
    salary: 15000,
  },
  {
    id: 39,
    name: "Carlynn Joncic",
    image: "https://imgur.com/9xEcfJj",
    department: "Engineering",
    gender: "male",
    salary: 15000,
  },
  {
    id: 52,
    name: "Verene Grice",
    image: "https://imgur.com/9xEcfJj",
    department: "Training",
    gender: "others",
    salary: 15000,
  },
  {
    id: 2,
    name: "Flossy Arrell",
    image: "https://imgur.com/9xEcfJj",
    department: "Product Management",
    gender: "others",
    salary: 20000,
  },
  {
    id: 26,
    name: "Korry Champken",
    image: "https://imgur.com/9xEcfJj",
    department: "Research and Development",
    gender: "female",
    salary: 20000,
  },
  {
    id: 40,
    name: "Anselma Dybald",
    image: "https://imgur.com/9xEcfJj",
    department: "Training",
    gender: "female",
    salary: 20000,
  },
  {
    id: 60,
    name: "Ciel Taree",
    image: "https://imgur.com/9xEcfJj",
    department: "Legal",
    gender: "male",
    salary: 20000,
  },
  {
    id: 68,
    name: "Colly Kernoghan",
    image: "https://imgur.com/9xEcfJj",
    department: "Engineering",
    gender: "others",
    salary: 20000,
  },
];
