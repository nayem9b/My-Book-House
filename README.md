# Readme

## All routes are defined in the 'user.route.ts' file

## APP uses 'api' as serverside route

## Database is named 'MongooseAssignment' and Database collection is named 'Books'

## App is running on MongoDB Atlas

## Interface is tested by '/create-data' route

# Questions

### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

Answer: The purpose of creating a model with an interface and schema is to provide a higher-level abstraction and a set of various rules for interacting with the underlying database In MongoDB.

It helps in many ways in defining the structure of a collection
1.Data Validation: By defining a schema in MongoDB collection, we can enforce data validation rules. The schema specifies the expected structure of the documents, including the types of fields, required fields, allowed values, and more. When we save or update data through the model, the ODM validates the data against the defined schema, ensuring that it adheres to the specified rules.

### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Answer: Field Filtering is like taking the only field that we want to work with. Like, we can use $project to take specific field to take into consideration.

We can use $project to filter field from various fields. Likewise if we want to show only the age data. We can use {$project: {age:1}}

### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

Answer:
In MongoDB models, instance methods are methods defined on individual model instances or documents. They are specific to each instance of the model and allow you to define custom behaviors or actions that can be performed on a single document.

userSchema.methods.getFullName = function() {
return this.firstName + ' ' + this.lastName;
};

Here, it is a custom instance method

### Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

Answer: $ne represents not equal. It returns the values which are not equal to the provided values \n

#### Example: {$ne:{age:40}} // Returns other peoples age not equal to 40

$gt represents greater than. It returns the values which are greater than the provided value \n

#### Example: {$gt:{age:40}} // Returns other peoples where age is greater than 40

$lt represents less than. It returns the values which are less that the specified value \n

#### Example : {$lt:{age:40}} // Returns other peoples where age is less than 40

$gte represents greater than equal . It returns the values which are greater or equal than the provided value \n#### Example: {$gte:{age:40}} // Returns other peoples where age is greater than or equal to 40

$lte represents less than equal. It returns the values which are less than or equal that the specified value \n

#### Example: {$lte:{age:40}} // Returns other peoples where age is less than or equal to 40

#### Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

Answer: The "$in" operator allows you to match values against an array of values. It checks if a specified field matches any of the values in the provided array. If a match is found, the document is returned in the query result. On the other hand,

The "$nin" operator is the negative of the "$in" operator. It allows you to exclude values from a given array. It checks if a specified field does not match any of the values in the provided array. If there is no match, the document is returned in the query result.

db.books.find({ genre: { $nin: ["Romance", "Horror"] } }) //Returns the books where genre array doesnot contain Romance and Horror
db.books.find({ genre: { $nin: ["Self-Help", "Scifi"] } }) //Returns the books where genre array contain Self-Help and Scifi
