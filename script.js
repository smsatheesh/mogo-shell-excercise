// Section 1: What is MongoDB?

db.prodcts.insertOne({ name: "Max" });

db.products.updateOne({ name: "Max" }, { $set: { price: 100 } });

db.products.find().pretty();

db.products.updateOne(
  { name: "Max" },
  {
    $set: {
      description: "This is just a beginning",
      name: "A Book!",
      test: "",
    },
  },
);

db.products.updateOne(
  {
    name: "A Book!",
  },
  {
    $unset: {
      test: 1,
    },
  },
);

db.products.insertOne({
  name: "T-shirt",
  price: 100.99,
  description: "This is a high quality t-shirt",
});

db.products.insertOne({
  name: "Computer",
  price: 320000.99,
  description: "This is a high qulaity computer",
  details: {
    cpu: "OS 3.2 GHz",
    ram: "32 GB",
    storage: "1 TB",
    model: "Macbook M4 Pro",
  },
});

// Section 2: Database & CRUD Basics

const flightData = [
  {
    departureAirport: "MUC",
    arrivalAirport: "SFO",
    aircraft: "Airbus A380",
    distance: 12000,
    intercontinental: true,
  },
  {
    departureAirport: "LHR",
    arrivalAirport: "TXL",
    aircraft: "Airbus A320",
    distance: 950,
    intercontinental: false,
  },
];

db.flightData.insertOne({
  departureAirport: "MUC",
  arrivalAirport: "SFO",
  aircraft: "Airbus A380",
  distance: 12000,
  intercontinental: true,
});

db.flightData.insertOne({
  departureAirport: "LHR",
  arrivalAirport: "TXL",
  aircraft: "Airbus A320",
  distance: 950,
  intercontinental: false,
});

db.flightData.insertOne({ departureAirport: "TXL", arrivalAirport: "LHR" });

db.flightData.insertOne({
  departureAirport: "TXL",
  arrivalAirport: "LHR",
  _id: "txl-1hr-1",
});

db.flightData.deleteMany({});

db.flightData.deleteOne({ _id: ObjectId("6a07e4890ae9bc37a32f021a") });

db.flightData.deleteOne({ departureAirport: "MUC" });

db.flightData.deleteOne({ _id: "txl-1hr-1" });

db.flightData.updateOne(
  { distance: { $gt: 500 } },
  { $set: { marker: "deleted" } },
);

db.flightData.updateMany(
  {
    distance: { $gt: 0 },
  },
  {
    $set: {
      marker: "toDelete",
    },
  },
);

db.flightData.deleteMany({ marker: "toDelete" });

db.flightData.insertMany([
  {
    departureAirport: "MUC",
    arrivalAirport: "SFO",
    aircraft: "Airbus A380",
    distance: 12000,
    intercontinental: true,
  },
  {
    departureAirport: "LHR",
    arrivalAirport: "TXL",
    aircraft: "Airbus A320",
    distance: 950,
    intercontinental: false,
  },
]);

db.flightData.find({ name: "Max" });

db.flightData.find({ intercontinental: true });

db.flightData.find({ intercontinental: false });

db.flightData.find({ distance: { $gt: 1000 } });

db.flightData.find({ distance: { $gt: 100 } });

db.flightData.findOne({ distance: { $gt: 100 } });

db.flightData.findOne(
  { distance: { $gt: 100 } },
  {},
  { sort: { distance: 1 } },
);

db.flightData.findOne(
  { distance: { $gt: 100 } },
  { departureAirport: 1, arrivalAirport: 1, distanceL: 1 },
  { sort: { distance: 1 } },
);

db.flightData.findOne(
  { distance: { $gt: 100 } },
  { departureAirport: 1, arrivalAirport: 1, distanceL: 1, _id: 0 },
  { sort: { distance: 1 } },
);

db.flightData.updateOne(
  {
    _id: ObjectId("6a07e9f90ae9bc37a32f021c"),
  },
  {
    $set: {
      toLate: true,
    },
  },
);

db.flightData.updateOne(
  {
    _id: ObjectId("6a07e9f90ae9bc37a32f021c"),
  },
  {
    $unset: {
      toLate: 1,
    },
  },
);

db.flightData.updateOne(
  {
    _id: ObjectId("6a07e9f90ae9bc37a32f021c"),
  },
  {
    $set: {
      isDelayed: true,
    },
  },
);

db.flightData.updateOne(
  {
    _id: ObjectId("6a07e9f90ae9bc37a32f021c"),
  },
  {
    $set: {
      isDelayed: false,
    },
  },
);

db.flightData.update(
  {
    _id: ObjectId("6a07e9f90ae9bc37a32f021c"),
  },
  {
    $set: {
      isDelayed: false,
    },
  },
);

db.flightData.replaceOne(
  {
    _id: ObjectId("6a07e9f90ae9bc37a32f021d"),
  },
  {
    departureAirport: "LHR",
    arrivalAirport: "TXL",
    aircraft: "Airbus A330",
    distance: 940,
    intercontinental: false,
    isDelayed: false,
  },
);

db.passengers.insertMany([
  {
    name: "Max Schwarzmueller",
    age: 29,
  },
  {
    name: "Manu Lorenz",
    age: 30,
  },
  {
    name: "Chris Hayton",
    age: 35,
  },
  {
    name: "Sandeep Kumar",
    age: 28,
  },
  {
    name: "Maria Jones",
    age: 30,
  },
  {
    name: "Alexandra Maier",
    age: 27,
  },
  {
    name: "Dr. Phil Evans",
    age: 47,
  },
  {
    name: "Sandra Brugge",
    age: 33,
  },
  {
    name: "Elisabeth Mayr",
    age: 29,
  },
  {
    name: "Frank Cube",
    age: 41,
  },
  {
    name: "Karandeep Alun",
    age: 48,
  },
  {
    name: "Michaela Drayer",
    age: 39,
  },
  {
    name: "Bernd Hoftstadt",
    age: 22,
  },
  {
    name: "Scott Tolib",
    age: 44,
  },
  {
    name: "Freddy Melver",
    age: 41,
  },
  {
    name: "Alexis Bohed",
    age: 35,
  },
  {
    name: "Melanie Palace",
    age: 27,
  },
  {
    name: "Armin Glutch",
    age: 35,
  },
  {
    name: "Klaus Arber",
    age: 53,
  },
  {
    name: "Albert Twostone",
    age: 68,
  },
  {
    name: "Gordon Black",
    age: 38,
  },
]);

db.passengers.find(); //* Retuns a cursor object

db.passengers.find().toArray(); //* Retuns all documents as an array in the collection

db.passengers.find().forEach((passenger) => printjson(passenger)); //* Retuns all documents as an array in the collection

db.passengers.findOne().pretty();

db.passengers.find({}, { name: 1 });

db.passengers.find({}, { name: 1, _id: 0 });

db.passengers.find({}, { name: 1, _id: 0 }, { sort: { name: -1 } });

db.passengers.find({}, { name: 1, _id: 0 }, { sort: { name: 1 } });

db.flightData.updateMany(
  {},
  {
    $set: {
      status: {
        description: "On time",
        lastUpdated: "1 hour ago",
      },
    },
  },
);

db.flightData.updateMany(
  {},
  {
    $set: {
      status: {
        description: "On time",
        lastUpdated: "1 hour ago",
        details: {
          responsible: "S M Satheesh",
        },
      },
    },
  },
);

db.passengers.updateOne(
  {
    name: "Albert Twostone",
  },
  {
    $set: {
      hobbies: ["Cooking", "Traveling", "Reading"],
    },
  },
);

db.passengers.findOne({ name: "Albert Twostone" }).hobbies;

db.passengers.find({ hobbies: "Cooking" }).pretty();

db.flightData.findOne().status;

db.flightData.find({}, { status: 1, _id: 0 });

db.flightData.find({ "status.description": "On time" });

db.flightData.find({ "status.description": RegExp("On") });

db.flightData.find({
  "status.details.responsible": "S M Satheesh",
});

//* EXCERCISES
db.patients.insertMany([
  {
    firstName: "Raj",
    lastName: "Kumar",
    age: 40,
    history: [
      {
        disease: "Diabetes",
        diagnosedOn: "2015-06-15",
        treatment: "Insulin therapy",
      },
    ],
  },
  {
    firstName: "Anita",
    lastName: "Sharma",
    age: 35,
    history: [
      {
        disease: "Hypertension",
        diagnosedOn: "2018-03-20",
        treatment: "Lifestyle changes and medication",
      },
    ],
  },
  {
    firstName: "Vikram",
    lastName: "Singh",
    age: 50,
    history: [
      {
        disease: "Asthma",
        diagnosedOn: "2010-09-10",
        treatment: "Inhalers and allergy management",
      },
    ],
  },
]);

db.patients.updateOne(
  {
    firstName: "Anita",
  },
  {
    $set: {
      age: 40,
      "history.1": {
        disease: "Cold",
        diagnosedOn: "2023-11-01",
        treatment: "Citroen tablet",
      },
    },
  },
);

db.patients.find({ age: { $gt: 30 } });

db.patients.deleteMany({
  "history.disease": "Cold",
});

db.patients.aggregate([{ $out: { db: "hospital", coll: "patients" } }]);

// Section 3: Schema & Relations

db.products.insertMany([
  {
    name: "A Book!",
    price: 12.99,
  },
  {
    name: "T-shirt",
    seller: {
      name: "Max",
      age: 29,
    },
  },
]);

db.products.deleteMany({});

db.products.insertMany([
  {
    name: "Book",
    price: 12.99,
  },
  {
    name: "T-shirt",
    price: 399.12,
  },
]);

db.products.insertOne({
  name: "Computer",
  price: 1599,
  details: {
    os: "macOS",
    memory: "500 GB",
    chip: "Silicon Chip",
    model: "MacBook M4 pro",
    color: "Black",
  },
});

db.products.updateMany({ details: null }, { $set: { details: null } });

db.products.updateMany({ details: null }, { $unset: { details: 1 } });

db.companies.insertOne({
  name: "Apple Inc.",
  isStartUp: false,
  countOfEmployees: 33,
  funding: 9857327192374,
  ceo: {
    name: "Mark CEO",
  },
  foundingDate: new Date(),
  tags: [
    { title: "super" },
    { title: "perfect" },
    { title: "fast-growing" },
    { title: "perfect" },
  ],
  createdAt: new Timestamp(),
});

db.numbers.insertOne({ a: 1 });

db.numbers.insertOne({ a: Number(1) });

db.patients.insertOne({
  name: "Max",
  age: 29,
  diseaseSummary: "summary-max-1",
});

db.diseaseSummary.insertOne({
  _id: "summary-max-1",
  diseases: ["cold", "fever"],
});

db.patients.findOne({ name: "Max" });

const dsid = db.patients.findOne({ name: "Max" }).diseaseSummary;

db.diseaseSummary.findOne({ _id: dsid });

db.patients.deleteMany({});

db.patients.insertOne({
  name: "Max",
  age: 29,
  diseases: ["cold", "fever"],
});

db.persons.insertOne({
  name: "Max",
  car: {
    model: "BMW",
    price: 400000,
  },
});

db.persons.insertOne({
  name: "Max",
  age: 42,
  salary: 20000000,
});

db.models.insertOne({
  owner: ObjectId("6a0837630ae9bc37a32f0243"),
  model: "BMW",
  price: 400000,
});

db.questionThreads.insertOne({
  creator: "Max",
  question: "How does this all work?",
  answers: ["q1a1", "q2a2", "q3a3"],
});

db.questionThreads.updateOne(
  {
    _id: ObjectId("6a0838dc0ae9bc37a32f0245"),
  },
  {
    $pop: {
      answers: 1,
    },
  },
);

db.questionThreads.updateOne(
  {
    _id: ObjectId("6a0838dc0ae9bc37a32f0245"),
    answers: "q2a2",
  },
  {
    $set: {
      "answers.$": "q1a2",
    },
  },
);

db.answers.insertMany([
  {
    _id: "q1a1",
    text: "It works like that. ",
  },
  {
    _id: "q1a2",
    text: "Thanks!",
  },
]);

db.questionThreads.insertOne({
  creator: "Max",
  question: "How does this all work?",
  answers: [
    {
      text: "It works like that. ",
    },
    {
      text: "Thanks!",
    },
  ],
});

db.cityData.insertOne({
  name: "New York City",
  coordinates: { lat: 21, lng: 55 },
});

db.citizens.insertMany([
  {
    name: "Max",
    cityId: ObjectId("6a0840440ae9bc37a32f0247"),
  },
  {
    name: "Manuel",
    cityId: ObjectId("6a0840440ae9bc37a32f0247"),
  },
]);

db.products.insertOne({ title: "Book", price: 299 });

db.users.insertOne({ name: "Max", age: 29 });

db.orders.insertOne({
  productId: ObjectId("6a0845910ae9bc37a32f024a"),
  userId: ObjectId("6a0845960ae9bc37a32f024b"),
});

db.customers.updateOne(
  {
    _id: ObjectId("6a0845960ae9bc37a32f024b"),
  },
  {
    $set: {
      orders: [
        {
          productId: ObjectId("6a0845910ae9bc37a32f024a"),
          quantity: 2,
        },
      ],
    },
  },
);

db.customers.updateOne(
  {
    _id: ObjectId("6a0845960ae9bc37a32f024b"),
  },
  {
    $set: {
      orders: [
        {
          title: "Book",
          price: 299,
          quantity: 2,
        },
      ],
    },
  },
);

db.books.insertOne({
  name: "My Favorite Book!",
  authours: [
    {
      name: "Max",
      age: 29,
    },
    {
      name: "Manuel",
      age: 32,
    },
  ],
});

db.authors.insertMany([
  {
    name: "Max",
    age: 29,
    address: { street: "Main" },
  },
  {
    name: "Manuel",
    age: 32,
    address: { name: "Side track" },
  },
]);

db.books.updateOne(
  {
    name: "My Favorite Book!",
  },
  {
    $set: {
      authours: [
        ObjectId("6a0848760ae9bc37a32f024e"),
        ObjectId("6a0848760ae9bc37a32f024f"),
      ],
    },
  },
);

db.books.insertOne({
  name: "My Favorite Book!",
  authours: [
    ObjectId("6a084b5a0ae9bc37a32f0250"),
    ObjectId("6a084b5a0ae9bc37a32f0251"),
  ],
});

db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authors",
      foreignField: "_id",
      as: "creators",
    },
  },
]);

db.users.insertOne({
  name: "S M Satheesh",
  age: 26,
  email: "test@gmail.com",
});

db.posts.insertOne({
  title: "My First Post",
  text: "This is first post, going forward will post much as possible.",
  tags: ["new-beginning", "ice-breaker", "discipline"],
});

db.users.updateOne(
  {
    _id: ObjectId("6a084f550ae9bc37a32f0253"),
  },
  {
    $set: {
      posts: [ObjectId("6a084fab0ae9bc37a32f0254")],
    },
  },
);

db.posts.updateOne(
  {
    _id: ObjectId("6a084fab0ae9bc37a32f0254"),
  },
  {
    $set: {
      comments: [{ text: "All the very best!", commentLikes: 2 }],
    },
  },
);

db.posts.updateOne(
  {
    _id: ObjectId("6a084fab0ae9bc37a32f0254"),
  },
  {
    $push: {
      "comments.0.replies": [
        {
          text: "Thank, You!",
          commentLikes: 3,
        },
      ],
    },
  },
);

db.posts.updateOne(
  {
    _id: ObjectId("6a084fab0ae9bc37a32f0254"),
  },
  {
    $pop: {
      comments: 1,
    },
  },
);

db.posts.updateOne(
  {
    _id: ObjectId("6a084fab0ae9bc37a32f0254"),
  },
  {
    $set: {
      creatorId: ObjectId("6a084f550ae9bc37a32f0253"),
    },
  },
);

db.users.updateOne(
  {
    _id: ObjectId("6a084f550ae9bc37a32f0253"),
  },
  {
    $unset: {
      posts: 1,
    },
  },
);

db.users.insertOne({
  name: "S M Harish",
  age: 24,
  email: "test1@gmail.com",
});

db.posts.updateOne(
  {
    _id: ObjectId("6a084fab0ae9bc37a32f0254"),
  },
  {
    $set: {
      "comments.0.author": ObjectId("6a08537d0ae9bc37a32f0255"),
      "comments.0.replies": {
        text: "Thank, You!",
        replyLikes: 3,
        author: ObjectId("6a084f550ae9bc37a32f0253"),
      },
    },
  },
);

db.posts.aggregate(
  {
    $lookup: {
      from: "users",
      localField: "creatorId",
      foreignField: "_id",
      as: "creatorData",
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "comments.author",
      foreignField: "_id",
      as: "commentAuthorData",
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "comments.replies.author",
      foreignField: "_id",
      as: "replyAuthorData",
    },
  },
);

db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator"],
      properties: {
        title: {
          bsonType: "string",
          description: "Must be a string and is required",
        },
        text: {
          bsonType: "string",
          description: "Must be a string and is required",
        },
        creator: {
          bsonType: "objectId",
          description: "Must be an ObjectId and is required",
        },
        comments: {
          bsonType: "array",
          description: "Must be an array and is optional",
          items: {
            bsonType: "object",
            required: ["text", "author"],
            properties: {
              text: {
                bsonType: "string",
                description: "Must be a string and is required",
              },
              author: {
                bsonType: "objectId",
                description: "Must be an ObjectId and is required",
              },
              commentLikes: {
                bsonType: "number",
                description: "Must be a number and is optional",
              },
              replies: {
                bsonType: "array",
                description: "Must be an array and is optional",
                required: ["text", "author"],
                properties: {
                  text: {
                    bsonType: "string",
                    description: "Must be a string and is required",
                  },
                  author: {
                    bsonType: "objectId",
                    description: "Must be an ObjectId and is required",
                  },
                  replyLikes: {
                    bsonType: "number",
                    description: "Must be a number and is optional",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

db.posts.insertOne({
  _id: ObjectId("6a084fab0ae9bc37a32f0254"),
  title: "My First Post",
  text: "This is first post, going forward will post much as possible.",
  tags: ["new-beginning", "ice-breaker", "discipline"],
  comments: [
    {
      text: "All the very best!",
      replies: [
        {
          text: "Thank, You!",
          author: ObjectId("6a084f550ae9bc37a32f0253"),
          replyLikes: 3,
        },
      ],
      author: ObjectId("6a08537d0ae9bc37a32f0255"),
      commentLikes: 2,
    },
  ],
  creator: ObjectId("6a084f550ae9bc37a32f0253"),
});

db.runCommand({
  collMod: "posts",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator"],
      properties: {
        title: {
          bsonType: "string",
          description: "Must be a string and is required",
        },
        text: {
          bsonType: "string",
          description: "Must be a string and is required",
        },
        creator: {
          bsonType: "objectId",
          description: "Must be an ObjectId and is required",
        },
        comments: {
          bsonType: "array",
          description: "Must be an array and is optional",
          items: {
            bsonType: "object",
            required: ["text", "author"],
            properties: {
              text: {
                bsonType: "string",
                description: "Must be a string and is required",
              },
              author: {
                bsonType: "objectId",
                description: "Must be an ObjectId and is required",
              },
              commentLikes: {
                bsonType: "number",
                description: "Must be a number and is optional",
              },
              replies: {
                bsonType: "array",
                description: "Must be an array and is optional",
                required: ["text", "author"],
                properties: {
                  text: {
                    bsonType: "string",
                    description: "Must be a string and is required",
                  },
                  author: {
                    bsonType: "objectId",
                    description: "Must be an ObjectId and is required",
                  },
                  replyLikes: {
                    bsonType: "number",
                    description: "Must be a number and is optional",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  validationAction: "warn",
});

db.posts.insertOne({
  title: "My Second Post",
  text: "This is second post, going forward will post much as possible.",
  tags: ["new-beginning", "ice-breaker", "discipline"],
  comments: [
    {
      text: "All the very best!",
      replies: [
        {
          text: "Thank, You!",
          author: ObjectId("6a084f550ae9bc37a32f0253"),
          replyLikes: 1,
        },
      ],
      author: ObjectId("6a08537d0ae9bc37a32f0255"),
      commentLikes: 2,
    },
  ],
  creator: 2,
});

// Section 6: Deeper dive in CREATE

db.persons.insertOne({
  name: "Max",
  age: 32,
  hobbies: ["sports", "car driving"],
});

db.persons.insertMany([
  {
    name: "Anna",
    age: 52,
    hobbies: ["cooking", "yoga"],
  },
]);

db.persons.insertMany([
  {
    name: "Maria",
    age: 32,
  },
  {
    name: "Chris",
    age: 43,
  },
]);

db.persons.insert({
  name: "S M Satheesh",
  age: 26,
  hobbies: ["coding", "car driving", "gaming"],
});

db.hobbies.insertMany([
  {
    _id: "sports",
    name: "Sports",
  },
  {
    _id: "cars",
    name: "Cars",
  },
  {
    _id: "cooking",
    name: "Cooking",
  },
  {
    _id: "eating",
    name: "Eating",
  },
  {
    _id: "collecting_items",
    name: "Collecting Items",
  },
]);

db.hobbies.insertMany([
  {
    _id: "yoga",
    name: "Yoga",
  },
  {
    _id: "collecting_items",
    name: "Collecting Items",
  },
]);

db.hobbies.insertMany(
  [
    {
      _id: "hiking",
      name: "Hiking",
    },
    {
      _id: "collecting_items",
      name: "Collecting Items",
    },
    {
      _id: "gardening",
      name: "Gardening",
    },
  ],
  { ordered: false },
);

db.persons.insertOne(
  {
    name: "Chrissy",
    age: 41,
  },
  { writeConcern: { w: 0 } },
);

db.persons.insertOne(
  {
    name: "Raj",
    age: 31,
  },
  { writeConcern: { w: 1, j: true } },
);

db.persons.insertOne(
  {
    name: "Alia",
    age: 22,
  },
  { writeConcern: { w: 1, wtimeout: 10, j: true } },
);

db.companyDocument.insertOne({
  _id: "tcs",
  name: "TCS",
  countOfEmployees: 600000,
  industry: "service",
});

db.companyDocument.insertMany([
  {
    _id: "infosys",
    name: "Infosys",
    countOfEmployees: 250000,
    industry: "service",
  },
  {
    _id: "hcltech",
    name: "HCL Tech",
    countOfEmployees: 100000,
    industry: "service",
  },
]);

db.companyDocument.insertMany(
  [
    {
      _id: "wipro",
      name: "Wipro",
      countOfEmployees: 400000,
      industry: "service & BPS",
    },
    {
      _id: "hcltech",
      name: "HCL Tech",
      countOfEmployees: 100000,
      industry: "service",
    },
    {
      _id: "lti",
      name: "LTI Mindtree",
      countOfEmployees: 50000,
      industry: "service & consulting",
    },
  ],
  { ordered: false },
);

db.companyDocument.insertOne(
  {
    _id: "thoughtworks",
    name: "Thoughtworks",
    countOfEmployees: 18000,
    industry: "service & consulting",
  },
  { writeConcern: { w: 1, j: undefined } },
);

db.companyDocument.insertOne(
  {
    _id: "klynk",
    name: "Klnyk",
    countOfEmployees: 12,
    industry: "product & sales",
  },
  { writeConcern: { w: 1, j: true } },
);

// Section 7: Advanced Read document using filters and operators

db.movieDocument.find({ name: "The Last Ship" });

db.movieDocument.find({ runtime: 60 });

db.movieDocument.findOne({ runtime: 60 });

db.movieDocument.find({ runtime: { $eq: 60 } });

db.movieDocument.find({ runtime: { $lt: 60 } });

db.movieDocument.find({ runtime: { $ne: 60 } });

db.movieDocument.find({ runtime: { $lte: 42 } });

db.movieDocument.find({ runtime: { $gte: 42 } });

db.movieDocument.find({ "rating.average": { $gt: 7 } });

db.movieDocument.find({ genres: "Drama" });

db.movieDocument.find({ genres: ["Drama"] });

db.movieDocument.find({ runtime: { $in: [30, 42] } });

db.movieDocument.find({ "rating.average": { $lt: 3 } });

db.movieDocument.find({
  $or: [{ "rating.average": { $lt: 5 } }, { "rating.average": { $gt: 9.3 } }],
});

db.movieDocument.find({
  $nor: [{ "rating.average": { $lt: 5 } }, { "rating.average": { $gt: 9.3 } }],
});

db.movieDocument.find({
  $and: [{ "rating.average": { $gt: 9 } }, { genres: "Drama" }],
});

db.movieDocument.find({ "rating.average": { $gt: 9 }, genres: "Drama" });

db.movieDocument.find({ genres: "Drama", genres: "Horror" }); // Driver will not accept particularly node.js or .js

db.movieDocument.find({ $and: [{ genres: "Drama" }, { genres: "Horror" }] });

db.movieDocument.find({ runtime: { $not: { $eq: 60 } } }); // This is rarely used, since we have $ne, see next query both are same

db.movieDocument.find({ runtime: { $ne: 60 } });

db.userDocument.insertMany([
  {
    name: "Max",
    hobbies: [
      { title: "Sports", frequency: 3 },
      { title: "Cooking", frequency: 6 },
    ],
    phone: 6382616525,
  },
  {
    name: "Manuel",
    hobbies: [
      { title: "Cooking", frequency: 5 },
      { title: "Cars", frequency: 3 },
    ],
    phone: "9487855008",
    age: 34,
  },
]);

db.userDocument.find({ age: { $exists: true } });

db.userDocument.find({ age: { $exists: true, $gte: 34 } });

db.userDocument.find({ age: { $exists: false } });

db.userDocument.insertOne({
  name: "Anna",
  hobbies: [
    { title: "Sports", frequency: 2 },
    { title: "Yoga", frequency: 3 },
  ],
  phone: "7094498152",
  age: null,
});

db.userDocument.find({ age: { $exists: true, $ne: null } });

db.userDocument.find({ phone: { $type: "number" } });

db.userDocument.find({ phone: { $type: "string" } }, { phone: 1 });

db.userDocument.find({ phone: { $type: "double" } });

db.userDocument.find({ phone: { $type: ["double", "string"] } });

db.movieDocument.find({ summary: "musical" });

db.movieDocument.find({ summary: RegExp("musical") });

db.movieDocument.find({ summary: { $regex: "musical" } });

db.sales.insertMany([
  {
    volume: 100,
    target: 120,
  },
  {
    volume: 89,
    target: 80,
  },
  { volume: 200, target: 177 },
]);

db.sales.find({ $expr: { $gt: ["$volume", "$target"] } });

db.sales.find({
  $expr: {
    $gt: [
      {
        $cond: {
          if: { $gte: ["$volume", 190] },
          then: { $subtract: ["$volume", 10] },
          else: "$volume",
        },
      },
      "$target",
    ],
  },
});

db.movies.find({
  $and: [{ "meta.rating": { $gt: 9.2 } }, { "meta.runtime": { $lt: 100 } }],
});

db.movies.find({
  $or: [
    {
      genre: "drama",
    },
    {
      genre: "action",
    },
  ],
});

db.movies.find({ $expr: { $gt: ["$visitors", "$expectedVisitors"] } });

db.userDocument.find({ "hobbies.title": "Sports" });

db.userDocument.insertOne({
  name: "Chris",
  age: 42,
  hobbies: ["Sports", "Cooking", "Gaming"],
});

db.userDocument.find({
  hobbies: { $size: 3 },
});

db.movies.find({ genre: ["action", "thriller"] });

db.movies.find({ genre: { $all: ["action", "thriller"] } });

db.userDocument.find({ "hobbies.title": "Sports", "hobbies.frequency": 2 });

db.userDocument.find({
  "hobbies.title": "Sports",
  "hobbies.frequency": { $gte: 3 },
});

db.userDocument.find({
  hobbies: { $elemMatch: { title: "Sports", frequency: { $gte: 3 } } },
});

db.movies.find({ genre: { $size: 2 } });

db.movies.find({ "meta.aired": 2018 });

db.movies.find({
  ratings: {
    $elemMatch: { $lt: 10, $gt: 8 },
  },
});

db.movieDocument.find().sort({ updated: -1 });

db.movieDocument.find().sort({ "rating.average": 1 });

db.movieDocument.find().sort({ "rating.average": 1 }).skip(10);

db.movieDocument.find().sort({ "rating.average": 1 }).skip(10).limit(10);

db.movieDocument.find(
  {},
  {
    name: 1,
    genres: 1,
    runtime: 1,
    "rating.average": 1,
    "schedule.time": 1,
    _id: 0,
  },
);

db.movieDocument.find({ genres: "Drama" }, { "genres.$": 1 });

db.movieDocument.find(
  { genres: { $all: ["Drama", "Horror"] } },
  { "genres.$": 1 },
);

db.movieDocument.find(
  { genres: "Drama" },
  { genres: { $elemMatch: { $eq: "Horror" } } },
);

db.movieDocument.find(
  { "rating.average": { $gt: 9 } },
  { genres: { $slice: 2 } },
);

db.movieDocument.find(
  { "rating.average": { $gt: 9 } },
  { genres: { $slice: [1, 2] } },
);

// Section 9: Delete Documents

db.userDocument.deleteOne({ name: "Chris" });

db.userDocument.deleteMany({ age: { $gt: 30 } });

// Section 8: Update Documents

db.userDocument.updateOne(
  { _id: ObjectId("6a09fae726a76604effdb87b") },
  {
    $set: {
      hobbies: [
        { title: "Sports", frequency: 5 },
        { title: "Cooking", frequency: 3 },
        { title: "Hiking", frequency: 3 },
      ],
    },
  },
);

db.userDocument.find({ "hobbies.title": "Sports" });

db.userDocument.updateMany(
  { "hobbies.title": "Sports" },
  { $set: { isSporty: true } },
);

db.userDocument.updateOne(
  {
    _id: ObjectId("6a09fae726a76604effdb87b"),
  },
  {
    $set: {
      age: 45,
      phone: 6383163961,
    },
  },
);

db.userDocument.updateOne(
  {
    _id: ObjectId("6a09faca26a76604effdb879"),
  },
  {
    $inc: {
      age: 1,
    },
  },
);

db.userDocument.updateOne(
  {
    _id: ObjectId("6a09faca26a76604effdb879"),
  },
  {
    $inc: {
      age: 1,
    },
    $set: {
      isSporty: false,
    },
  },
);

db.userDocument.updateOne(
  {
    name: "Chris",
  },
  {
    $min: {
      age: 35,
    },
  },
);

db.userDocument.updateOne(
  {
    name: "Chris",
  },
  {
    $max: {
      age: 40,
    },
  },
);

db.userDocument.updateOne(
  {
    name: "Chris",
  },
  {
    $mul: {
      age: 1.8,
    },
  },
);

db.userDocument.updateMany(
  {
    isSporty: true,
  },
  {
    $set: {
      phone: null,
    },
  },
);

db.userDocument.updateMany(
  {
    isSporty: true,
  },
  {
    $unset: {
      phone: 1,
    },
  },
);

db.userDocument.updateMany({}, { $rename: { age: "totalAge" } });

db.userDocument.updateMany(
  {
    name: "Maria",
  },
  {
    $set: {
      age: 29,
      hobbies: [{ title: "Good foord", frequency: 6 }],
      isSporty: false,
    },
  },
  { upsert: true },
);

db.sportDocument.insertMany([
  {
    title: "Cricket",
    doesRequireTeam: true,
  },
  {
    title: "Football",
    doesRequireTeam: false,
    minimumPlayers: 34,
    requiredPlayers: 34,
  },
]);

db.sportDocument.updateMany(
  {
    doesRequireTeam: true,
  },
  {
    $set: {
      minimumPlayers: 30,
    },
  },
);

db.sportDocument.updateMany(
  {
    doesRequireTeam: true,
  },
  {
    $inc: {
      reqiredPlayers: 10,
    },
  },
);

db.userDocument.updateMany(
  {
    hobbies: {
      $elemMatch: {
        title: "Sports",
        frequency: {
          $gte: 3,
        },
      },
    },
  },
  {
    $set: {
      "hobbies.$.isHighfrequency": true,
    },
  },
);

db.userDocument.find({ "hobbies.frequency": { $gt: 2 } });

db.userDocument.updateMany(
  { "hobbies.frequency": { $gt: 2 } },
  {
    $set: {
      "hobbies.$.goodFrequency": true,
    },
  },
);

db.userDocument.updateMany(
  { "hobbies.frequency": { $gt: 2 } },
  {
    $unset: {
      "hobbies.$.goodFrequency": true,
    },
  },
);

db.userDocument.updateMany(
  {
    totalAge: { $gt: 30 },
  },
  {
    $inc: {
      "hobbies.$[].frequency": -1,
    },
  },
);

db.userDocument.updateMany(
  {
    "hobbies.frequency": { $gt: 2 },
  },
  {
    $set: {
      "hobbies.$[el].goodFrequency": true,
    },
  },
  { arrayFilters: [{ "el.frequency": { $gt: 2 } }] },
);

db.userDocument.updateOne(
  {
    name: "Maria",
  },
  {
    $push: {
      hobbies: {
        title: "Reading Books",
        frequency: 5,
      },
    },
  },
);

db.userDocument.updateOne(
  {
    name: "Maria",
  },
  {
    $push: {
      hobbies: {
        $each: [
          {
            title: "Sales",
            frequency: 7,
          },
          {
            title: "Jogging",
            frequency: 6,
          },
        ],
        $sort: {
          frequency: 1,
        },
      },
    },
  },
);

db.userDocument.updateOne(
  {
    name: "Maria",
  },
  {
    $pull: {
      hobbies: {
        title: "Good foord",
      },
    },
  },
);

db.userDocument.updateOne(
  {
    name: "Chris",
  },
  {
    $pop: {
      hobbies: -1,
    },
  },
);

db.userDocument.updateOne(
  { _id: ObjectId("6a09fae726a76604effdb87b") },
  {
    $set: {
      hobbies: [
        { title: "Sports", frequency: 5 },
        { title: "Cooking", frequency: 3 },
        { title: "Hiking", frequency: 3 },
      ],
    },
  },
);

db.userDocument.updateOne(
  {
    name: "Maria",
  },
  {
    $addToSet: {
      hobbies: {
        title: "Trekking",
        frequency: 5,
      },
    },
  },
);

// Section 10: Working with indexes

db.contacts.find({ "dob.age": { $gt: 10 } });

db.contacts.explain().find({ "dob.age": { $gt: 10 } });

db.contacts.explain("executionStats").find({ "dob.age": { $gt: 10 } });

db.contacts.createIndex({ "dob.age": 1 });

db.contacts.explain("executionStats").find({ "dob.age": { $gt: 60 } });

db.contacts.dropIndex({ "dob.age": 1 });

db.contacts.getIndexes();

db.contacts.createIndex({ gender: 1 });

db.contacts.explain("executionStats").find({ gender: "male" });

db.contacts.find({ gender: "male" }).count();

db.contacts.dropIndex({ gender: 1 });

db.contacts.createIndex({ "dob.age": 1, gender: 1 });

db.contacts.explain("executionStats").find({ "dob.age": 35, gender: "male" });

db.contacts.find({ "dob.age": 35 }).sort({ gender: 1 });

db.contacts.createIndex({ email: 1 }, { unique: true });

db.contacts.dropIndex({ "dob.age": 1, gender: 1 });

db.contacts.createIndex(
  { "dob.age": 1 },
  {
    name: "dob.age_1",
    partialFilterExpression: { gender: "male" },
  },
);
db.contacts.find({ "dob.age": { $gt: 60 } });

db.contacts.explain("executionStats").find({ "dob.age": 35, gender: "male" });

db.user.insertMany([
  {
    name: "Max",
    email: "max@test.com",
  },
  {
    name: "Manuel",
  },
]);

db.user.createIndex({ email: 1 });

db.user.createIndex({ email: 1 }, { unique: true });

db.user.insertOne({
  name: "Anna",
});

db.user.dropIndex({ email: 1 });

db.user.createIndex(
  { email: 1 },
  {
    unique: true,
    name: "email_1",
    partialFilterExpression: { email: { $exists: true } },
  },
);

db.user.insertOne({
  name: "Anna",
  email: "max@test.com",
});

db.sessions.insertOne({
  data: "test1234sfkdsfsd",
  createdAt: new Date(),
});

db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 10 });

db.customers.insertMany([
  {
    name: "Max",
    age: 29,
    salary: 3000,
  },
  {
    name: "Manu",
    age: 30,
    salary: 4000,
  },
]);

db.customers.createIndex({ name: -1 });

db.customers.explain("executionStats").find({ name: "Max" });

db.customers
  .explain("executionStats")
  .find({ name: "Max" }, { _id: 0, name: 1 });

db.customers.createIndex({ age: 1, name: 1 });

db.customers.explain("executionStats").find({ name: "Max", age: 30 });

db.customers.explain("allPlansExecution").find({ name: "Max", age: 30 });

db.contacts.insertOne({
  name: "Max",
  hobbies: ["Cooking", "Sports"],
  addresses: [
    {
      street: "Main Street",
    },
    {
      steet: "Second Street",
    },
  ],
});

db.contacts.createIndex({ hobbies: 1 });

db.contacts.find({ hobbies: "Sports" });

db.contacts.createIndex({ addresses: 1 });

db.contacts
  .explain("executionStats")
  .find({ addresses: { street: "Main Street" } });

db.contacts
  .explain("executionStats")
  .find({ "addresses.street": "Main Street" });

db.customers.explain("executionStats").find({ name: "Max" });

db.contacts.createIndex({ name: 1, hobbies: 1 });

db.contacts.createIndex({ hobbies: 1, addresses: 1 });

db.products.insertMany([
  {
    title: "A Book",
    description: "This is a awesome book aboout a young artist!",
  },
  {
    title: "Red T-Shirt",
    description: "This T-Shirt is red and it's pretty awesome!",
  },
]);

db.products.find();

db.products.createIndex({ description: 1 });

db.products.dropIndex({ description: 1 });

db.products.createIndex({ description: "text" });

db.products.find({ $text: { $search: "awesome!" } });

db.products.find({ $text: { $search: "book" } });

db.products.find({ $text: { $search: "red book" } });

db.products.find({ $text: { $search: '"red book"' } });

db.products.find({ $text: { $search: '"awesome book"' } });

db.products.find({ $text: { $search: "awesome T-Shirt" } });

db.products.find(
  { $text: { $search: "awesome T-Shirt" } },
  { score: { $meta: "textScore" } },
);

db.products.find(
  { $text: { $search: "awesome T-Shirt" } },
  { score: { $meta: "textScore" } },
  { sort: { score: { $meta: "textScore" } } },
);

db.products.getIndexes();

db.products.createIndex({ title: "text" });

db.products.dropIndex("description_text");

db.products.createIndex({ title: "text", description: "text" });

db.products.insertOne({ title: "A Ship", description: "Floating perfectly!" });

db.products.find({ $text: { $search: "ship" } });

db.products.find({ $text: { $search: "awesome" } });

db.products.find({ $text: { $search: "awesome -t-shirt" } });

db.products.dropIndex("title_text_description_text");

db.products.createIndex(
  { title: "text", description: "text" },
  { default_language: "english", weights: { title: 1, description: 10 } },
);

db.products.find(
  {
    $text: { $search: "red" },
  },
  { score: { $meta: "textScore" } },
);

db.products.find(
  {
    $text: { $search: "red", $caseSensitive: true },
  },
  { score: { $meta: "textScore" } },
);

db.products.createIndex(
  { title: "text", description: "text" },
  { default_language: "english", weights: { title: 10, description: 1 } },
);

db.products.find(
  {
    $text: { $search: "red", $caseSensitive: false },
  },
  { score: { $meta: "textScore" } },
);

db.ratings.createIndex({ age: 1 });

db.ratings.explain("executionStats").find({ age: { $gt: 8 } });

db.ratings.dropIndex({ age: 1 });

db.ratings.insertOne({ person_id: "1232132fdsfs", age: 26, score: 49.435 });

// Section 11: GeoSpatial Data

Lat: 7.1751495;
Long: 78.0395673;

db.places.insertOne({
  name: "Taj Mahal",
  location: {
    type: "Point",
    coordinates: [78.0395673, 7.1751495],
  },
});

(78.039436, 27.174734);

db.places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [78.039436, 27.174734],
      },
    },
  },
});

db.places.createIndex({ location: "2dsphere" });

db.places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [79.022743, 27.108886],
      },
      $maxDistance: 500,
      $minDistance: 20,
    },
  },
});

db.places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [78.039149, 7.174763],
      },
      $maxDistance: 120000,
      $minDistance: 10,
    },
  },
});

db.places.insertOne({
  name: "Home",
  location: {
    type: "Point",
    coordinates: [77.363445, 10.970094],
  },
});

db.places.insertMany([
  {
    name: "Power House",
    location: {
      type: "Point",
      coordinates: [77.363773, 10.969912],
    },
  },
  {
    name: "Sri Chakaravarthy Mall",
    location: {
      type: "Point",
      coordinates: [77.372071, 10.970739],
    },
  },
]);

db.places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [77.369356, 10.970732],
      },
      $maxDistance: 2000,
    },
  },
});

const point1 = [77.311428, 10.985376];
const point2 = [77.371899, 10.992982];
const point3 = [77.403672, 10.965847];
const point4 = [77.365047, 10.951225];

db.places.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[point1, point2, point3, point4, point1]],
      },
    },
  },
});

db.areas.insertOne({
  name: "Pongalur",
  area: {
    type: "Polygon",
    coordinates: [[point1, point2, point3, point4, point1]],
  },
});

db.areas.createIndex({ area: "2dsphere" });

db.areas.find({
  area: {
    $geoIntersects: {
      $geometry: {
        type: "Point",
        coordinates: [77.364444, 10.972301],
      },
    },
  },
});

db.places.find({
  location: {
    $geoWithin: {
      $centerSphere: [[77.364444, 10.972301], 1000 / 6378100],
    },
  },
});

db.locations.insertMany([
  {
    name: "KR Puram Auto Stand",
    delivery: {
      type: "Point",
      coordinates: [77.676733, 13.000001],
    },
  },
  {
    name: "Krishnarajapuram Diesel Loco Shed Railway Station",
    delivery: {
      type: "Point",
      coordinates: [77.692132, 13.000365],
    },
  },
  {
    name: "Rainbow Children's Hospital",
    delivery: {
      type: "Point",
      coordinates: [77.697798, 12.975505],
    },
  },
]);

db.locations.createIndex({ delivery: "2dsphere" });

db.locations.find({
  delivery: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [77.701698, 12.965207],
      },
      $minDistance: 1000,
      $maxDistance: 2000,
    },
  },
});

const point01 = [77.673867, 13.010273];
const point02 = [77.687774, 13.013533];
const point03 = [77.699385, 12.993915];

db.locations.find({
  delivery: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[point01, point02, point03, point01]],
      },
    },
  },
});

db.multiDelivery.insertOne({
  name: "Multiple Deliveries",
  origin: {
    type: "Polygon",
    coordinates: [[point01, point02, point03, point01]],
  },
});

// Section 12: Aggregation Framework

db.persons.aggregate([
  {
    $match: {
      gender: "male",
    },
  },
]);

db.persons.aggregate([
  {
    $match: {
      gender: "female",
    },
  },
]);

db.persons.aggregate([
  {
    $match: {
      gender: "male",
    },
  },
  {
    $group: {
      _id: { state: "$location.state" },
      totalPersons: {
        $sum: 1,
      },
    },
  },
]);

db.persons.find({ gender: "male", "location.state": "longford" }).count();

db.persons.aggregate([
  {
    $match: {
      gender: "female",
    },
  },
  {
    $group: {
      _id: { state: "$location.state" },
      totalPersons: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      totalPersons: -1,
    },
  },
]);

// Assignment: persons older than 50, group by gender, count by gender, avg. age and output totalPersons per gender

db.persons.aggregate([
  {
    $match: {
      "dob.age": {
        $gt: 50,
      },
    },
  },
  {
    $group: {
      _id: {
        gender: "$gender",
      },
      averageAge: {
        $avg: "$dob.age",
      },
      totalPersons: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      totalPersons: -1,
    },
  },
]);

db.persons.aggregate([
  {
    $project: {
      gender: 1,
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ["$name.title", 0, 1] } },
          {
            $substrCP: [
              "$name.title",
              1,
              { $subtract: [{ $strLenCP: "$name.title" }, 1] },
            ],
          },
          ".",
          " ",
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $subtract: [{ $strLenCP: "$name.first" }, 1] },
            ],
          },
          " ",
          { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
          {
            $substrCP: [
              "$name.last",
              1,
              { $subtract: [{ $strLenCP: "$name.last" }, 1] },
            ],
          },
        ],
      },
      _id: 0,
    },
  },
]);

db.persons.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      location: {
        type: "Point",
        coordinates: [
          {
            $convert: {
              input: "$location.coordinates.longitude",
              to: "double",
            },
          },
          {
            $convert: {
              input: "$location.coordinates.latitude",
              to: "double",
            },
          },
        ],
      },
    },
  },
  {
    $project: {
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ["$name.title", 0, 1] } },
          {
            $substrCP: [
              "$name.title",
              1,
              { $subtract: [{ $strLenCP: "$name.title" }, 1] },
            ],
          },
          ".",
          " ",
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $subtract: [{ $strLenCP: "$name.first" }, 1] },
            ],
          },
          " ",
          { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
          {
            $substrCP: [
              "$name.last",
              1,
              { $subtract: [{ $strLenCP: "$name.last" }, 1] },
            ],
          },
        ],
      },
      gender: 1,
      email: 1,
      location: 1,
    },
  },
]);

db.persons.aggregate([
  {
    $project: {
      name: 1,
      age: "$dob.age",
      birthday: { $convert: { input: "$dob.date", to: "date" } },
      email: 1,
      location: {
        type: "Point",
        coordinates: [
          {
            $convert: {
              input: "$location.coordinates.longitude",
              to: "double",
            },
          },
          {
            $convert: {
              input: "$location.coordinates.latitude",
              to: "double",
            },
          },
        ],
      },
      _id: 0,
    },
  },
  {
    $project: {
      age: 1,
      birthday: 1,
      email: 1,
      location: 1,
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ["$name.title", 0, 1] } },
          {
            $substrCP: [
              "$name.title",
              1,
              { $subtract: [{ $strLenCP: "$name.title" }, 1] },
            ],
          },
          ".",
          " ",
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $subtract: [{ $strLenCP: "$name.first" }, 1] },
            ],
          },
          " ",
          { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
          {
            $substrCP: [
              "$name.last",
              1,
              { $subtract: [{ $strLenCP: "$name.last" }, 1] },
            ],
          },
        ],
      },
      gender: 1,
      email: 1,
      location: 1,
    },
  },
]);

db.persons.aggregate([
  {
    $project: {
      name: 1,
      age: "$dob.age",
      birthday: { $toDate: "$dob.date" }, // short hand operators
      email: 1,
      location: {
        type: "Point",
        coordinates: [
          {
            $convert: {
              input: "$location.coordinates.longitude",
              to: "double",
            },
          },
          {
            $convert: {
              input: "$location.coordinates.latitude",
              to: "double",
            },
          },
        ],
      },
      _id: 0,
    },
  },
  {
    $project: {
      age: 1,
      birthday: 1,
      email: 1,
      location: 1,
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ["$name.title", 0, 1] } },
          {
            $substrCP: [
              "$name.title",
              1,
              { $subtract: [{ $strLenCP: "$name.title" }, 1] },
            ],
          },
          ".",
          " ",
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $subtract: [{ $strLenCP: "$name.first" }, 1] },
            ],
          },
          " ",
          { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
          {
            $substrCP: [
              "$name.last",
              1,
              { $subtract: [{ $strLenCP: "$name.last" }, 1] },
            ],
          },
        ],
      },
      gender: 1,
      email: 1,
      location: 1,
    },
  },
  {
    $group: {
      _id: { birthYear: { $isoWeekYear: "$birthday" } },
      birthCount: { $sum: 1 },
    },
  },
  {
    $sort: {
      // "_id.birthYear": -1,
      birthCount: -1,
    },
  },
]);

db.friends.aggregate([
  {
    $group: {
      _id: "$age",
      allHobbies: {
        $push: "$hobbies",
      },
    },
  },
]);

db.friends.aggregate([
  {
    $unwind: "$hobbies",
  },
]);

db.friends.aggregate([
  {
    $unwind: "$hobbies",
  },
  {
    $group: {
      _id: "$age",
      allHobbies: {
        $push: "$hobbies",
      },
    },
  },
]);

db.friends.aggregate([
  {
    $unwind: "$hobbies",
  },
  {
    $group: {
      _id: "$age",
      allHobbies: {
        // Avoid duplicate values or check value if not exists perform push operation
        $addToSet: "$hobbies",
      },
    },
  },
]);

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      examScores: { $slice: ["$examScores", 1] },
    },
  },
]);

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      examScores: { $slice: ["$examScores", 2, 1] },
    },
  },
]);

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      numScores: {
        $size: "$examScores",
      },
    },
  },
]);

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      examScore: {
        $filter: {
          input: "$examScores",
          as: "sc",
          cond: {
            $gt: ["$$sc.score", 60],
          },
        },
      },
    },
  },
]);

db.friends.aggregate([
  {
    $unwind: "$examScores",
  },
  {
    $project: {
      name: 1,
      age: 1,
      score: "$examScores.score",
    },
  },
  {
    $group: {
      _id: {
        _id: "$_id",
      },
      name: { $first: "$name" }, // $first: priority for doc level field display
      maxScore: {
        $max: "$score",
      },
    },
  },
  {
    $sort: {
      score: -1,
    },
  },
]);

db.persons.aggregate([
  {
    $bucket: {
      groupBy: "$dob.age",
      boundaries: [0, 18, 30, 50, 60, 80, 92, 120],
      output: {
        // names: {
        //   $addToSet: "$name.first",
        // },
        averageAge: {
          $avg: "$dob.age",
        },
        numOfPersons: { $sum: 1 },
      },
    },
  },
]);

db.persons.find({
  "dob.age": { $lt: 18 },
});

db.persons.aggregate([
  {
    $bucketAuto: {
      groupBy: "$dob.age",
      buckets: 5,
      output: {
        averageAge: {
          $avg: "$dob.age",
        },
        numOfPersons: { $sum: 1 },
      },
    },
  },
]);

db.persons.aggregate([
  {
    $match: {
      gender: "female",
    },
  },
  {
    $project: {
      _id: 0,
      location: {
        type: "Point",
        coordinates: [
          {
            $convert: {
              input: "$location.coordinates.longitude",
              to: "double",
              onError: 0.0,
              onNull: 0.0,
            },
          },
          {
            $convert: {
              input: "$location.coordinates.latitude",
              to: "double",
              onError: 0.0,
              onNull: 0.0,
            },
          },
        ],
      },
      gender: 1,
      name: { $concat: ["$name.first", " ", "$name.last"] },
      birthDate: { $toDate: "$dob.date" },
      age: "$dob.age",
    },
  },
  {
    $skip: 10,
  },
  {
    $limit: 10,
  },
  {
    $sort: {
      birthDate: 1,
    },
  },
  {
    $out: "transformed_persons",
  },
]);

db.transformed_persons.createIndex({ location: "2dsphere" });

db.transformed_persons.aggregate([
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [-8.557, -14.4912],
      },
      maxDistance: 10000000,
      query: {
        age: { $gt: 30 },
      },
      distanceField: "distance",
    },
  },
]);

// Section 13: Working with numeric data

db.persons.insertOne({ name: "Max", age: 29 });

db.persons.insertOne({ name: "Max", age: NumberInt(29) });

db.companies.insertOne({ valuation: NumberInt("5000000000") });

db.companies.insertOne({ valuation: 2147483647 });

db.companies.insertOne({ valuation: NumberLong(2147483648) });

db.companies.insertOne({ phoneNumber: 6382616525 });

db.companies.insertOne({ phoneNumber: NumberLong(6382616525) });

db.companies.insertOne({ phoneNumber: Long("6382616525") }); // NumberLong has been deprecated

db.accounts.insertOne({ name: "Max", amount: Long(12800000) });

db.accounts.insertOne({ name: "Harish", amount: Int32(100000) });

db.companies.deleteMany({});

db.companies.insertOne({ valuation: Long("9223372036854775807") });

db.companies.insertOne({ valuation: NumberInt("500000") });

db.science.insertOne({ a: 0.3, b: 0.5, c: 0.5 });

db.science.aggregate([
  {
    $project: {
      result: {
        $subtract: ["$a", "$b"],
      },
    },
  },
]);

db.science.deleteMany({});

db.science.insertOne({
  a: Decimal128("0.3"),
  b: Decimal128("0.1"),
});

db.science.updateOne({}, { $inc: { a: 0.1 } });

db.science.updateOne({}, { $inc: { a: Decimal128("0.1") } });

// Section 14: MongoDB & Security

// use Admin;

db.createUser({
  user: "Satheesh S M",
  pwd: "sms",
  roles: ["userAdminAnyDatabase"],
});

// use shop;

db.createUser({ user: "appdev", pwd: "dev", roles: ["readWrite"] });

db.auth("appdev", "dev");

db.products.insertOne({ name: "Conditioner" });

// mongod -u "appdev" - p "dev" --authenticationDatabase admin;

db.dropUser("Satheesh S M");

// Section 15: Performance, Fault Tolerance & Deployment

db.createCollection("capped", {
  capped: true,
  size: 1000, // bytes
  max: 3, // no. of documents
});

db.capped.insertMany([
  {
    name: "Satheesh S M",
  },
  {
    name: "Santhosh M",
  },
  {
    name: "Harish S M",
  },
]);

db.capped.insertOne({
  name: "Alex",
});

db.capped.find().sort({ $natural: -1 });

db.products.insertOne({
  name: "Macbook M4 Pro",
  description:
    "High-performance laptop with a sleek aluminum finish and retina display.",
  category: "Electronics > Computers > Laptops",
  brand: "Apple",
  price: {
    amount: 320000,
    currency: "INR",
  },
  inventory: {
    quantity_in_stock: 45,
    reserved: 3,
  },
  attributes: {
    processor: "M4 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    display: "16-inch 4K",
    weight_kg: 1.8,
  },
  tags: ["business", "lightweight", "computers"],
  variants: [
    {
      color: "Space Gray",
      sku: "LAP-M4-PRO-SG",
    },
    {
      color: "Silver",
      sku: "LAP-M4-PRO-SL",
    },
  ],
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
});

// Section 16: Transactions

db.users.insertOne({
  name: "Satheesh S M",
});

db.posts.insertMany([
  {
    title: "My First Post",
    userId: ObjectId("6a23d0d8477e5bbe86795116"),
  },
  {
    title: "My Second Post",
    userId: ObjectId("6a23d0d8477e5bbe86795116"),
  },
]);

const session = db.getMongo().startSession();
const userCollection = session.getDatabase("blog").users;
const postsCollection = session.getDatabase("blog").posts;
session.startTransaction();

postsCollection.deleteMany({
  userId: ObjectId("6a23d0d8477e5bbe86795116"),
});
userCollection.deleteOne({ name: "Satheesh S M" });
session.commitTransaction();
