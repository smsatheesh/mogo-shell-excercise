# MongoDB Shell Exercise - Complete Guide

This repository contains comprehensive MongoDB shell exercises covering a wide range of topics from basic CRUD operations to advanced aggregation and indexing strategies.

## Table of Contents

1. [Introduction to MongoDB](#introduction-to-mongodb)
2. [Database & CRUD Basics](#database--crud-basics)
3. [Schema & Relations](#schema--relations)
4. [Advanced Data Validation](#advanced-data-validation)
5. [Deep Dive into CREATE Operations](#deep-dive-into-create-operations)
6. [Advanced READ Operations with Filters](#advanced-read-operations-with-filters)
7. [DELETE Operations](#delete-operations)
8. [UPDATE Operations](#update-operations)
9. [Working with Indexes](#working-with-indexes)
10. [GeoSpatial Data](#geospatial-data)
11. [Aggregation Framework](#aggregation-framework)
12. [Working with Numeric Data](#working-with-numeric-data)

---

## Introduction to MongoDB

**Section 1: What is MongoDB?**

Basic introduction to MongoDB and document insertion:
- Inserting single documents with `insertOne()`
- Updating documents with `updateOne()` and `$set` operator
- Using `$unset` operator to remove fields
- Working with nested/embedded objects
- Pretty printing query results with `.pretty()`

### Key Concepts:
- Document-oriented database
- Flexible schema design
- JSON-like BSON format documents

---

## Database & CRUD Basics

**Section 2: Database & CRUD Basics**

Comprehensive coverage of Create, Read, Update, Delete operations with flight and passenger data:

### CREATE Operations:
- `insertOne()` - Insert a single document
- `insertMany()` - Insert multiple documents in bulk
- Handling duplicate keys and `_id` field

### READ Operations:
- `find()` - Query multiple documents, returns cursor
- `findOne()` - Query a single document
- Cursor methods: `.toArray()`, `.forEach()`, `.pretty()`
- Projection: Including/excluding fields with `{ field: 1 }` or `{ field: 0 }`
- Sorting with `{ sort: { field: 1 } }` (ascending) or `{ field: -1 }` (descending)

### UPDATE Operations:
- `updateOne()` - Update first matching document
- `updateMany()` - Update all matching documents
- `replaceOne()` - Replace entire document
- Using `$set` to modify specific fields
- Using `$unset` to remove fields

### DELETE Operations:
- `deleteOne()` - Delete first matching document
- `deleteMany()` - Delete all matching documents
- `deleteMany({})` - Delete all documents in collection

### Nested Field Operations:
- Working with nested documents using dot notation: `"status.description"`
- Accessing array fields: `hobbies: "Cooking"`
- Using RegExp for pattern matching: `RegExp("On")`

---

## Schema & Relations

**Section 3: Schema & Relations**

Understanding how to model relationships in MongoDB:

### One-to-One Relationships:
- Embedding related data in a single document
- Product with detailed specifications
- Person with car details

### One-to-Many Relationships:
- Using ObjectId references between collections
- Denormalization vs. Normalization trade-offs

### Many-to-Many Relationships:
- Using arrays of ObjectIds to reference multiple documents
- Book with multiple authors
- Books and authors collections with references

### Lookup Aggregation (JOIN):
- Using `$lookup` stage to join collections
- Foreign key relationships with `localField` and `foreignField`
- Example: Joining books with authors using aggregation

### Data Patterns:
- Manually referenced relationships
- Embedded arrays of objects
- Embedded documents within documents
- Null handling for optional relationships

---

## Advanced Data Validation

**Section 4: Advanced Data Validation**

Schema validation and data integrity:

### JSON Schema Validation:
- `createCollection()` with `validator` parameter
- Defining required fields
- Specifying BSON types (string, objectId, array, number, object)
- Nested object validation
- Array item validation

### Validation Updates:
- `db.runCommand()` with `collMod` to modify collection validation
- `validationAction` - "error" (default) or "warn"

### Field Constraints:
- Required fields specification
- Type validation (bsonType)
- Nested property validation
- Array element constraints
- Optional vs. required properties

---

## Deep Dive into CREATE Operations

**Section 6: Deeper Dive in CREATE**

Advanced insertion techniques and options:

### Insert Methods:
- `insertOne()` - Single document insertion
- `insertMany()` - Bulk insert with order control
- `insert()` - Deprecated method (still functional)

### Duplicate Handling:
- Handling duplicate ObjectIds
- `{ ordered: false }` - Continue insertion even if duplicates found
- Skipping duplicates in bulk operations

### Write Concerns:
- `writeConcern` parameter for data durability
- `{ w: 0 }` - Fire and forget
- `{ w: 1 }` - Acknowledged by single node
- `{ w: 1, j: true }` - Journaled acknowledgment
- `{ w: 1, j: true, wtimeout: 10 }` - Timeout for write acknowledgment

### Collections Used:
- Persons collection with hobbies
- Companies collection
- Product collection

---

## Advanced READ Operations with Filters

**Section 7: Advanced Read Document Using Filters and Operators**

Comprehensive querying with various operators and conditions:

### Comparison Operators:
- `$eq` - Equal to
- `$ne` - Not equal to
- `$gt` - Greater than
- `$gte` - Greater than or equal
- `$lt` - Less than
- `$lte` - Less than or equal
- `$in` - Match any value in array
- `$nin` - Match no values in array

### Logical Operators:
- `$and` - All conditions must match
- `$or` - At least one condition matches
- `$nor` - None of the conditions match
- `$not` - Negation of condition

### Field Operators:
- `$exists` - Check if field exists
- `$type` - Match documents by field type
- String, number, double, null types

### Pattern Matching:
- `RegExp()` - Regular expression matching
- `$regex` - Alternative regex syntax

### Array Operators:
- `$size` - Match array by length
- `$all` - All elements must be in array
- `$elemMatch` - Array element matching with conditions
- Nested array field queries

### Complex Expressions:
- `$expr` - Use aggregation expressions in queries
- Conditional logic with `$cond`
- Field arithmetic with `$subtract`
- Comparing field values: `$gt: ["$volume", "$target"]`

### Nested Field Queries:
- Dot notation for nested documents: `"rating.average"`
- Nested array element access: `"hobbies.title"`

### Query Projection:
- Including fields: `{ field: 1 }`
- Excluding fields: `{ field: 0 }`
- Array element projection with `$` operator
- Array slicing with `$slice: [skip, limit]`
- Element matching projection with `$elemMatch`

### Cursor Methods:
- `.sort()` - Sort results
- `.skip()` - Skip documents
- `.limit()` - Limit result count
- `.pretty()` - Pretty print output

---

## DELETE Operations

**Section 9: Delete Documents**

Removing documents from collections:

### Methods:
- `deleteOne()` - Delete first matching document
- `deleteMany()` - Delete all matching documents

### Use Cases:
- Delete by specific field value
- Delete by _id
- Conditional deletion based on complex filters
- Soft deletes vs. hard deletes

---

## UPDATE Operations

**Section 8: Update Documents**

Comprehensive update operations and field modifiers:

### Update Methods:
- `updateOne()` - Update first matching document
- `updateMany()` - Update all matching documents
- `update()` - Deprecated method

### Field Update Operators:
- `$set` - Set field value
- `$unset` - Remove field
- `$inc` - Increment numeric value
- `$min` - Update only if new value is smaller
- `$max` - Update only if new value is larger
- `$mul` - Multiply field value
- `$rename` - Rename field name

### Array Update Operators:
- `$push` - Add element to array
- `$addToSet` - Add element only if not exists
- `$pop` - Remove first (value: -1) or last (value: 1) element
- `$pull` - Remove all matching array elements
- `$each` - Push multiple elements
- `$sort` - Sort array after push

### Positional Operators:
- `$` - Update first matching array element
- `$[]` - Update all array elements
- `$[identifier]` - Update filtered array elements with `arrayFilters`

### Update Options:
- `{ upsert: true }` - Insert if document doesn't exist
- `arrayFilters` - Conditions for array element updates
- Conditional updates with complex filters

### Complex Updates:
- Updating nested fields with dot notation
- Array element updates at specific positions
- Bulk updates with multiple conditions
- Multi-level nested document updates

---

## Working with Indexes

**Section 10: Working with Indexes**

Index creation and optimization strategies:

### Index Types:
- Single field index: `{ field: 1 }` (ascending), `{ field: -1 }` (descending)
- Compound index: `{ field1: 1, field2: 1 }`
- Text index: `{ field: "text" }` for full-text search
- Geospatial index: `{ field: "2dsphere" }`

### Index Operations:
- `createIndex()` - Create new index
- `getIndexes()` - List all indexes
- `dropIndex()` - Remove specific index
- `explain()` - Query execution plan analysis

### Index Options:
- `{ unique: true }` - Enforce uniqueness
- `{ name: "custom_name" }` - Custom index name
- `{ expireAfterSeconds: 10 }` - TTL (Time-to-Live) index
- `{ partialFilterExpression }` - Partial/sparse index

### Query Optimization:
- `explain("executionStats")` - Execution statistics
- `explain("allPlansExecution")` - All execution plans
- Covered queries for optimal performance
- Index intersection strategies

### Text Search:
- `$text: { $search: "term" }` - Text search queries
- Phrase search: `'"quoted phrase"'`
- Exclusion: `"term -excluded"`
- Case-sensitive search: `$caseSensitive: true`
- Weighted text index: `{ weights: { field1: 10, field2: 1 } }`
- Text search scoring with `$meta: "textScore"`

### Index Use Cases:
- Improving query performance
- Enforcing data uniqueness
- Automatic document expiration
- Full-text search capabilities

---

## GeoSpatial Data

**Section 11: GeoSpatial Data**

Working with location-based data and queries:

### GeoJSON Format:
- Point coordinates: `{ type: "Point", coordinates: [longitude, latitude] }`
- Polygon coordinates: `{ type: "Polygon", coordinates: [[point1, point2, point3, point1]] }`

### Geospatial Indexes:
- `{ location: "2dsphere" }` - Spherical geometry index

### GeoSpatial Query Operators:
- `$near` - Find documents near a point
  - `$maxDistance` - Maximum distance in meters
  - `$minDistance` - Minimum distance in meters
  
- `$geoWithin` - Find documents within a geometry
  - Polygon: `$geometry: { type: "Polygon", coordinates: [...] }`
  - Circle: `$centerSphere: [[lng, lat], radius_in_radians]`
  
- `$geoIntersects` - Find geometries that intersect with a point

### Distance Calculations:
- Distances in meters for 2dsphere index
- Min and max distance filters

### Use Cases:
- Finding nearby locations
- Delivery area management
- Location-based searches
- Spatial data analysis

---

## Aggregation Framework

**Section 12: Aggregation Framework**

Advanced data processing and analysis:

### Pipeline Stages:
- `$match` - Filter documents (similar to find)
- `$project` - Reshape documents, select fields
- `$group` - Group documents by field, perform aggregations
- `$sort` - Sort grouped results
- `$skip` - Skip documents
- `$limit` - Limit result count
- `$lookup` - Join collections
- `$unwind` - Flatten arrays
- `$bucket` - Categorize by ranges
- `$bucketAuto` - Auto categorize with specified bucket count
- `$out` - Write results to collection
- `$geoNear` - Geospatial aggregation

### Aggregation Operators:

**Arithmetic:**
- `$add`, `$subtract`, `$multiply`, `$divide`, `$mod`

**String Operations:**
- `$concat` - Concatenate strings
- `$toUpper` - Convert to uppercase
- `$substrCP` - Extract substring
- `$strLenCP` - String length

**Type Conversion:**
- `$convert` - Convert between types
- `$toDate` - Convert to date
- `$toString` - Convert to string

**Array Operations:**
- `$push` - Add element to array
- `$addToSet` - Add unique elements
- `$slice` - Extract array slice
- `$size` - Array length
- `$filter` - Filter array elements
- `$unwind` - Flatten arrays into separate documents

**Date Operations:**
- `$isoWeekYear` - Extract ISO week year

**Aggregation Functions:**
- `$sum` - Sum values
- `$avg` - Average value
- `$min` - Minimum value
- `$max` - Maximum value
- `$count` - Count documents
- `$first` - First value in group
- `$last` - Last value in group

### Advanced Aggregation Patterns:

**Multi-stage Pipelines:**
- Combining multiple stages for complex analysis
- Data transformation and enrichment
- Calculated fields creation

**Grouping Strategies:**
- Group by single field
- Group by multiple fields
- Conditional grouping

**Lookup Join:**
- One-to-one lookups
- One-to-many lookups
- Multiple lookups in single pipeline

**Output:**
- Results returned to application
- Results written to new collection with `$out`

### Use Cases:
- Aggregating statistics by groups
- Full-text transformations
- Complex calculations
- Data analysis and reporting

---

## Working with Numeric Data

**Section 13: Working with Numeric Data**

Handling different numeric types in MongoDB:

### Numeric Types:

**JavaScript Number:**
- Default 64-bit floating point
- `0.3 + 0.1` = floating point precision issues
- Regular insertion without type specification

**Int32:**
- 32-bit signed integer
- `NumberInt(29)` or `Int32(100000)`
- Range: -2,147,483,648 to 2,147,483,647

**Int64 (NumberLong):**
- 64-bit signed integer
- `NumberLong(value)` or `Long(value)`
- `NumberLong()` is deprecated in favor of `Long()`
- Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

**Decimal128:**
- High-precision decimal
- `Decimal128("0.3")`
- Solves floating point precision issues
- Preferred for financial/scientific calculations

### Precision Issues:
- Floating point arithmetic errors
- Solution: Use Decimal128 for precise calculations
- Example: `0.3 + 0.1 + 0.1 + 0.1 ≠ 0.6` with float

### Type Usage:
- Phone numbers: NumberLong or String
- Valuation/amounts: NumberLong for large values
- Precise calculations: Decimal128
- Regular integers: NumberInt for storage efficiency

### Operations:
- Incrementing with `$inc`
- Converting between types with `$convert`
- Arithmetic operations in aggregation pipeline

---

## Summary

This comprehensive exercise covers:

# MongoDB Shell Exercises & Labs

Welcome to the MongoDB Shell practice repository. This project contains a comprehensive set of hands-on exercises designed to master the MongoDB Shell (`mongosh`), ranging from basic CRUD operations to advanced data analysis and optimization techniques.

---

## 📋 Course Curriculum & Syllabus

### 1. Database Fundamentals & CRUD
* **Basics:** Document insertion, querying, and basic CRUD operations.
* **Data Modification:** Updates, replacements, and field operations.
* **Numeric Handling:** Working with different numeric types and precision handling.

### 2. Data Modeling & Relationships
* **Relationships:** Implementing and querying One-to-One, One-to-Many, and Many-to-Many relationships.
* **Data Validation:** Defining schema validation rules and document constraints.

### 3. Advanced Querying & Performance Tuning
* **Advanced Queries:** Complex filters, logical operators, and regular expressions ($regex).
* **Optimization:** Deep dive into indexing strategies and query execution optimization.
* **Performance:** Understanding write concerns, read preferences, and index strategies.

### 4. Specialized Frameworks
* **Spatial Data:** Geospatial queries, bounding boxes, and location-based searches (`$geoWithin`, `$geoNear`).
* **Data Analysis:** Utilizing the Aggregation Framework for complex data transformations, grouping, and analytics pipelines.

---

## 🚀 Getting Started

1. Clone this repository.
2. Ensure you have MongoDB installed and running locally, or connect to a MongoDB Atlas cluster.
3. Open your terminal and start the shell:
   ```bash
   mongosh
   
## Tips for Learning

1. Execute each command in MongoDB shell or Compass to understand the behavior
2. Examine query results carefully to understand data structure
3. Use `explain()` to understand query execution
4. Start with simple queries and gradually move to complex aggregations
5. Practice with different data types and structures
6. Understand the trade-offs between embedding and referencing
7. Test index performance with `explain("executionStats")`
8. Use projection to optimize query performance

---

**Created by:** S M Satheesh  
**Last Updated:** May 31, 2026
