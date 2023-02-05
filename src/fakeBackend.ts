import { QueryClient } from "@tanstack/react-query";

export const producers = [
  {
    id: 1,
    name: "Producer number 1",
    categoriesIds: [13, 34, 92, 32, 31],
  },
  {
    id: 2,
    name: "Producer number 2",
    categoriesIds: [7, 76],
  },
  {
    id: 3,
    name: "Producer number 3",
    categoriesIds: [96, 54],
  },
  {
    id: 4,
    name: "Producer number 4",
    categoriesIds: [19, 90, 61, 68, 3, 78],
  },
  {
    id: 5,
    name: "Producer number 5",
    categoriesIds: [51, 32, 65],
  },
  {
    id: 6,
    name: "Producer number 6",
    categoriesIds: [66, 13, 9, 55, 3],
  },
  {
    id: 7,
    name: "Producer number 7",
    categoriesIds: [95, 10],
  },
  {
    id: 8,
    name: "Producer number 8",
    categoriesIds: [63, 19, 30],
  },
  {
    id: 9,
    name: "Producer number 9",
    categoriesIds: [48, 37, 22, 53, 39],
  },
  {
    id: 10,
    name: "Producer number 10",
    categoriesIds: [27, 25],
  },
  {
    id: 11,
    name: "Producer number 11",
    categoriesIds: [81, 96, 93, 98, 33],
  },
  {
    id: 12,
    name: "Producer number 12",
    categoriesIds: [51, 71],
  },
  {
    id: 13,
    name: "Producer number 13",
    categoriesIds: [43, 97, 40],
  },
  {
    id: 14,
    name: "Producer number 14",
    categoriesIds: [8, 70],
  },
  {
    id: 15,
    name: "Producer number 15",
    categoriesIds: [54, 37],
  },
  {
    id: 16,
    name: "Producer number 16",
    categoriesIds: [87, 25, 38, 35, 41],
  },
  {
    id: 17,
    name: "Producer number 17",
    categoriesIds: [46, 6, 14, 16],
  },
  {
    id: 18,
    name: "Producer number 18",
    categoriesIds: [45, 89, 20, 32],
  },
  {
    id: 19,
    name: "Producer number 19",
    categoriesIds: [75, 47, 10, 61, 9],
  },
  {
    id: 20,
    name: "Producer number 20",
    categoriesIds: [61, 60, 26, 99],
  },
  {
    id: 21,
    name: "Producer number 21",
    categoriesIds: [37, 77, 29],
  },
  {
    id: 22,
    name: "Producer number 22",
    categoriesIds: [75, 80, 45],
  },
  {
    id: 23,
    name: "Producer number 23",
    categoriesIds: [46, 25, 21, 82],
  },
  {
    id: 24,
    name: "Producer number 24",
    categoriesIds: [58, 46, 80, 50],
  },
  {
    id: 25,
    name: "Producer number 25",
    categoriesIds: [98, 46],
  },
  {
    id: 26,
    name: "Producer number 26",
    categoriesIds: [56, 52, 72, 63, 77, 4, 55],
  },
  {
    id: 27,
    name: "Producer number 27",
    categoriesIds: [15, 11, 71, 94, 100],
  },
  {
    id: 28,
    name: "Producer number 28",
    categoriesIds: [51, 61, 16, 98],
  },
  {
    id: 29,
    name: "Producer number 29",
    categoriesIds: [98, 73, 3],
  },
  {
    id: 30,
    name: "Producer number 30",
    categoriesIds: [91, 37, 26],
  },
  {
    id: 31,
    name: "Producer number 31",
    categoriesIds: [63, 43, 36, 96, 80, 21, 18, 100],
  },
  {
    id: 32,
    name: "Producer number 32",
    categoriesIds: [45, 42, 43, 75, 1, 67, 98],
  },
  {
    id: 33,
    name: "Producer number 33",
    categoriesIds: [56, 54, 30, 20, 92],
  },
  {
    id: 34,
    name: "Producer number 34",
    categoriesIds: [77, 98],
  },
  {
    id: 35,
    name: "Producer number 35",
    categoriesIds: [89, 46, 20, 23],
  },
  {
    id: 36,
    name: "Producer number 36",
    categoriesIds: [68, 16, 65, 9, 47],
  },
  {
    id: 37,
    name: "Producer number 37",
    categoriesIds: [28, 4, 64],
  },
  {
    id: 38,
    name: "Producer number 38",
    categoriesIds: [69, 90, 53, 51, 42, 95, 49, 26],
  },
  {
    id: 39,
    name: "Producer number 39",
    categoriesIds: [2, 99, 52],
  },
  {
    id: 40,
    name: "Producer number 40",
    categoriesIds: [44, 75, 72, 10, 86, 82],
  },
  {
    id: 41,
    name: "Producer number 41",
    categoriesIds: [21, 10, 97, 99],
  },
  {
    id: 42,
    name: "Producer number 42",
    categoriesIds: [33, 44],
  },
  {
    id: 43,
    name: "Producer number 43",
    categoriesIds: [69, 96, 48, 50],
  },
  {
    id: 44,
    name: "Producer number 44",
    categoriesIds: [58],
  },
  {
    id: 45,
    name: "Producer number 45",
    categoriesIds: [92],
  },
  {
    id: 46,
    name: "Producer number 46",
    categoriesIds: [30, 27, 34, 1],
  },
  {
    id: 47,
    name: "Producer number 47",
    categoriesIds: [96, 16],
  },
  {
    id: 48,
    name: "Producer number 48",
    categoriesIds: [88, 98, 87],
  },
  {
    id: 49,
    name: "Producer number 49",
    categoriesIds: [46, 92, 88, 37, 47],
  },
];

export const categories = [
  {
    id: 1,
    name: "Category number 1",
    producerIds: [13, 9, 42, 15, 40],
  },
  {
    id: 2,
    name: "Category number 2",
    producerIds: [12, 38, 5, 10],
  },
  {
    id: 3,
    name: "Category number 3",
    producerIds: [24],
  },
  {
    id: 4,
    name: "Category number 4",
    producerIds: [14, 3, 36, 42, 29],
  },
  {
    id: 5,
    name: "Category number 5",
    producerIds: [32, 10, 33, 13, 17],
  },
  {
    id: 6,
    name: "Category number 6",
    producerIds: [43, 30, 5],
  },
  {
    id: 7,
    name: "Category number 7",
    producerIds: [42, 23, 25, 29],
  },
  {
    id: 8,
    name: "Category number 8",
    producerIds: [37, 14, 46],
  },
  {
    id: 9,
    name: "Category number 9",
    producerIds: [21, 42, 36, 27],
  },
  {
    id: 10,
    name: "Category number 10",
    producerIds: [32, 47],
  },
  {
    id: 11,
    name: "Category number 11",
    producerIds: [34, 18, 17, 13, 27, 8],
  },
  {
    id: 12,
    name: "Category number 12",
    producerIds: [21, 27, 22, 15, 16, 14],
  },
  {
    id: 13,
    name: "Category number 13",
    producerIds: [14, 26, 2],
  },
  {
    id: 14,
    name: "Category number 14",
    producerIds: [37, 22, 39, 18, 45],
  },
  {
    id: 15,
    name: "Category number 15",
    producerIds: [24, 7, 45, 37],
  },
  {
    id: 16,
    name: "Category number 16",
    producerIds: [12, 23, 38],
  },
  {
    id: 17,
    name: "Category number 17",
    producerIds: [47, 31, 36, 8, 45],
  },
  {
    id: 18,
    name: "Category number 18",
    producerIds: [8],
  },
  {
    id: 19,
    name: "Category number 19",
    producerIds: [19, 45, 35],
  },
  {
    id: 20,
    name: "Category number 20",
    producerIds: [27, 7, 41],
  },
  {
    id: 21,
    name: "Category number 21",
    producerIds: [7, 20, 44, 37, 27],
  },
  {
    id: 22,
    name: "Category number 22",
    producerIds: [36],
  },
  {
    id: 23,
    name: "Category number 23",
    producerIds: [10, 37],
  },
  {
    id: 24,
    name: "Category number 24",
    producerIds: [25, 37],
  },
  {
    id: 25,
    name: "Category number 25",
    producerIds: [15, 39, 33, 25, 7, 17],
  },
  {
    id: 26,
    name: "Category number 26",
    producerIds: [20, 25, 32],
  },
  {
    id: 27,
    name: "Category number 27",
    producerIds: [10, 19, 27, 6],
  },
  {
    id: 28,
    name: "Category number 28",
    producerIds: [23, 40, 35, 5, 9, 25, 7, 19, 39],
  },
  {
    id: 29,
    name: "Category number 29",
    producerIds: [26, 40, 28, 39],
  },
  {
    id: 30,
    name: "Category number 30",
    producerIds: [12, 27, 39, 28, 48, 44, 23],
  },
  {
    id: 31,
    name: "Category number 31",
    producerIds: [27, 34, 17, 35, 19, 32, 31, 13],
  },
  {
    id: 32,
    name: "Category number 32",
    producerIds: [33, 9],
  },
  {
    id: 33,
    name: "Category number 33",
    producerIds: [20, 27, 5, 8, 43, 40, 24, 37],
  },
  {
    id: 34,
    name: "Category number 34",
    producerIds: [23, 31, 43, 17, 22, 25, 36],
  },
  {
    id: 35,
    name: "Category number 35",
    producerIds: [28, 33, 27, 3, 12, 31, 34, 26, 46, 25],
  },
  {
    id: 36,
    name: "Category number 36",
    producerIds: [23, 40, 45, 21, 9, 42, 30, 15],
  },
  {
    id: 37,
    name: "Category number 37",
    producerIds: [28, 1],
  },
  {
    id: 38,
    name: "Category number 38",
    producerIds: [13, 15, 33],
  },
  {
    id: 39,
    name: "Category number 39",
    producerIds: [9, 2, 35],
  },
  {
    id: 40,
    name: "Category number 40",
    producerIds: [9, 41, 43, 46],
  },
  {
    id: 41,
    name: "Category number 41",
    producerIds: [19, 7, 30, 4],
  },
  {
    id: 42,
    name: "Category number 42",
    producerIds: [24, 7, 20],
  },
  {
    id: 43,
    name: "Category number 43",
    producerIds: [7, 33, 32],
  },
  {
    id: 44,
    name: "Category number 44",
    producerIds: [41, 12, 9],
  },
  {
    id: 45,
    name: "Category number 45",
    producerIds: [39, 37, 18, 33],
  },
  {
    id: 46,
    name: "Category number 46",
    producerIds: [23, 37, 8, 22, 42],
  },
  {
    id: 47,
    name: "Category number 47",
    producerIds: [37, 8],
  },
  {
    id: 48,
    name: "Category number 48",
    producerIds: [33, 16, 42, 35],
  },
  {
    id: 49,
    name: "Category number 49",
    producerIds: [15, 24],
  },
  {
    id: 50,
    name: "Category number 50",
    producerIds: [9, 35],
  },
  {
    id: 51,
    name: "Category number 51",
    producerIds: [39, 15, 30, 32],
  },
  {
    id: 52,
    name: "Category number 52",
    producerIds: [17],
  },
  {
    id: 53,
    name: "Category number 53",
    producerIds: [18, 44, 32],
  },
  {
    id: 54,
    name: "Category number 54",
    producerIds: [4, 33, 27, 20, 7, 26],
  },
  {
    id: 55,
    name: "Category number 55",
    producerIds: [18, 7, 9],
  },
  {
    id: 56,
    name: "Category number 56",
    producerIds: [28, 9, 44, 7, 25, 20, 19, 23],
  },
  {
    id: 57,
    name: "Category number 57",
    producerIds: [24],
  },
  {
    id: 58,
    name: "Category number 58",
    producerIds: [6, 27, 3, 39, 13],
  },
  {
    id: 59,
    name: "Category number 59",
    producerIds: [8, 37, 10],
  },
  {
    id: 60,
    name: "Category number 60",
    producerIds: [16, 6, 46, 17, 35],
  },
  {
    id: 61,
    name: "Category number 61",
    producerIds: [11],
  },
  {
    id: 62,
    name: "Category number 62",
    producerIds: [29, 39],
  },
  {
    id: 63,
    name: "Category number 63",
    producerIds: [24, 32, 36, 40, 18, 21, 19],
  },
  {
    id: 64,
    name: "Category number 64",
    producerIds: [39, 18, 45],
  },
  {
    id: 65,
    name: "Category number 65",
    producerIds: [20, 34, 36, 9],
  },
  {
    id: 66,
    name: "Category number 66",
    producerIds: [11, 13, 34],
  },
  {
    id: 67,
    name: "Category number 67",
    producerIds: [30, 5, 33, 27],
  },
  {
    id: 68,
    name: "Category number 68",
    producerIds: [23, 8, 16],
  },
  {
    id: 69,
    name: "Category number 69",
    producerIds: [37, 48, 34],
  },
  {
    id: 70,
    name: "Category number 70",
    producerIds: [10],
  },
  {
    id: 71,
    name: "Category number 71",
    producerIds: [9, 13, 4, 17, 44, 38],
  },
  {
    id: 72,
    name: "Category number 72",
    producerIds: [28],
  },
  {
    id: 73,
    name: "Category number 73",
    producerIds: [4, 36, 45, 46],
  },
  {
    id: 74,
    name: "Category number 74",
    producerIds: [1, 39, 14, 29, 10],
  },
  {
    id: 75,
    name: "Category number 75",
    producerIds: [5, 10, 34, 37],
  },
  {
    id: 76,
    name: "Category number 76",
    producerIds: [44, 16, 9],
  },
  {
    id: 77,
    name: "Category number 77",
    producerIds: [1, 42, 6, 3],
  },
  {
    id: 78,
    name: "Category number 78",
    producerIds: [20, 22, 16, 40, 26, 12, 18],
  },
  {
    id: 79,
    name: "Category number 79",
    producerIds: [2, 34, 39],
  },
  {
    id: 80,
    name: "Category number 80",
    producerIds: [43, 11, 21, 8, 5],
  },
  {
    id: 81,
    name: "Category number 81",
    producerIds: [1, 7, 46, 20],
  },
  {
    id: 82,
    name: "Category number 82",
    producerIds: [43, 36, 37, 46, 28, 44],
  },
  {
    id: 83,
    name: "Category number 83",
    producerIds: [20, 9, 42, 47, 43],
  },
  {
    id: 84,
    name: "Category number 84",
    producerIds: [9, 22, 37],
  },
  {
    id: 85,
    name: "Category number 85",
    producerIds: [40, 2, 26, 13, 25, 17],
  },
  {
    id: 86,
    name: "Category number 86",
    producerIds: [29, 7],
  },
  {
    id: 87,
    name: "Category number 87",
    producerIds: [40, 42, 12],
  },
  {
    id: 88,
    name: "Category number 88",
    producerIds: [15, 16, 42, 29, 13, 33],
  },
  {
    id: 89,
    name: "Category number 89",
    producerIds: [33, 2, 47, 28, 32, 1],
  },
  {
    id: 90,
    name: "Category number 90",
    producerIds: [3, 11, 13, 42, 14, 10, 46],
  },
  {
    id: 91,
    name: "Category number 91",
    producerIds: [41, 25, 33, 10, 7, 29],
  },
  {
    id: 92,
    name: "Category number 92",
    producerIds: [45, 42, 21],
  },
  {
    id: 93,
    name: "Category number 93",
    producerIds: [20],
  },
  {
    id: 94,
    name: "Category number 94",
    producerIds: [17, 47, 42, 1, 14, 10, 24],
  },
  {
    id: 95,
    name: "Category number 95",
    producerIds: [8, 48, 46, 30, 3],
  },
  {
    id: 96,
    name: "Category number 96",
    producerIds: [39, 19, 16, 44, 30, 35, 24],
  },
  {
    id: 97,
    name: "Category number 97",
    producerIds: [14, 7],
  },
  {
    id: 98,
    name: "Category number 98",
    producerIds: [1, 17, 24],
  },
  {
    id: 99,
    name: "Category number 99",
    producerIds: [30, 32, 11, 33, 27, 2],
  },
  {
    id: 100,
    name: "Category number 100",
    producerIds: [9, 17, 38, 45, 11, 42, 37],
  },
];

export const getProducerCategories = (id: number) => {
  if (!id) return categories;

  const producer = producers.find((manufacturer) => manufacturer.id === id);

  if (producer) {
    const categoriesData: any[] = [];

    producer.categoriesIds.forEach((category) => {
      categoriesData.push(categories.find((cat) => cat.id === category));
    });

    categoriesData.forEach((category) => {
      category.producerIds = Array.from(new Set([...category.producerIds, id]));
    });

    return categoriesData;
  }
};

export const getCategoryProducers = (id: number) => {
  if (!id) return producers;

  const category = categories.find((category) => category.id === id);

  if (category) {
    const producersData: any[] = [];

    category.producerIds.forEach((producer) => {
      producersData.push(producers.find((prod) => prod.id === producer));
    });

    producersData.forEach((producer) => {
      producer.categoriesIds = Array.from(
        new Set([...producer.categoriesIds, id])
      );
    });

    return producersData;
  }
};
